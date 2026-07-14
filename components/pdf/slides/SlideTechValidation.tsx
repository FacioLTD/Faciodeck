import React from "react";

export function SlideTechValidation({ children }: { children?: React.ReactNode }) {
  const logos = ["Generali", "Mapfre", "Aflac", "Harel", "Howden"];
  
  return (
    <div className="pdf-slide slide-bg-accent">
      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(34,197,94,.08)", border: "1px solid rgba(34,197,94,.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, marginBottom: 16 }}>🛡️</div>
        
        <div className="pdf-section-title" style={{ textAlign: "center" }}>Tech Validation</div>
        <div className="pdf-section-sub c-blue" style={{ textAlign: "center" }}>Enterprise-Grade Architecture</div>
        <div className="pdf-divider" style={{ margin: "8px auto 20px" }} />

        <p style={{ fontSize: 13, color: "#94a3b8", textAlign: "center", maxWidth: 600, marginBottom: 28 }}>
          Before targeting the high-velocity MGA market, our core infrastructure was stress-tested and validated by the world&apos;s largest carriers.
        </p>

        {/* Logos */}
        <div style={{ marginBottom: 28 }}>
          <div className="pdf-label c-slate" style={{ textAlign: "center", marginBottom: 12 }}>Validated With</div>
          <div style={{ display: "flex", justifyContent: "center", gap: 28 }}>
            {logos.map((name) => (
              <div key={name} style={{ padding: "8px 20px", background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.06)", borderRadius: 8, fontSize: 14, fontWeight: 600, color: "#94a3b8" }}>
                {name}
              </div>
            ))}
          </div>
        </div>

        {/* Pivot callout */}
        <div className="pdf-card" style={{ maxWidth: 560, borderColor: "rgba(255,255,255,.08)" }}>
          <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
            <span className="c-green" style={{ fontSize: 18, flexShrink: 0 }}>✓</span>
            <div>
              <div style={{ fontWeight: 600, marginBottom: 4 }}>Why we pivoted:</div>
              <p style={{ fontSize: 12, color: "#94a3b8", fontStyle: "italic", marginBottom: 6 }}>
                &quot;We proved the infrastructure at enterprise scale — then aimed it at the high-velocity MGA segment.&quot;
              </p>
              <p className="c-blue" style={{ fontSize: 11, fontWeight: 600, lineHeight: 1.7 }}>
                API-first. REST + Webhooks. · 100% internally developed.<br />
                Proprietary rating and reconciliation engine. · No white-labeled carrier systems.
              </p>
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
