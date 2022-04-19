module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f8745d",
        secondary: "#ffb533",
      },
      backgroundImage: {
        "welcome-bg": "linear-gradient(#ffedd9,#fff)",
        "search-bg": "url('/public/images/search-bg.jpg')",
      },
    },
    fontFamily: {
      sans: ["Source Sans Pro", "sans-serif"],
    },
  },

  plugins: [],
};
