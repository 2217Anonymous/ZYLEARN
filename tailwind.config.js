/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        zy: {
          primary: '#021433',
          secondary: '#14519E',
          accent: '#089396',
          highlight: '#24B9BC',
          offwhite: '#F7FAFB',
          white: '#FFFFFF',
        },
        mega: {
          pink: '#14519E',
          'pink-hover': '#089396',
          yellow: '#24B9BC',
          dark: '#021433',
          'dark-card': '#14519E',
          'dark-surface': '#021433',
          gray: '#021433',
          light: '#F7FAFB',
          navy: '#14519E',
          teal: '#089396',
          cyan: '#24B9BC',
        }
      },
      fontFamily: {
        sans: ['Sora', 'system-ui', 'sans-serif'],
        body: ['Sora', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'mega-pink': '0 15px 35px rgba(20, 81, 158, 0.2)',
        'mega-card': '0 15px 35px rgba(2, 20, 51, 0.06)',
        'mega-dark-card': '0 20px 40px rgba(2, 20, 51, 0.28)',
      },
    },
  },
  plugins: [],
}
