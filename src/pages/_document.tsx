import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/icon_144.png" type="image/png" />
          <link rel="manifest" href="manifest.json" />
          <link rel="apple-touch-icon" href="/icon_144.png"></link>

          <link rel="icon" href="/favicon.ico" type="image/ico" />

          <script
            defer
            data-domain="einmalohnebitte.de"
            src="https://plausible.rehab-republic.de/js/plausible.js"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
