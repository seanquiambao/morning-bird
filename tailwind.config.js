/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        morning: {
          orange: "#EBAB5A",
          cyan: "#4FB8E4",
          navy: "#213D70",
        },
      },
    },
  },
  plugins: [],
};
