import React, { Component } from "react";
import "isomorphic-fetch";
import Layout from "../components/Layout";
import ChannelGrid from "../components/ChannelGrid";
import Error from "next/error";

export default class extends Component {
  static async getInitialProps({ res }) {
    try {
      let data = await fetch("https://api.audioboom.com/channels/recommended");
      let { body: channels } = await data.json();
      return { channels, statusCode: 200 };
    } catch (e) {
      res.statusCode = 503;
      return { channels: null, statusCode: 503 };
    }
  }
  render() {
    const { channels, statusCode } = this.props;
    if (statusCode !== 200) {
      return <Error statusCode={statusCode} />;
    }

    return (
      <Layout title="Podcasts">
        <ChannelGrid channels={channels} />
      </Layout>
    );
  }
}
