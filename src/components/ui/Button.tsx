import React from "react"
import classNames from "classnames"

type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  variant?: "primary" | "secondary"
  className?: string
}

export default function Button({
  children,
  onClick,
  variant = "primary",
  className = ""
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "px-4 py-2 rounded-xl font-medium transition-colors",
        variant === "primary"
          ? "bg-primary text-black hover:bg-primary/90"
          : "bg-secondary text-black hover:bg-secondary/90",
        className
      )}
    >
      {children}
    </button>
  )
}
