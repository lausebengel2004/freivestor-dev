export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}" // Wichtig für Komponentenscan!
  ],
  theme: {
    extend: {
      colors: {
        dark: "#1f2937" // für `bg-dark`
      }
    }
  },
  plugins: []
}
