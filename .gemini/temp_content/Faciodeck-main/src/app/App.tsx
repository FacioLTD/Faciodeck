import { Hero } from "@/app/components/Hero";
import { Opportunity } from "@/app/components/Opportunity";
import { Traction } from "@/app/components/Traction";
import { Problem } from "@/app/components/Problem";
import { Solution } from "@/app/components/Solution";
import { Partners } from "@/app/components/Partners";
import { DeepTech } from "@/app/components/DeepTech";
import { FinancialForecast } from "@/app/components/FinancialForecast";
import { TheAsk } from "@/app/components/TheAsk";
import { Contact } from "@/app/components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Hero />
      <Opportunity />
      <Traction />
      <Problem />
      <Solution />
      <Partners />
      <DeepTech />
      <FinancialForecast />
      <TheAsk />
      <Contact />
    </div>
  );
}