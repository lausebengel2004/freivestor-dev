import React from "react"
import { Link } from "react-router-dom"
import Button from "@components/ui/Button"

export default function Startseite() {
  return (
    <div className="text-center py-12 space-y-4 bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-bold text-white">Willkommen bei FreiVestor 🚀</h1>
      <p className="text-lg text-white">Dein Einstieg in modulare Finanzfreiheit</p>
      <Link
        to="/tools/schuldenfrei"
        className="inline-block mt-4 px-4 py-2 bg-primary text-black rounded hover:bg-primary/90"
      >
        ➤ Zum Schuldenfrei-Tool
      </Link>
    </div>
    <Button variant="primary" onClick={() => alert("Los geht’s!")}>
  ➤ Los geht’s
</Button>
  )
}
