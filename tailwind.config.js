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
        bgcolour: "#F2F9FF", // Light sky blue
        primaryText: "#2C3E50", // Dark slate blue
        secondaryText: "#5D6D7E", // Muted gray-blue
        highlight: "#3498DB", // Vivid blue for emphasis
        buttonText: "#FFFFFF", // White for buttons
        buttonHover: "#1A5276", // Darker blue for hover effects
        navy: "#1F3A93",
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
