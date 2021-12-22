import Document, { Head, Html, Main, NextScript } from "next/document";
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document<{
  styleTags: any;
  apartment: string;
  cover: string;
  color: string;
}> {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();

    const page = ctx.renderPage(
      (App: any) => (props: any) => sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();

    return {
      ...page,
      styleTags,
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/icon_144.png" type="image/png" />
          <link rel="manifest" href="manifest.json" />
          <link rel="apple-touch-icon" href="/icon_144.png"></link>

          <link rel="icon" href="/favicon.ico" type="image/ico" />
          {this.props.styleTags}
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
  var _paq = window._paq = window._paq || [];
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="//${process.env.NEXT_PUBLIC_MATOMO_URL}/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', 1]);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
  })(); `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
