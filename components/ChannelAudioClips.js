import Link from "next/link";
import Head from "next/head";

export default class ChannelAudioClips extends React.PureComponent {
  render() {
    const { channelAudioClips, title } = this.props;
    return (
      <div>
        <Head>
          <title>{title}</title>
        </Head>
        <h2>Ultimos Podcasts</h2>
        {channelAudioClips.map(clip => (
          <Link href={`/podcast?id=${clip.id}`} prefetch key={clip.id}>
            <a className="podcast">
              <h3>{clip.title}</h3>
              <div className="meta">{Math.ceil(clip.duration / 60)} minutes</div>
            </a>
          </Link>
        ))}

        <style jsx>{`
          .podcast:hover {
            color: #000;
          }
          .podcast h3 {
            margin: 0;
          }
          .podcast {
            display: block;
            text-decoration: none;
            color: #333;
            padding: 15px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.2);
            cursor: pointer;
          }
          .podcast .meta {
            color: #666;
            margin-top: 0.5em;
            font-size: 0.8em;
          }
        `}</style>
      </div>
    );
  }
}
