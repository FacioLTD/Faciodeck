import React from "react";

export function SlideGrowthChart({ children }: { children?: React.ReactNode }) {
  const bars = [
    { label: "Current", value: 1000, max: 2400, color: "#3b82f6", customers: "12" },
    { label: "Month 12", value: 1500, max: 2400, color: "#a855f7", customers: "25" },
    { label: "Month 18", value: 2400, max: 2400, color: "#10b981", customers: "40+" },
  ];

  return (
    <div className="pdf-slide slide-bg-accent">
      <div style={{ position: "relative", zIndex: 1 }}>
        <div className="pdf-section-title">ARR Growth Trajectory</div>
        <div className="pdf-section-sub c-blue">$1M → $2.4M in 18 Months</div>
        <div className="pdf-divider" />

        {/* Static bar chart */}
        <div className="pdf-card" style={{ padding: 32, marginBottom: 20 }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", gap: 48, height: 240 }}>
            {bars.map((bar, i) => {
              const pct = (bar.value / bar.max) * 100;
              return (
                <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                  <div style={{ fontSize: 18, fontWeight: 700, color: bar.color }}>${bar.value >= 1000 ? `${(bar.value / 1000).toFixed(1)}M` : `${bar.value}k`}</div>
                  <div style={{
                    width: 80, height: `${pct * 1.8}px`,
                    background: `linear-gradient(180deg, ${bar.color}, ${bar.color}88)`,
                    borderRadius: "8px 8px 4px 4px",
                    boxShadow: `0 0 20px ${bar.color}33`,
                  }} />
                  <div style={{ fontSize: 12, color: "#94a3b8", fontWeight: 500 }}>{bar.label}</div>
                  <div style={{ fontSize: 10, color: bar.color }}>{bar.customers} customers</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Growth callouts */}
        <div className="pdf-grid-3">
          <div className="pdf-card" style={{ textAlign: "center", borderColor: "rgba(59,130,246,.2)" }}>
            <div className="pdf-label c-blue" style={{ marginBottom: 4 }}>Phase 1 — Now</div>
            <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 4 }}>Founder-Led Sales</div>
            <p className="pdf-xs c-slate">Proving unit economics and product-market fit with 12 signed logos.</p>
          </div>
          <div className="pdf-card" style={{ textAlign: "center", borderColor: "rgba(168,85,247,.2)" }}>
            <div className="pdf-label c-purple" style={{ marginBottom: 4 }}>Phase 2 — Month 12</div>
            <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 4 }}>Scalable GTM</div>
            <p className="pdf-xs c-slate">First Sales/Marketing hire. Repeatable onboarding. 25 active customers.</p>
          </div>
          <div className="pdf-card" style={{ textAlign: "center", borderColor: "rgba(16,185,129,.2)" }}>
            <div className="pdf-label c-green" style={{ marginBottom: 4 }}>Phase 3 — Month 18</div>
            <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 4 }}>Series A Ready</div>
            <p className="pdf-xs c-slate">40+ customers. $2.4M ARR. Clear path to $5M+ ARR.</p>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
