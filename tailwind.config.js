/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-normal': '#4caf50',
        'orange-normal': '#ff9800',
        'bg-offwhite': '#fafafa',
        'text-charcoal': '#212121',
      },
    },
  },
  plugins: [],
}