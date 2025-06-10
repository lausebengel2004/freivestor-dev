import React from "react"
import classNames from "classnames"

type BadgeProps = {
  children: React.ReactNode
  variant?: "default" | "success" | "warning" | "error"
  className?: string
}

const variantClasses = {
  default: "bg-gray-700 text-white",
  success: "bg-green-600 text-white",
  warning: "bg-yellow-500 text-black",
  error: "bg-red-600 text-white"
}

export default function Badge({
  children,
  variant = "default",
  className = ""
}: BadgeProps) {
  return (
    <span
      className={classNames(
        "text-xs font-semibold px-3 py-1 rounded-full inline-block",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
