/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enable dark mode based on class
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-gray": "#d9d9f5",
        "primary-gray": "#0f172a",
        "secondary-gray": "#1e293b",
        "active-gray": "#d1d1ed",
      },
    },
  },
  plugins: [],
};
