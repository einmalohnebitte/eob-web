const compose = require("lodash/flowRight");
const withImages = require("next-images");
const withFonts = require("next-fonts");
const withGraphql = require("next-plugin-graphql");

const plugins = [withFonts, withImages, withGraphql];

module.exports = compose(plugins)({
  env: {
    GQL_CMS_ID: process.env.GQL_CMS_ID,
  },
  i18n: {
    locales: ["de", "en"],
    defaultLocale: "de",
    localeDetection: false,
  },
  images: {
    dangerouslyAllowSVG: true,
    domains: ["media.graphassets.com"],
  },
});
