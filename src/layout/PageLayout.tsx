import React from "react"
import { NavLink } from "react-router-dom"

type PageLayoutProps = {
  title?: string
  children: React.ReactNode
}

export default function PageLayout({ title, children }: PageLayoutProps) {
  return (
    <div className="min-h-screen grid grid-cols-[200px_1fr] bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="bg-gray-800 p-4 space-y-4">
        <h2 className="text-lg font-bold">FreiVestor</h2>
        <nav className="flex flex-col gap-2">
          <NavLink to="/" className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : "text-gray-400"
          }>🏠 Start</NavLink>
          <NavLink to="/tools/schuldenfrei" className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : "text-gray-400"
          }>📘 Schuldenfrei</NavLink>
          <NavLink to="/tools/portfolio" className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : "text-gray-400"
          }>📊 Portfolio</NavLink>
          <NavLink to="/tools/einkommen" className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : "text-gray-400"
          }>💸 Einkommen</NavLink>
        </nav>
      </aside>

      {/* Content */}
      <main className="p-8">
        <header className="mb-6 border-b border-gray-700 pb-2">
          <h1 className="text-2xl font-bold tracking-wide">{title ?? "FreiVestor"}</h1>
        </header>
        {children}
      </main>
    </div>
  )
}
