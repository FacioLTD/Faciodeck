"use client";

import Background3D from "@/components/Background3D";
import AuthGuard from "@/components/AuthGuard";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { Traction } from "@/components/Traction";
import { Opportunity } from "@/components/Opportunity";
import { FinancialForecast } from "@/components/FinancialForecast";
import { DeepTech } from "@/components/DeepTech";
import { Partners } from "@/components/Partners";
import { TheAsk } from "@/components/TheAsk";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <AuthGuard>
      <main className="min-h-screen text-white relative">
        <div className="fixed inset-0 z-[-1]">
          <Background3D />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 pointer-events-auto">
          <Hero />
          <Problem />
          <Solution />
          <Traction />
          <Opportunity />
          <FinancialForecast />
          <DeepTech />
          <Partners />
          <TheAsk />
          <Contact />
        </div>
      </main>
    </AuthGuard>
  );
}
