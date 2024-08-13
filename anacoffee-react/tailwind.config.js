/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ana-pink': "#C572A5",
        'ana-white-pink': "#EAB8D9",
        'ana-black-pink': "#964083",
        'ana-green': "#709A86",
        'ana-yellow': "#E38C24",
      },
      textColor: {
        'ana-pink': "#C572A5",
        'ana-white-pink': "#EAB8D9",
        'ana-black-pink': "#964083",
        'ana-green': "#709A86",
        'ana-yellow': "#E38C24",
      }
    },
  },
  plugins: [],
}

