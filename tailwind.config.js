/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textprimry: "#030712",
        background: "#22d3ee",
        textscondery: "#374151",
        hover: "#06b6d4",
      },
    },
  },
  plugins: [],
};
