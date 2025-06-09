import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"
import { fileURLToPath } from "url"

// ESM-kompatible __dirname-Erzeugung
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@features": path.resolve(__dirname, "src/features"),
      "@layout": path.resolve(__dirname, "src/layout"),
      "@agenten": path.resolve(__dirname, "src/agenten"),
      "@meta": path.resolve(__dirname, "src/meta")
    }
  }
})
