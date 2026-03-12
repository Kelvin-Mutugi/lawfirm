/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#111111",
        teal: {
          primary: "#1b9e9e",
          dark: "#1b7f7f",
          light: "#9ee8e4",
        },
        yellow: "#e8b83a",
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
        sans: ["Trebuchet MS", "sans-serif"],
      },
    },
  },
  plugins: [],
}
