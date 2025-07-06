module.exports = {
  theme: {
    extend: {
      animation: {
        "custom-star-movement-bottom":
          "custom-star-movement-bottom linear infinite",
        "custom-star-movement-top": "custom-star-movement-top linear infinite",
      },
      keyframes: {
        "custom-star-movement-bottom": {
          "0%": { transform: "translate(0%, 0%)", opacity: "1" },
          "100%": { transform: "translate(-100%, 0%)", opacity: "0" },
        },
        "custom-star-movement-top": {
          "0%": { transform: "translate(0%, 0%)", opacity: "1" },
          "100%": { transform: "translate(100%, 0%)", opacity: "0" },
        },
      },
    },
  },
};
