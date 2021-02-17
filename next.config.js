const withPWA = require("next-pwa");

const withFonts = require("next-fonts");

module.exports = withFonts(
  withPWA({
    target: "serverless",
    images: {
      domains: ["a0.muscache.com"],
    },
    pwa: {
      disable: process.env.NODE_ENV === "development",
      dest: "public",
    },
    i18n: {
      locales: ["en", "it"],
      defaultLocale: "en",
    },
  })
);
