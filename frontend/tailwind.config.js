/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#545dde',
        secondary: '#FFD78B',
      },
    },
  },
  plugins: [],
};
