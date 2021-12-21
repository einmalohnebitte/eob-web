module.exports = {
  extends: [
    "next",
    "next/core-web-vitals",
    "prettier",
    "plugin:jsx-a11y/recommended", // Accessibility rules
    "plugin:jest/recommended",
    "plugin:tailwindcss/recommended",
  ],
  plugins: ["tailwindcss", "testing-library"],

  rules: {
    "no-console": [
      "warn",
      {
        allow: ["warn", "error"],
      },
    ],
    "jsx-a11y/anchor-is-valid": "off",
    "jest/no-mocks-import": "off",
  },
};
