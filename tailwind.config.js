/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", ],
  theme: {
    extend: {
      colors: {
        'blue-900': '#1c2059',
        'yellow-500': '#F59E0B',
      }
    },
  },
  plugins: [],
}

