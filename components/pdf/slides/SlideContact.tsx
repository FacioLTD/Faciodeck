import React from "react";

export function SlideContact({ children }: { children?: React.ReactNode }) {
  return (
    <div className="pdf-slide slide-bg-finale">
      {/* Radial glow */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 500, height: 500, background: "radial-gradient(circle, rgba(59,130,246,.08) 0%, transparent 70%)", borderRadius: "50%" }} />

      <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <div style={{
          fontSize: 64, fontWeight: 800, letterSpacing: -2,
          background: "linear-gradient(135deg, #60a5fa, #a78bfa, #ec4899)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          marginBottom: 16,
        }}>
          FACIO
        </div>

        <p style={{ fontSize: 20, color: "#cbd5e1", fontStyle: "italic", marginBottom: 32 }}>
          &quot;Building the operating system for Specialty Insurance.&quot;
        </p>

        <div style={{ display: "inline-block", padding: "8px 24px", background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 99, marginBottom: 24 }}>
          <span className="c-slate">CEO: </span>
          <span style={{ fontWeight: 600 }}>Uriel Aharoni</span>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: 40, marginBottom: 32 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(59,130,246,.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>✉️</div>
            <div style={{ textAlign: "left" }}>
              <div className="pdf-xs c-slate">Email</div>
              <div style={{ fontSize: 14 }}>uriel@facio.io</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(168,85,247,.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🌐</div>
            <div style={{ textAlign: "left" }}>
              <div className="pdf-xs c-slate">Website</div>
              <div style={{ fontSize: 14 }}>facio.io</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{
          display: "inline-block", padding: "12px 36px", borderRadius: 10,
          background: "linear-gradient(135deg, #2563eb, #7c3aed)",
          fontSize: 15, fontWeight: 600, letterSpacing: 0.3,
          marginBottom: 24,
        }}>
          Let&apos;s Build the Future Together
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,.06)", paddingTop: 16, display: "flex", justifyContent: "center", gap: 16, fontSize: 10, color: "#64748b" }}>
          <span>$1M ARR → $2.4M ARR in 18 Months</span>
          <span>•</span>
          <span>Zero CapEx Model</span>
          <span>•</span>
          <span>Recurring Revenue</span>
          <span>•</span>
          <span>Production-Ready Infrastructure</span>
        </div>
      </div>
      {children}
    </div>
  );
}
