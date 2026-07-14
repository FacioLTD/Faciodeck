import React from "react";

export function SlideFinancials({ children }: { children?: React.ReactNode }) {
  return (
    <div className="pdf-slide slide-bg-dark">
      <div style={{ position: "relative", zIndex: 1 }}>
        <div className="pdf-section-title">Financial Forecast</div>
        <div className="pdf-section-sub c-slate">18-Month Trajectory — Founder-Led → Scalable Revenue Machine</div>
        <div className="pdf-divider" />

        {/* Financial Snapshot */}
        <div className="pdf-card" style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 12, textAlign: "center" }}>Financial Snapshot</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 8, textAlign: "center" }}>
            {[
              { label: "MRR", value: "~$83k", sub: "contracted" },
              { label: "ARR", value: "$1M", sub: "" },
              { label: "Revenue", value: "100%", sub: "recurring subscription" },
              { label: "Gross Margin", value: "88%", sub: "" },
              { label: "Monthly Burn", value: "$25k", sub: "" },
              { label: "Runway", value: "18 months", sub: "" },
            ].map((m, i) => (
              <div key={i}>
                <div className="pdf-xs c-slate" style={{ marginBottom: 3 }}>{m.label}</div>
                <div style={{ fontSize: 16, fontWeight: 700 }}>{m.value}</div>
                {m.sub && <div className="pdf-xs c-slate">{m.sub}</div>}
              </div>
            ))}
          </div>
        </div>

        {/* Growth table */}
        <div className="pdf-card" style={{ marginBottom: 16 }}>
          <table className="pdf-table">
            <thead>
              <tr>
                <th>Metric</th>
                <th style={{ textAlign: "center", color: "#60a5fa" }}>Current (Month 0)</th>
                <th style={{ textAlign: "center", color: "#a78bfa" }}>Scale (Month 12)</th>
                <th style={{ textAlign: "center", color: "#34d399" }}>Series A Ready (Month 18)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ fontWeight: 600 }}>Customers</td>
                <td style={{ textAlign: "center" }}>12 (6 Live / 6 Signed)</td>
                <td style={{ textAlign: "center" }}>25 Active</td>
                <td style={{ textAlign: "center", fontWeight: 600 }}>40+ Active</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600 }}>MRR</td>
                <td style={{ textAlign: "center" }}>~$83k (contracted)</td>
                <td style={{ textAlign: "center" }}>$125k</td>
                <td style={{ textAlign: "center", fontWeight: 600 }}>$200k</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 600 }}>ARR</td>
                <td style={{ textAlign: "center" }}>$1M (Contracted)</td>
                <td style={{ textAlign: "center" }}>$1.5M</td>
                <td style={{ textAlign: "center", fontWeight: 600 }}>$2.4M</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Key highlights */}
        <div className="pdf-grid-3">
          <div className="pdf-card bg-blue" style={{ textAlign: "center" }}>
            <div style={{ fontSize: 24, fontWeight: 700 }}>3.3x</div>
            <div className="pdf-xs c-slate">Customer Growth</div>
            <div className="pdf-xs c-blue">12 → 40+ customers</div>
          </div>
          <div className="pdf-card bg-purple" style={{ textAlign: "center" }}>
            <div style={{ fontSize: 24, fontWeight: 700 }}>2.4x</div>
            <div className="pdf-xs c-slate">ARR Growth</div>
            <div className="pdf-xs c-purple">$1M → $2.4M</div>
          </div>
          <div className="pdf-card bg-green" style={{ textAlign: "center" }}>
            <div style={{ fontSize: 24, fontWeight: 700 }}>Ready</div>
            <div className="pdf-xs c-slate">Series A Metrics</div>
            <div className="pdf-xs c-green">18 months</div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
