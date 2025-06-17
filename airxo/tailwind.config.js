/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#0e1311",
        quality:{
          good: "#188031",
          okay: "#0a66d8",
          bad: "#cc8c2c",
          dangerous: "#c22c36",
          veryDangerous: "#643ab7",
          lethal: "#202223"
        },
      }
    },
  },
  plugins: [],
}