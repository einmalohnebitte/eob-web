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
          <script defer data-domain="einmalohnebitte.de" src="https://plausible.rehab-republic.de/js/plausible.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
