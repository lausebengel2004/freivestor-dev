// src/App.tsx
import React from "react"
import PageLayout from "@layout/PageLayout"
import Startseite from "@features/start/Startseite"

export default function App() {
  return (
    <PageLayout title="Willkommen bei FreiVestor">
    <div className="min-h-screen bg-dark text-white p-8">
      <Startseite />
    </div>
    </PageLayout>
  )
}
