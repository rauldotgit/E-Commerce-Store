/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Manrope: ['Manrope', 'sans-serif']
      },
      colors: {
        'k-main': '#FFC700',
        'k-black': '#0E0E0E',
        'k-dark-grey': '#141414',
        'k-grey': '#F1F1F1',
        'k-light-grey': '#FAFAFA'
      },
      letterSpacing: {
        broad: '0.5em',
        broader: '0.75em',
        broadest: '1em'
      }
    },
  },
  plugins: [],
}

