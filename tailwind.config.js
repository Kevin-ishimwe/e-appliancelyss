/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0048BB",
        secondary: "#2F3033",
      },
    },
  },
  plugins: [],
};
