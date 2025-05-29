// src/features/start/Startseite.tsx
import React from "react";

export default function Startseite() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">Willkommen bei FreiVestor</h1>
      <p className="text-base md:text-lg text-slate-700">
        FreiVestor ist dein digitales Tool für klare Finanzplanung, bewusste Investitionen und echte Selbstbestimmung.
        Hier baust du Schritt für Schritt deine finanzielle Souveränität auf – ohne Überforderung, ganz in deinem Tempo.
      </p>

      <div className="flex flex-col-reverse md:flex-row items-center gap-6 mt-12">
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-2">Starte klar. Handle strukturiert.</h2>
          <p className="text-slate-600">
            FreiVestor begleitet dich vom Schuldenabbau bis zur Portfolio-Optimierung – wie ein Finanz-Coach, nur digital und modular.
          </p>
        </div>
        <img
          src="/assets/hero-finanzmodul.svg"
          alt="Finanz-Illustration"
          className="w-full max-w-sm object-contain"
        />
      </div>

      <div className="mt-8 space-y-4">
        <p>
          👉 Du startest mit dem Schuldenfrei-Tool, das dir hilft, deine Rückzahlungen zu strukturieren – inklusive motivierender
          Meilensteine und einem Feierbonus, wenn du ein Ziel erreichst.
        </p>
        <p>
          📊 Danach warten Rebalancing, Dividendenstrategien, Steueroptimierung und ein PDF-Export deiner kompletten Planung.
        </p>
        <p>
          🚀 FreiVestor ist modular. Du entscheidest, wann welches Tool für dich relevant ist – wie ein Baukasten für deine Finanzreise.
        </p>
      </div>

      <div className="mt-12 border-t pt-8 text-sm text-slate-500">
        <h4 className="font-medium mb-2">Was dich erwartet:</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>📅 Individuelle Rückzahlungspläne mit Feierbonus</li>
          <li>📈 Dividenden- und Rebalancing-Strategien</li>
          <li>📁 PDF-Export und Berichte für deine Finanzplanung</li>
          <li>🔧 Tools für Einkommen, Ausgaben und Steuern</li>
        </ul>
      </div>

      <div className="mt-16 text-center">
        <a
          href="/tools"
          className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Starte jetzt mit deinem ersten Finanzmodul
        </a>
      </div>
    </div>
  );
}
