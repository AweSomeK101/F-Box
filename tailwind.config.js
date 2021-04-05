module.exports = {
  purge: {
    enabled: true,
    content: ["./*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "l-yellow": "#FAECAE",
        orange: "#FF6431",
        gray: {
          1000: "rgba(22,22,22,1)",
        },
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        "4xl": "0 0 50px rgba(0, 0, 0, 0.5)",
        "3xl": "0 0 25px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
