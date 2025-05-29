// src/layout/PageLayout.tsx
import React from "react";
import { Link } from "react-router-dom";
import { Home, Layers, Settings, User, Moon } from "lucide-react";

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="flex items-center justify-between px-6 py-4 shadow-md bg-slate-100">
        <div className="flex items-center gap-2">
          <img src="/freivestor-logo.svg" alt="FreiVestor Logo" className="h-8 w-8" />
          <span className="text-lg font-semibold tracking-wide">FreiVestor</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs bg-yellow-200 text-yellow-800 px-2 py-0.5 rounded-full font-semibold">
            Beta
          </span>

          <div className="relative group">
            <Link to="/">
              <Home className="w-5 h-5 text-slate-600 hover:text-slate-900 transition" />
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 text-xs bg-black text-white px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition">
              Startseite
            </div>
          </div>

          <div className="relative group">
            <Link to="/tools">
              <Layers className="w-5 h-5 text-slate-600 hover:text-slate-900 transition" />
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 text-xs bg-black text-white px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition">
              Module
            </div>
          </div>

          <div className="relative group">
            <Link to="/settings">
              <Settings className="w-5 h-5 text-slate-600 hover:text-slate-900 transition" />
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 text-xs bg-black text-white px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition">
              Einstellungen
            </div>
          </div>

          <div className="relative group">
            <Link to="/profil">
              <User className="w-5 h-5 text-slate-600 hover:text-slate-900 transition" />
            </Link>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 text-xs bg-black text-white px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition">
              Profil
            </div>
          </div>

          <div className="relative group">
            <button>
              <Moon className="w-5 h-5 text-slate-600 hover:text-slate-900 transition" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 text-xs bg-black text-white px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition">
              Dark Mode folgt bald
            </div>
          </div>

        </div>
      </header>
      <main className="p-6">
        {children}
      </main>
    </div>
  );
}
