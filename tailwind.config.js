module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f8745d",
        secondary: "#ffb533",
      },
      keyframes: {
        welcome: {
          "0%": {
            transform: "scale(0)",
          },

          "100%": {
            transform: "scale(1)",
          },
        },
        clipPath: {
          "0%": {
            clipPath: "circle(6.3% at 100% 0)",
          },
          "100%": {
            clipPath: "circle(141.4% at 100% 0)",
          },
        },
        comeFromLeft: {
          "0%": {
            opacity: 0,
            transform: "translateX(-40%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        comeFromRight: {
          "0%": {
            opacity: 0,
            transform: "translateX(50%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        // welcome: "welcome 1.5s ease-out",
        clipPath: "clipPath 1s ease-out",
        comeFromLeft: "comeFromLeft 1s ease-in-out ",
        comeFromRight: "comeFromRight 1s ease-in-out ",
        // rotate: "rotate 1s ease-in-out ",
        // wiggle: "wiggle 0.7s ease-out",
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
