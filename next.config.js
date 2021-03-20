const withPWA = require("next-pwa");

const withImages = require("next-images");
const withFonts = require("next-fonts");

module.exports = withImages(
  withFonts(
    withPWA({
      target: "serverless",
      pwa: {
        disable: process.env.NODE_ENV === "development",
        dest: "public",
      },
      i18n: {
        locales: ["de", "en"],
        defaultLocale: "de",
        localeDetection: false,
      },
    })
  )
);
