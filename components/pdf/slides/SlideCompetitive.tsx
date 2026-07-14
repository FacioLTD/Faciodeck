import React from "react";

export function SlideCompetitive({ children }: { children?: React.ReactNode }) {
  const rows = [
    { feature: "Capital Expenditure", facio: "Zero CapEx. Implementation waived via monthly retainer.", competitor: "High upfront. Setup fees often $50k–$250k+.", highlight: true },
    { feature: "Time to Revenue", facio: "Days/Weeks. Pre-configured 'Launch Kits'.", competitor: "6–18 Months. Long discovery and customization.", highlight: true },
    { feature: "Product Builder", facio: "No-Code. Underwriters configure independently.", competitor: "Low-Code/Config. Requires IT/Vendor involvement.", highlight: false },
    { feature: "Rating Engine", facio: "Real-time. Complex matrices, multi-currency.", competitor: "Often requires external plugins or hard-coding.", highlight: false },
    { feature: "Lloyd's / DA Compliance", facio: "Native. Automated Bordereaux (v5.2), PBQA audits.", competitor: "Configurable. Requires custom build for Lloyd's.", highlight: false },
    { feature: "Portal & AI Support", facio: "Unified. Broker portal + AI support included.", competitor: "Add-on. Portals often separate modules.", highlight: false },
  ];

  return (
    <div className="pdf-slide slide-bg-dark" style={{ padding: "40px 48px" }}>
      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 16 }}>
          <div>
            <div className="pdf-section-title" style={{ fontSize: 28 }}>Competitive Landscape</div>
            <div className="pdf-section-sub c-blue" style={{ fontSize: 14, marginBottom: 0 }}>Why Facio wins against traditional PAS providers</div>
          </div>
        </div>
        <div className="pdf-divider" style={{ marginBottom: 16 }} />

        <table className="pdf-table">
          <thead>
            <tr>
              <th style={{ width: "16%" }}>Feature</th>
              <th style={{ width: "42%", color: "#60a5fa", background: "rgba(59,130,246,.06)" }}>✓ Facio MGA OS</th>
              <th style={{ width: "42%" }}>Traditional PAS</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} style={row.highlight ? { background: "rgba(59,130,246,.03)" } : {}}>
                <td style={{ fontWeight: 600, color: "#e2e8f0", fontSize: 10 }}>
                  {row.feature}
                  {row.highlight && <div style={{ fontSize: 8, color: "#60a5fa", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", marginTop: 2 }}>Key Differentiator</div>}
                </td>
                <td style={{ background: "rgba(59,130,246,.03)", borderLeft: "1px solid rgba(59,130,246,.1)", borderRight: "1px solid rgba(59,130,246,.1)" }}>
                  <span style={{ color: "#34d399", marginRight: 6 }}>✓</span>
                  <span style={{ color: "#f1f5f9", fontWeight: 500 }}>{row.facio}</span>
                </td>
                <td style={{ color: "#94a3b8" }}>
                  <span style={{ marginRight: 6 }}>⚠️</span>
                  {row.competitor}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Summary strip */}
        <div className="pdf-card" style={{ marginTop: 14, display: "flex", gap: 20, justifyContent: "center", textAlign: "center", borderColor: "rgba(59,130,246,.15)", background: "rgba(59,130,246,.04)" }}>
          <div style={{ fontSize: 11 }}><span className="c-green" style={{ fontWeight: 600 }}>Zero CapEx</span> <span className="c-slate">vs. $50k–$250k upfront</span></div>
          <div style={{ color: "rgba(255,255,255,.1)" }}>|</div>
          <div style={{ fontSize: 11 }}><span className="c-green" style={{ fontWeight: 600 }}>Native Lloyd's v5.2</span> <span className="c-slate">reporting</span></div>
          <div style={{ color: "rgba(255,255,255,.1)" }}>|</div>
          <div style={{ fontSize: 11 }}><span className="c-green" style={{ fontWeight: 600 }}>Launch in days</span> <span className="c-slate">not months</span></div>
        </div>
      </div>
      {children}
    </div>
  );
}
