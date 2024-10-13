/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: [
        '"Poppins", sans-serif', // Change to Poppins
        {
          fontFeatureSettings: '"cv11", "ss01"', // Optional: Keep if you need specific features
          fontVariationSettings: '"opsz" 32' // Optional: Keep if you need specific settings
        },
      ],
    },
    extend: {
        colors: {
            primary: '#545dde',
            secondary: '#FFD78B',
        },
    },
  },
  plugins: [],
};
