/** @type {import('tailwindcss').Config} */



module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', '.public/index.html'],
  darkMode: false, // or 'media' or 'calls'
  content: [],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}


