import Link from "next/link";
import Head from "next/head";

export default class ChannelSeries extends React.PureComponent {
  render() {
    const { series, title } = this.props;
    return (
      <div>
        {series.length > 0 && (
          <div>
            <Head>
              <title>{title}</title>
            </Head>
            <h2>Series</h2>
            <div className="series">
              {series.map(serie => (
                <Link href={`/channel?id=${serie.id}`} prefetch>
                  <a className="serie">
                    <img src={`channel.urls.banner_image.original`} alt="" />
                    <h2>{serie.title}</h2>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        )}

        <style jsx>{`
          .series {
            display: grid;
            grid-gap: 15px;
            padding: 15px;
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          }
          a.serie {
            display: block;
            margin-bottom: 0.5em;
            color: #333;
            text-decoration: none;
          }
          .serie img {
            border-radius: 3px;
            box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
            width: 100%;
          }
        `}</style>
      </div>
    );
  }
}
