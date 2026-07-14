"use client";

import React from "react";
import "@/app/pdf/print.css";
import { SlideHero } from "./slides/SlideHero";
import { SlideProblem } from "./slides/SlideProblem";
import { SlideSolution } from "./slides/SlideSolution";
import { SlideCommercial } from "./slides/SlideCommercial";
import { SlideCompetitive } from "./slides/SlideCompetitive";
import { SlideTechValidation } from "./slides/SlideTechValidation";
import { SlideTraction } from "./slides/SlideTraction";
import { SlideOpportunity } from "./slides/SlideOpportunity";
import { SlideFinancials } from "./slides/SlideFinancials";
import { SlideGrowthChart } from "./slides/SlideGrowthChart";
import { SlideDeepTech } from "./slides/SlideDeepTech";
import { SlidePartners } from "./slides/SlidePartners";
import { SlideTeam } from "./slides/SlideTeam";
import { SlideAsk } from "./slides/SlideAsk";
import { SlideRisks } from "./slides/SlideRisks";
import { SlideContact } from "./slides/SlideContact";

const TOTAL = 16;

function SlideFooter({ n }: { n: number }) {
  return (
    <>
      <div className="pdf-footer">FACIO — CONFIDENTIAL</div>
      <div className="pdf-page-num">{n} / {TOTAL}</div>
    </>
  );
}

export function PdfDeck() {
  return (
    <>
      {/* Toolbar — hidden in print */}
      <div className="pdf-toolbar">
        <span className="toolbar-title">Facio Investor Deck — PDF Preview ({TOTAL} slides)</span>
        <button className="btn-back" onClick={() => window.history.back()}>
          ← Back to Deck
        </button>
        <button className="btn-print" onClick={() => window.print()}>
          🖨 Export to PDF
        </button>
      </div>

      <div className="pdf-deck" style={{ paddingTop: 80 }}>
        <SlideHero><SlideFooter n={1} /></SlideHero>
        <SlideProblem><SlideFooter n={2} /></SlideProblem>
        <SlideSolution><SlideFooter n={3} /></SlideSolution>
        <SlideCommercial><SlideFooter n={4} /></SlideCommercial>
        <SlideCompetitive><SlideFooter n={5} /></SlideCompetitive>
        <SlideTechValidation><SlideFooter n={6} /></SlideTechValidation>
        <SlideTraction><SlideFooter n={7} /></SlideTraction>
        <SlideOpportunity><SlideFooter n={8} /></SlideOpportunity>
        <SlideFinancials><SlideFooter n={9} /></SlideFinancials>
        <SlideGrowthChart><SlideFooter n={10} /></SlideGrowthChart>
        <SlideDeepTech><SlideFooter n={11} /></SlideDeepTech>
        <SlidePartners><SlideFooter n={12} /></SlidePartners>
        <SlideTeam><SlideFooter n={13} /></SlideTeam>
        <SlideAsk><SlideFooter n={14} /></SlideAsk>
        <SlideRisks><SlideFooter n={15} /></SlideRisks>
        <SlideContact><SlideFooter n={16} /></SlideContact>
      </div>
    </>
  );
}
