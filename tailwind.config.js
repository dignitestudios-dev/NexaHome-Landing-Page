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
        primary: "#1B6B4A",
        "primary-dark": "#145239",
        "primary-light": "#E8F5EE",
        accent: "#F5A623",
      },
      fontFamily: {
        sans: ["'DM Sans'", "sans-serif"],
        heading: ["'Playfair Display'", "serif"],
      },
    },
  },
  plugins: [],
};
