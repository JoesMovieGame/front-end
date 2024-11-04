/** @type {import('tailwindcss').Config} */
export default {
  content: ["/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        matchFull: "#16A34A",
        matchPartial: "#F59E0B",
        matchNone: "#9CA3AF",
      }
    },
  },
  plugins: [],
};
