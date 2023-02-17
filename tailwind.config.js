module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lemonism: ["Lemonism-Regular", "sans-serif"],
        gt: ["GT", "sans-serif"],
      },
      fontSize: {
        "4.5xl": "3rem",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
    },
  },
};
