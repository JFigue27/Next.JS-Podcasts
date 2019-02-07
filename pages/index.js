import React, { Component } from "react";
import "isomorphic-fetch";
import Layout from "../components/Layout";
import ChannelGrid from "../components/ChannelGrid";
export default class extends Component {
  static async getInitialProps() {
    try {
      let data = await fetch("https://api.audioboom.com/channels/recommended");
      let { body: channels } = await data.json();
      return { channels };
    } catch (error) {}
  }
  render() {
    const { channels } = this.props;
    return (
      <Layout title="Podcasts">
        <ChannelGrid channels={channels} />;
      </Layout>
    );
  }
}
