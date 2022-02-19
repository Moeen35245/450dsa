module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        background: "#f1faee",
        darkBlue: "#6D4AB5",
        lightGreen: "#D8F3DC",
        darkGreen: "#06D6A0",
        lightRed: "#FFCCD5",
        darkRed: "#FF4D6D",
      },
    },
  },
  plugins: [],
};
