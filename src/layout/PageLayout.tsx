// src/layout/PageLayout.tsx
import React from "react";

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="flex items-center justify-between px-6 py-4 shadow-md bg-slate-100">
        <div className="flex items-center gap-2">
          <img src="/freivestor-logo.svg" alt="FreiVestor Logo" className="h-8 w-8" />
          <span className="text-lg font-semibold tracking-wide">FreiVestor</span>
        </div>
        <nav className="text-sm text-slate-600">Beta</nav>
      </header>
      <main className="p-6">
        {children}
      </main>
    </div>
  );
}
