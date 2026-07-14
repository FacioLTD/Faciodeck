import React from "react";

export function SlideDeepTech({ children }: { children?: React.ReactNode }) {
  return (
    <div className="pdf-slide slide-bg-dark">
      <div style={{ position: "relative", zIndex: 1 }}>
        <div className="pdf-section-title">The Upside</div>
        <div className="pdf-section-sub c-cyan">Deep Tech Moat</div>
        <div className="pdf-divider" />

        <p style={{ fontSize: 13, color: "#94a3b8", marginBottom: 24, maxWidth: 600 }}>
          While our core business is Insurance SaaS, our infrastructure has massive expansion potential.
        </p>

        <div className="pdf-grid-2" style={{ marginBottom: 20 }}>
          {/* GovTech */}
          <div className="pdf-card" style={{ borderColor: "rgba(168,85,247,.2)", background: "linear-gradient(135deg, rgba(88,28,135,.12), rgba(157,23,77,.08))" }}>
            <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(168,85,247,.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>🏛️</div>
              <div>
                <div style={{ fontSize: 18, fontWeight: 600 }}>GovTech</div>
                <span className="pdf-badge" style={{ background: "rgba(168,85,247,.15)", border: "1px solid rgba(168,85,247,.25)", color: "#a78bfa", fontSize: 9 }}>In Advanced Talks</span>
              </div>
            </div>
            <p style={{ fontSize: 12, color: "#cbd5e1", marginBottom: 10 }}>
              Government AI portals for regulated workflows
            </p>
            <div style={{ display: "flex", gap: 6 }}>
              <span className="pdf-badge" style={{ background: "rgba(168,85,247,.08)", color: "#c4b5fd", border: "1px solid rgba(168,85,247,.15)", fontSize: 9 }}>Israel</span>
              <span className="pdf-badge" style={{ background: "rgba(168,85,247,.08)", color: "#c4b5fd", border: "1px solid rgba(168,85,247,.15)", fontSize: 9 }}>Papua New Guinea</span>
            </div>
          </div>

          {/* Quantum DB */}
          <div className="pdf-card" style={{ borderColor: "rgba(34,211,238,.2)", background: "linear-gradient(135deg, rgba(22,78,99,.15), rgba(30,58,138,.1))" }}>
            <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, background: "rgba(34,211,238,.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>⚛️</div>
              <div>
                <div style={{ fontSize: 18, fontWeight: 600 }}>Quantum DB</div>
                <span className="pdf-badge" style={{ background: "rgba(34,211,238,.15)", border: "1px solid rgba(34,211,238,.25)", color: "#22d3ee", fontSize: 9 }}>Future / Optional</span>
              </div>
            </div>
            <p style={{ fontSize: 12, color: "#cbd5e1", marginBottom: 10 }}>
              Proprietary database architecture for high-frequency fintech
            </p>
            <div style={{ display: "flex", gap: 6 }}>
              <span className="pdf-badge" style={{ background: "rgba(34,211,238,.08)", color: "#67e8f9", border: "1px solid rgba(34,211,238,.15)", fontSize: 9 }}>Next-Gen Infrastructure</span>
              <span className="pdf-badge" style={{ background: "rgba(34,211,238,.08)", color: "#67e8f9", border: "1px solid rgba(34,211,238,.15)", fontSize: 9 }}>High-Frequency Trading</span>
            </div>
          </div>
        </div>

        <div className="pdf-card" style={{ textAlign: "center", borderColor: "rgba(34,211,238,.15)", background: "rgba(34,211,238,.03)" }}>
          <p style={{ fontSize: 13, color: "#cbd5e1" }}>
            <span className="c-cyan" style={{ fontWeight: 600 }}>Insurance SaaS</span> is the business. <span className="c-purple" style={{ fontWeight: 600 }}>Our infrastructure</span> is a long-term moat and optional expansion.
          </p>
        </div>
      </div>
      {children}
    </div>
  );
}
