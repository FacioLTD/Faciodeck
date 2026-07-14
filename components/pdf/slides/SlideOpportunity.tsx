import React from "react";

export function SlideOpportunity({ children }: { children?: React.ReactNode }) {
  return (
    <div className="pdf-slide slide-bg-accent">
      <div style={{ position: "relative", zIndex: 1 }}>
        <div className="pdf-section-title">The Opportunity</div>
        <div className="pdf-section-sub c-blue">Powering the $100B+ MGA Market</div>
        <div className="pdf-divider" />

        <div className="pdf-grid-2" style={{ marginBottom: 16 }}>
          {/* Left: Key pitch + Market position */}
          <div>
            <div className="pdf-card bg-blue" style={{ marginBottom: 12 }}>
              <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 6 }}>🎯 The Only Mid-Market Solution</div>
              <p style={{ fontSize: 11, color: "#cbd5e1", lineHeight: 1.6 }}>
                Combining <span className="c-blue" style={{ fontWeight: 600 }}>Policy management</span>, <span className="c-purple" style={{ fontWeight: 600 }}>Financial reconciliation</span>, and <span className="c-green" style={{ fontWeight: 600 }}>Automated bordereaux</span> at accessible pricing.
              </p>
            </div>

            <div className="pdf-grid-2">
              <div className="pdf-card" style={{ textAlign: "center" }}>
                <div style={{ fontSize: 24, fontWeight: 700, color: "#60a5fa" }}>$100B+</div>
                <div className="pdf-xs c-slate" style={{ marginTop: 2 }}>Market Size — Urgent Operational Pain</div>
              </div>
              <div className="pdf-card" style={{ textAlign: "center" }}>
                <div style={{ fontSize: 24, fontWeight: 700, color: "#a78bfa" }}>4,000</div>
                <div className="pdf-xs c-slate" style={{ marginTop: 2 }}>Total Addressable Logos</div>
              </div>
            </div>
          </div>

          {/* Right: TAM + Tailwinds */}
          <div>
            <div className="pdf-card" style={{ marginBottom: 12 }}>
              <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 8 }}>Target Profile</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                {[
                  "MGAs + Lloyd's Coverholders (total 7,000)",
                  "5–150 employees",
                  "Writing €5M–€100M GWP",
                ].map((t, i) => (
                  <div key={i} className="pdf-check">{t}</div>
                ))}
              </div>
            </div>

            <div className="pdf-card">
              <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 8 }}>Macro Tailwinds</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                {[
                  "MGA market growing faster than traditional carriers",
                  "Lloyd's modernization mandates",
                  "Increasing regulatory scrutiny on reporting",
                  "AI-driven underwriting adoption",
                ].map((t, i) => (
                  <div key={i} className="pdf-check">{t}</div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center", fontSize: 13, color: "#a78bfa", fontWeight: 500 }}>
          Regulation and complexity are increasing. Spreadsheets cannot scale.
        </div>
      </div>
      {children}
    </div>
  );
}
