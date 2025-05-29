// 📁 src/App.tsx
import React from "react";
import { PageLayout } from "@layout/PageLayout";
import Startseite from "@features/start/Startseite";

export default function App() {
  return (
    <PageLayout>
      <Startseite />
    </PageLayout>
  );
}