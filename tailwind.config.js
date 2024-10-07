/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {},
    extend: {
      colors: {
        "morumsu": "#4731d3",
        "limon": "#cbf281",
        "btnclr": "#3730a3",
        "footerBackground": "#f9f9f9",
        "skillsBackground": "#f5f5f5",
        "customRed": "#ff0000",
      },
    },
  },
  plugins: [],
};
