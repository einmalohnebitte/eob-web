import "../styles/globals.css";

import "../components/ShopsMap/MarkerCluster.css";
import "../components/ShopsMap/MarkerCluster.Default.css";

import Head from "next/head";

declare global {
  interface Window {
    gtag: any;
  }
}

export function reportWebVitals(metric: any) {
  // eslint-disable-next-line no-console
  console.log(metric);
}

const EobApp = ({ Component, pageProps }: any) => {
  return (
    <>
      <Head>
        <title>Einmal Ohne, Bitte</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default EobApp;
