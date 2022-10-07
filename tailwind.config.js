/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        600: "600px",
      },
      width: {
        520: "520px",
      },
      keyframes: {
        fadeIn: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 1.2s ease-in",
      },
      borderWidth: {
        1: "1px",
      },
      borderColor: {
        gray: "#dbdbdb",
      },
      colors: {
        gray: "#8e8e8e",
        grayish: "#fafafa",
        blue: "#0095f6",
        darkBlue: "#00376b",
      },
      fontSize: {
        smalltxt: "0.7rem",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
