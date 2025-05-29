# 🧠 FreiVestor – Dein modulares Finanz-Tool

**FreiVestor** ist ein modernes, erweiterbares Tool zur Verwaltung, Analyse und Optimierung deiner finanziellen Situation. Ziel ist es, ein modulares Ökosystem zu schaffen, das von Schuldenabbau über Investitionsplanung bis hin zu Steueroptimierung alles abdeckt – strukturiert, datenbasiert und nachvollziehbar.

---

## 🚀 Techstack

* [x] **React** (TypeScript, Vite)
* [x] **TailwindCSS** für UI
* [x] **Aliasstruktur** (`@features`, `@styles`, `@components`, `@assets`)
* [x] Lokale + GitHub-Synchronisierung

---

## 📁 Projektstruktur

```txt
src/
├── assets/             → Bilder, Logos, Icons
├── components/         → UI-Komponenten (generisch)
├── features/           → Feature-Bereiche (z. B. start, schuldenfrei, portfolio)
├── styles/             → Tailwind-Styling (global.css)
├── App.tsx             → Einstiegspunkt React
├── main.tsx            → ReactDOM + CSS-Import
```

Alias-Konfiguration erfolgt in `vite.config.ts`:

```ts
@              → src/
@features      → src/features
@components    → src/components
@styles        → src/styles
@assets        → src/assets
```

---

## 🧪 Starten

```bash
npm install
npm run dev
```

> Öffne dann: [http://localhost:5173](http://localhost:5173)

---

## ✅ Aktueller Stand (Mai 2025)

* Projekt lokal aufgesetzt
* GitHub-Anbindung über `freivestor-dev`
* Tailwind korrekt integriert
* `Startseite.tsx` zeigt Willkommensnachricht

---

## 📌 Nächste Schritte

* [ ] `@features/schuldenfrei/` vorbereiten (Eingabe, Plan, Anzeige)
* [ ] Theme-System starten (Farben, Fonts, Spacing via Tailwind `extend`)
* [ ] UI-Komponenten strukturieren (Cards, Buttons, InputFields)
* [ ] Design-Doku (`design.md`) erstellen
* [ ] `zustand` oder `context` als State-Management vorbereiten
* [ ] `.vscode/settings.json` für Autoimport & Alias-IntelliSense

---

## 🧠 Empfohlene Git-Arbeitsweise

* Nutze **sprechende Commits**
* Branches pro Modul: `feature/schuldenfrei-plan`, `feature/theme-system`
* `main` bleibt stabil – Änderungen zuerst in Feature-Branch testen

```bash
git checkout -b feature/schuldenfrei-plan
git add .
git commit -m "feat: erste Eingabemaske für Schuldner erstellt"
git push origin feature/schuldenfrei-plan
```

---

## 💬 Fragen oder Module starten

> Sag im Chat einfach: `Starte Schuldenfrei-Modul` oder `Mach mir das Theme-System auf`. Ich führe dich Schritt für Schritt durch den Aufbau.

---

*Stand: 29.05.2025 – Maintainer: Thomas (lausebengel2004)*
