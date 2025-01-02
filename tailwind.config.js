const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgcolour: "#F2F9FF",
        bgcolourtwo: "#f3f4f6",
        primaryText: "#2C3E50",
        secondaryText: "#5D6D7E",
        highlight: "#3498DB",
        buttonText: "#FFFFFF",
        buttonHover: "#1A5276",
        navy: "#3572EF",
        crimson: "#E74C3C",
        mustard: "#F1C40F",
        emerald: "#2ECC71",
        charcoal: "#2C3E50",
        whitesmoke: "#ECF0F1",
        electricblue: "#3498DB",
        deeporange: "#E67E22",
      },
    },
  },

  plugins: [],
});
