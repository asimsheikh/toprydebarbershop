/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      sans: ['Montserrat', ...defaultTheme.fontFamily.sans]
    }
  },
  colors: { secondary: '#2f2e2e6b' },
  plugins: []
};
