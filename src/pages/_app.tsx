import "tailwindcss/dist/base.min.css";

import Head from "next/head";

declare global {
  interface Window {
    gtag: any;
  }
}

export function reportWebVitals(metric: any) {
  console.log(metric);
}

const EobApp = ({ Component, pageProps }: any) => {
  return (
    <>
      <Head>
        <title>Einmal Ohne, Bitte</title>
        <link href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default EobApp;
