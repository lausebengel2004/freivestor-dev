import React from "react"

type SectionProps = {
  title?: string
  children: React.ReactNode
  className?: string
}

export default function Section({ title, children, className = "" }: SectionProps) {
  return (
    <section className={`mb-10 px-4 sm:px-6 md:px-8 ${className}`}>
      {title && <h2 className="text-2xl font-bold mb-4 text-white">{title}</h2>}
      <div>{children}</div>
    </section>
  )
}
