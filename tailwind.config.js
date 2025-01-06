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
        // Light Mode Colors
        bgcolour: "#F2F9FF",
        bgcolourtwo: "#f3f4f6",
        primaryText: "#2C3E50",
        secondaryText: "#5D6D7E",
        navy: "#3572EF",

        // Dark Mode Colors
        darkBg: "#121212", // Dark gray/black
        darkPrimary: "#E8F1F8", // Light blue for text
        darkSecondary: "#A0AABA", // Soft gray for secondary text
        darkAccent: "#3572EF", // Blue accent for interactive elements
        darkHover: "#FFFFFF", // White hover text
        darkCardBg: "#1E1E1E", // Dark card background
        darkCardHover: "#2A2A2A", // Slightly lighter for hover effect
      },
    },
  },

  plugins: [],
});
