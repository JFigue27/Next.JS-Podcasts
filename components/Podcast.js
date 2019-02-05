import Link from "next/link";
import Head from "next/head";

export default class Podcast extends React.PureComponent {
  render() {
    const { clip, title } = this.props;
    return (
      <div>
        <Head>
          <title>{title}</title>
        </Head>
        <header> Podcasts </header>
        <div className="modal">
          <div className="clip">
            <nav>
              <Link href={`/channel?id=${clip.channel.id}`}>
                <a className="close"> Volver </a>
              </Link>
            </nav>

            <picture>
              <div style={{ backgroundImage: `url(${clip.urls.image || clip.channel.urls.logo_image.original})` }} />
            </picture>

            <div className="player">
              <h3>{clip.title}</h3>
              <h6>{clip.channel.title}</h6>
              <audio controls autoplay={true}>
                <source src={clip.urls.high_mp3} tyle="audio/mpeg" />
              </audio>
            </div>
          </div>
        </div>

        <style>{`
        nav a {
              display: inline-block;
              padding: 15px;
              color: white;
              cursor: pointer;
              text-decoration: none;
            }
        nav {
              background: none;
            }
        .modal {
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              z-index: 99999;
            }
            .clip {
              display: flex;
              height: 100%;
              flex-direction: column;
              background: #8756ca;
              color: white;
            }
            .player {
              padding: 30px;
              background: rgba(0, 0, 0, 0.3);
              text-align: center;
            }
             picture {
              display: flex;
              align-items: center;
              justify-content: center;
              flex: 1 1;
              flex-direction: column;
              width: auto;
              padding: 10%;
            }
            picture div {
              width: 100%;
              height: 100%;
              background-position: 50% 50%;
              background-size: contain;
              background-repeat: no-repeat;
            }
            audio {
              margin-top: 2em;
              width: 100%;
            }
             h6 {
              margin: 0;
              margin-top: 1em;
            }
            h3 {
              margin: 0;
            }
        `}</style>
      </div>
    );
  }
}
