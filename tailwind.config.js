/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-beige': '#FFF1DA',
      },
      backgroundImage: {
        'header': "url('/background.svg')",
        'services': "url('/backgroung-plus.svg')"
      }
    },
  },
  plugins: [],
}