module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lemonism: ["var(--lemonism)", "sans-serif"],
        gt: ["var(--gt)", "sans-serif"],
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
  plugins: [require("@tailwindcss/line-clamp")],
};
