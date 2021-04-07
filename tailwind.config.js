module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        lemonism: ["Lemonism-Regular", "sans-serif"],
        gt: ["GT", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
    },
  },
  plugins: [require("@tailwindcss/custom-forms")],
};
