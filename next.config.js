const compose = require("lodash/flowRight");
const withPWA = require("next-pwa");
const withImages = require("next-images");
const withFonts = require("next-fonts");
const withGraphql = require("next-plugin-graphql");

const plugins = [withFonts, withImages, withGraphql, withPWA];

module.exports = compose(plugins)({
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
  images: {
    domains: ["media.graphcms.com"],
  },
});
