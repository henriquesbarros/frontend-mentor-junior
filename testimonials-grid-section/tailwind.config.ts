/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/consts/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "bg-purple-500",
    "bg-grey-500",
    "bg-dark",
    "bg-white",
    "border-purple-300",
    "border-white",
    "text-white",
    "text-purple-50",
    "text-grey-200",
    "text-grey-400",
    "text-grey-500",
  ],
  theme: {
    extend: {
      colors: {
        black: "#121212",

        white: "#FFFFFF",

        grey: {
          100: "#E7EAEE",
          200: "#CFCFCF",
          400: "#676D7E",
          500: "#48556A",
        },

        purple: {
          50: "#EDE4FF",
          300: "#A775F1",
          500: "#733FC8",
        },
      },

      fontFamily: {
        barlow: ["'Barlow Semi Condensed'", "sans-serif"],
      },

      spacing: {
        50: "0.5rem",
        100: "1rem",
        200: "1.5rem",
        300: "2rem",
        400: "3rem",
        500: "4rem",
      },
    },
  },
  plugins: [],
};
