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
  const base = "inline-flex items-center justify-center px-6 py-2 text-base rounded-xl font-semibold transition-colors duration-200 shadow-lg shadow-primary/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"


const styles = {
  primary: "bg-black text-white hover:bg-green-400 hover:text-black shadow-lg hover:shadow-green-300/40",
  secondary: "bg-secondary text-black hover:bg-secondary/80",
  outline: "border border-primary text-primary hover:bg-primary/10"
}


  return (
    <button type={type} onClick={onClick} className={classNames(base, styles[variant], className)}>
      {children}
    </button>
  )
}
