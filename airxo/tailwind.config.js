/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./App.tsx", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#0e1311",
        goodQuality: "#188031",
        okayQuality: "#0a66d8",
        badQuality: "#cc8c2c",
        dangerousQuality: "#c22c36",
        veryDangerousQuality: "#643ab7",
        lethalQuality: "#202223"
      }
    },
  },
  plugins: [],
}