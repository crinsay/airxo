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
        okayQuality: "#ae863c",
        badQuality: "#ae863c",
        dangerousQuality: "#cb232d",
        veryDangerousQuality: "#7f50db",
        lethalQuality: "#202223"
      }
    },
  },
  plugins: [],
}