import React, { Component } from "react";
import Link from "next/link";
import ChannelAudioClips from "../components/ChannelAudioClips";
import ChannelSeries from "../components/ChannelSeries";
import Error from "next/error";

export default class extends Component {
  state = {
    openPodcast: null
  };

  static async getInitialProps({ query, res }) {
    let idChannel = query.id;

    try {
      let [reqChannel, reqAudios, reqSeries] = await Promise.all([
        fetch(`https://api.audioboom.com/channels/${idChannel}`),
        fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`),
        fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`)
      ]);

      if (reqChannel.status >= 404) {
        res.statusCode = reqChannel.status;
        return { channel: null, audioClips: null, series: null, statusCode: reqChannel.status };
      }

      let dataChannel = await reqChannel.json();
      let channel = dataChannel.body.channel;

      let dataAudios = await reqAudios.json();
      let audioClips = dataAudios.body.audio_clips;

      let datqSeries = await reqSeries.json();
      let series = datqSeries.body.channels;
      return { channel, audioClips, series, statusCode: 200 };
    } catch (e) {
      return { channel: null, audioClips: null, series: null, statusCode: 503 };
    }
  }

  openPodcast = (event, podcast) => {
    event.preventDefault();
    this.setState({
      openPodcast: podcast
    });
  };

  render() {
    const { channel, audioClips, series, statusCode } = this.props;
    const { openPodcast } = this.state;

    if (statusCode !== 200) {
      return <Error statusCode={statusCode} />;
    }
    return (
      <div>
        <header>
          <Link href="/">
            <a>Podcast</a>
          </Link>
        </header>
        <div className="banner" style={{ backgroundImage: `url(${channel.urls.banner_image.original})` }} />
        {openPodcast && <div>Hay un podcast abierto</div>}
        <h1> {channel.title} </h1>
        <ChannelSeries series={series} title="Series" />
        <ChannelAudioClips channelAudioClips={audioClips} title="Audio Clip" />
        <style jsx>{`
          header {
            color: #fff;
            background: #8756ca;
            padding: 15px;
            text-align: center;
          }
          header a {
            color: #fff;
            text-decoration: none;
          }

          .banner {
            width: 100%;
            padding-bottom: 25%;
            background-position: 50% 50%;
            background-size: cover;
            background-color: #aaa;
          }

          h1 {
            font-weight: 600;
            padding: 15px;
          }
          h2 {
            padding: 5px;
            font-size: 0.9em;
            font-weight: 600;
            margin: 0;
            text-align: center;
          }
        `}</style>

        <style jsx global>{`
          body {
            margin: 0;
            font-family: system-ui;
            background: white;
          }
        `}</style>
      </div>
    );
  }
}
