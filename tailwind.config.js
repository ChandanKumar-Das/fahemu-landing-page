/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
      },
      animation: {
        blink: 'blink 1s infinite',
      },
      fontFamily: {
          sans: ['Sen', 'ui-sans-serif', 'system-ui']
      },
    },
  },
  plugins: [],
}

