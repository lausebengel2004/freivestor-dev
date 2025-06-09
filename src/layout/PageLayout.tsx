import React from "react"

type PageLayoutProps = {
  title?: string
  children: React.ReactNode
}

export default function PageLayout({ title, children }: PageLayoutProps) {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr] grid-cols-1 bg-dark text-white">
      {/* Header */}
      <header className="p-4 border-b border-gray-700 flex justify-between items-center bg-gray-900">
        <h1 className="text-xl font-bold tracking-wide">
          {title ?? "FreiVestor"}
        </h1>
        <div className="text-sm text-gray-400">beta</div>
      </header>

      {/* Content */}
      <main className="p-6">
        {children}
      </main>
    </div>
  )
}
