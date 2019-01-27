import React, { Component } from "react";
import "isomorphic-fetch";
import Link from "next/link";

export default class extends Component {
  static async getInitialProps() {
    let data = await fetch("https://api.audioboom.com/channels/recommended");
    let { body: channels } = await data.json();
    return { channels };
  }

  render() {
    const { channels } = this.props;

    return (
      <div>
        <header>
          {/* <img src="./static/IC-Logo.png" alt="" /> */}
          PODCASTS
        </header>
        <div className="channels">
          {channels.map(channel => (
            <Link href={`/channel?id=${channel.id}`} prefetch>
              <a className="channel">
                <img src={channel.urls.logo_image.original} alt="" />
                <h2>{channel.title}</h2>
              </a>
            </Link>
          ))}
        </div>

        <style jsx>{`
          header {
            color: #fff;
            background: #8756ca;
            padding: 15px;
            text-align: center;
          }
          .channels {
            display: grid;
            grid-gap: 15px;
            padding: 15px;
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          }
          a.channel {
            display: block;
            margin-bottom: 0.5em;
            color: #333;
            text-decoration: none;
          }
          .channel img {
            border-radius: 3px;
            box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
            width: 100%;
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
            background-color: white;
          }
        `}</style>
      </div>
    );
  }
}

/* Afecta en todos los componentes P de la app/*
/* :global (p) {
  color: green;
} */
/* Afecta unicamente al div del componentes
/* div :global (p) {
  color: green;
} */
/* Afecta a todas las P que esten dentro de un div en la app.
/* :global (div p) {
  color: green;
} */
