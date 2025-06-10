import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import PageLayout from "@layout/PageLayout"
import Startseite from "@features/start/Startseite"

// Platzhalter für künftige Tools
const Schuldenfrei = () => <div className="p-6">📘 Schuldenfrei-Tool kommt bald</div>
const PortfolioTool = () => <div className="p-6">📊 Portfolio-Tool kommt bald</div>
const EinkommensTool = () => <div className="p-6">💸 Einkommensverteiler kommt bald</div>

export default function App() {
  return (
    <Router>
      <PageLayout title="FreiVestor">
        <Routes>
          <Route path="/" element={<Startseite />} />
          <Route path="/tools/schuldenfrei" element={<Schuldenfrei />} />
          <Route path="/tools/portfolio" element={<PortfolioTool />} />
          <Route path="/tools/einkommen" element={<EinkommensTool />} />
        </Routes>
      </PageLayout>
    </Router>
  )
}
