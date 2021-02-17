import "react-calendar/dist/Calendar.css";
import "tailwindcss/dist/base.min.css";

declare global {
  interface Window {
    gtag: any;
  }
}

export function reportWebVitals(metric: any) {
  console.log(metric);
}

function MyApp({ Component, pageProps }: any) {
  return <Component {...pageProps} />;
}

export default MyApp;
