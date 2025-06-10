// tailwind.config.cjs
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#4ade80",   // grün
        secondary: "#facc15", // gelb
        dark: "#1f2937",       // fast schwarz
        surface: "#111827",    // Hintergrundfläche
        muted: "#9ca3af",      // Grautöne
        border: "#374151",
        accent: "#60a5fa",     // blau
        error: "#ef4444",
        success: "#22c55e",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
      spacing: {
        layout: "2rem",
      },
      borderRadius: {
        xl: "1rem",
      }
    }
  },
  plugins: []
}
