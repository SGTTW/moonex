/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/*.js"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"], // Add Raleway
      },
    },
  },
  plugins: [],
};
