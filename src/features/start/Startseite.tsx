import React from "react"
import { Link } from "react-router-dom"
import Button from "@components/ui/Button"
import Card from "@components/ui/Card"
import Section from "@components/ui/Section"
import Badge from "@components/ui/Badge"


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

      <Button variant="primary" onClick={() => alert("Los geht’s!")}>
         ➤ Los geht’s
      </Button>
      
      <Section title="Module">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <Card>
      <h3 className="text-xl font-bold text-white mb-2">📘 Schuldenfrei</h3>
      <p className="text-white/80 text-sm mb-4">Plane deine Rückzahlung und feiere jeden Schritt.</p>
      <Badge variant="success">Verfügbar</Badge>
    </Card>

    <Card>
      <h3 className="text-xl font-bold text-white mb-2">📊 Portfolio</h3>
      <p className="text-white/80 text-sm mb-4">Verfolge dein Vermögen mit stoischer Ruhe.</p>
      <Badge variant="warning">In Arbeit</Badge>
    </Card>
  </div>
</Section>
    </div>
  )
}
