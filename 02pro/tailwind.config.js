/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {
      color: {
        primary: "#f97316",
      },
      container:{
        center: true,
        padding: {
            DEFAULT: "1rem",
            sm: "2rem",
            md: "3rem",
            lg: "4rem",
            xl: "5rem",
            "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
}

