import React from "react";

export function SlideProblem({ children }: { children?: React.ReactNode }) {
  return (
    <div className="pdf-slide slide-bg-dark">
      <div style={{ position: "relative", zIndex: 1 }}>
        <div className="pdf-section-title">The Problem</div>
        <div className="pdf-section-sub c-red">The "MGA Bottleneck"</div>
        <div className="pdf-divider" />

        <p style={{ fontSize: 14, color: "#cbd5e1", marginBottom: 24, maxWidth: 700 }}>
          MGAs have the operational complexity of a Carrier, but the budget of a startup.
        </p>

        <div className="pdf-grid-2">
          <div className="pdf-card" style={{ borderColor: "rgba(248,113,113,.2)", background: "linear-gradient(135deg, rgba(127,29,29,.15), rgba(154,52,18,.1))" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(248,113,113,.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>💰</div>
              <span style={{ fontSize: 16, fontWeight: 600 }}>Legacy Tech is Prohibitive</span>
            </div>
            <p style={{ fontSize: 12, color: "#cbd5e1", lineHeight: 1.6 }}>
              Competitors repurpose heavy Carrier systems that demand <span className="c-red" style={{ fontWeight: 600 }}>$600k+ implementation</span> and <span className="c-red" style={{ fontWeight: 600 }}>$600k+ annual licensing</span>.
            </p>
          </div>

          <div className="pdf-card" style={{ borderColor: "rgba(251,146,60,.2)", background: "linear-gradient(135deg, rgba(154,52,18,.12), rgba(133,77,14,.1))" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(251,146,60,.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>🔧</div>
              <span style={{ fontSize: 16, fontWeight: 600 }}>Complexity is Manual</span>
            </div>
            <p style={{ fontSize: 12, color: "#cbd5e1", lineHeight: 1.6 }}>
              No existing tool <span className="c-orange" style={{ fontWeight: 600 }}>automatically handles</span> complex premium splits, commissions, and Lloyd&apos;s-standard bordereaux reconciliation.
            </p>
            <p style={{ fontSize: 10, color: "#64748b", marginTop: 8 }}>
              Hours of manual work each month. Audit stress. Revenue leakage.
            </p>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
