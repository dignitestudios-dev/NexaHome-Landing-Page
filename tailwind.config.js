/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#005864",
        "primary-dark": "#004c56",
        "primary-light": "#03717f",
        accent: "#F5A623",
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
        heading: ["'Plus Jakarta Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
