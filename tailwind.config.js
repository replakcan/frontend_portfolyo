/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "morumsu": "#4731d3",
        "limon": "#cbf281",
        "btnclr": "#3730a3",
        "footerBackground": "#f9f9f9",
        "skillsBackground": "#f5f5f5",
        "eflatun": "#8F88FF",
        "btnswitch": "#FFE86E",
      },
    },
  },
  plugins: [],
};
