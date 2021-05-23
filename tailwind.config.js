module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        mainred: {
          darkred: "#A62A2A",
          button: "#751919",
        },
        usedColors: {
          black: "#363334",
          green: "#93AA90",
          darkbeige: "#C59C93",
          middlebeige: "#E0B2A0",
          lightbeige: "#EDB4A7",
        },
      },
      fontFamily: {
        text: ["Montserrat"],
      },
      letterSpacing: {
        title: "1em",
        underTitle: ".5em",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
