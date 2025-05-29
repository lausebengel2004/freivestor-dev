// 📁 src/App.tsx
import React from "react";
import { PageLayout } from "@layout/PageLayout";
import { Startseite } from "@features/start/Startseite";

export default function App() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 p-4">
      <Startseite />
    </main>
  );
}