import React from "react"
import { useTheme } from "@context/ThemeContext"
import { Moon, Sun } from "lucide-react"

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="text-white hover:text-primary transition"
      title="Theme wechseln"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}
