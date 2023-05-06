/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGray:"#D3D3D3",
        purple:"#6842EF"
      }
    },
  },
  plugins: [],
}