import "../styles/globals.css";

import localFont from "next/font/local";
import "../components/ShopsMap/MarkerCluster.css";
import "../components/ShopsMap/MarkerCluster.Default.css";

import Head from "next/head";

const lemonism = localFont({
  src: "../fonts/font.woff",
  variable: "--lemonism",
});

const gt = localFont({
  src: "../fonts/GT-Cinetype-Light.woff",
  variable: "--gt",
});

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
      {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
      <main className={`${lemonism.variable} lemonism ${gt.variable} gt`}>
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default EobApp;
