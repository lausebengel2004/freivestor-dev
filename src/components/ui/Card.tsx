import React from "react"
import classNames from "classnames"

type CardProps = {
  children: React.ReactNode
  className?: string
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div className={classNames(
      "bg-gray-800 rounded-xl shadow-md p-6 border border-gray-700",
      className
    )}>
      {children}
    </div>
  )
}
