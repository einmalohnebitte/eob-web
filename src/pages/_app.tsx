import "react-calendar/dist/Calendar.css";
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
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default EobApp;
