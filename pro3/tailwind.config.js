/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center: true,
        padding:{
          DEFAULT: "1rem",
          sm: "1rem",
          md: "2rem",
          lg: "2rem",
          xl: "3rem",
          "2xl":"4rem",
        },
      },
    },
  },
  plugins: [],
}

