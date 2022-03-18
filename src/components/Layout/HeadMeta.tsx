import Head from "next/head";
import React from "react";

export const HeadMeta: React.FC<{
  metaDescription?: string | null;
  metaKeywords?: string | null;
}> = ({ metaDescription, metaKeywords }) => (
  <Head>
    <meta property="og:title" content="Einmal ohne, bitte" key="title" />
    <meta
      property="og:description"
      content={
        metaDescription ??
        "Das Label für müllfreies Einkaufen - finde dein Geschäft in der Nähe mit unserer Karte!"
      }
    />
    <meta
      name="description"
      content={
        metaDescription ??
        "Das Label für müllfreies Einkaufen - finde dein Geschäft in der Nähe mit unserer Karte!"
      }
    />
    <meta name="keywords" content={metaKeywords ?? "müllfreies, Karte"} />
    <script async defer data-domain="einmalohnebitte.de" src="https://plausible.einmalohnebitte.de/js/plausible.js"></script>
  </Head>
);
