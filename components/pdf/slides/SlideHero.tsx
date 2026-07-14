import React from "react";

export function SlideHero({ children }: { children?: React.ReactNode }) {
  return (
    <div className="pdf-slide slide-bg-hero">
      {/* Subtle grid overlay */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.04,
        backgroundImage: "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
        backgroundSize: "64px 64px",
      }} />
      {/* Glow */}
      <div style={{
        position: "absolute", top: "15%", left: "50%", transform: "translateX(-50%)",
        width: 400, height: 400, background: "radial-gradient(circle, rgba(59,130,246,.12) 0%, transparent 70%)",
        borderRadius: "50%",
      }} />

      <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <div style={{
          fontSize: 72, fontWeight: 800, letterSpacing: -2,
          background: "linear-gradient(135deg, #60a5fa, #a78bfa, #60a5fa)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          marginBottom: 16,
        }}>
          FACIO
        </div>

        <h1 style={{ fontSize: 36, fontWeight: 600, color: "rgba(255,255,255,.9)", marginBottom: 24, lineHeight: 1.2 }}>
          The Operating System for<br />Specialty Insurance
        </h1>

        <div style={{ display: "flex", justifyContent: "center", gap: 12, marginBottom: 20 }}>
          <span className="pdf-badge" style={{ background: "rgba(34,197,94,.12)", border: "1px solid rgba(34,197,94,.3)", color: "#34d399" }}>
            Bootstrapped
          </span>
          <span className="pdf-badge" style={{ background: "rgba(59,130,246,.12)", border: "1px solid rgba(59,130,246,.3)", color: "#60a5fa" }}>
            Revenue Generating
          </span>
          <span className="pdf-badge" style={{ background: "rgba(168,85,247,.12)", border: "1px solid rgba(168,85,247,.3)", color: "#a78bfa", fontWeight: 700 }}>
            $1M Contracted ARR
          </span>
        </div>

        <p style={{ fontSize: 13, color: "#64748b", maxWidth: 500, margin: "0 auto" }}>
          We replace the "Excel Chaos" of Managing General Agents with an automated, compliance-first platform — purpose-built for the $100B+ MGA market.
        </p>
      </div>
      {children}
    </div>
  );
}
