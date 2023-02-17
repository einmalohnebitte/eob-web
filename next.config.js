module.exports = {
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
};
