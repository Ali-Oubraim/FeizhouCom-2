/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-hero": "url('../src/assets/images/bg-hero.png')",
      },
    },
    fontFamily: {
      Saira: ["Saira", "sans-serif"],
    },
  },
  plugins: [],
};
