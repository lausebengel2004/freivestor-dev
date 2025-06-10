import React from "react"
import classNames from "classnames"

type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  variant?: "primary" | "secondary" | "outline"
  className?: string
  type?: "button" | "submit" | "reset"
}

export default function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
  type = "button"
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-4 py-2 rounded-xl font-medium transition-colors duration-200"

  const styles = {
    primary: "bg-primary text-black hover:bg-primary/90",
    secondary: "bg-secondary text-black hover:bg-secondary/90",
    outline: "border border-primary text-primary hover:bg-primary/10"
  }

  return (
    <button type={type} onClick={onClick} className={classNames(base, styles[variant], className)}>
      {children}
    </button>
  )
}
