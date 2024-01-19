/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#F4CE14" },
        secondary: { DEFAULT: "#495E57" },
      },
      fontFamily: {
        title: ['"Markazi Text"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
