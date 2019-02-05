import React, { Component } from "react";
import "isomorphic-fetch";
import Podcast from "../components/Podcast";

export default class extends Component {
  static async getInitialProps({ query }) {
    let id = query.id;
    let fetchClip = await fetch(`https://api.audioboom.com/audio_clips/${id}.mp3`);
    let clip = (await fetchClip.json()).body.audio_clip;
    return { clip };
  }
  render() {
    const { clip } = this.props;
    return (
      <div>
        <Podcast clip={clip} title="Podcast Clip Channel" />

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
