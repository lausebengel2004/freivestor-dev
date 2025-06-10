// src/main.tsx
import "./styles/global.css"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { ThemeProvider } from "@context/ThemeContext"  // <– korrekt mit Alias!

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
