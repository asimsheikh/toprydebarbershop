/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      sans: ['Montserrat', ...defaultTheme.fontFamily.sans]
    }
  },
  plugins: []
};
