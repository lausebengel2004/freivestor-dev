// tailwind.config.cjs
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4ade80",
        secondary: "#facc15",
        dark: "#1f2937"
      }
    }
  },
  plugins: []
}
