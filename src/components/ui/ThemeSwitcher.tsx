import React from "react"
import { useTheme } from "@context/ThemeContext"
import { Moon, Sun } from "lucide-react"

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="text-white hover:text-primary transition flex items-center gap-1"
      title="Theme wechseln"
    >
      {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
      <span className="text-sm hidden sm:inline">{theme}</span>
    </button>
  )
}
