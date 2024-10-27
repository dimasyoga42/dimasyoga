/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        fira: ['Fira Code', 'monospace'],
        martin: ['Martian Mono', 'monospace']
      }
    },
  },
  plugins: [
    daisyui,
  ],
}

