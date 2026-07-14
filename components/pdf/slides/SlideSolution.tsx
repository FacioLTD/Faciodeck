import React from "react";

export function SlideSolution({ children }: { children?: React.ReactNode }) {
  return (
    <div className="pdf-slide slide-bg-accent">
      <div style={{ position: "relative", zIndex: 1 }}>
        <div className="pdf-section-title">The Solution</div>
        <div className="pdf-section-sub c-green">The Revenue Engine</div>
        <div className="pdf-divider" />

        <p style={{ fontSize: 13, color: "#94a3b8", marginBottom: 20 }}>
          A complete "Business Logic as Code" platform purpose-built for MGAs.
        </p>

        <div className="pdf-grid-3" style={{ marginBottom: 20 }}>
          <div className="pdf-card bg-green" style={{ borderRadius: 10 }}>
            <div style={{ fontSize: 20, marginBottom: 8 }}>⚡</div>
            <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 6 }}>Automated</div>
            <p style={{ fontSize: 11, color: "#94a3b8", lineHeight: 1.5 }}>
              Quote → Bind → Bordereaux → Reconciliation → Audit-ready. <span className="c-green" style={{ fontWeight: 600 }}>Humans handle only exceptions.</span>
            </p>
          </div>
          <div className="pdf-card bg-blue" style={{ borderRadius: 10 }}>
            <div style={{ fontSize: 20, marginBottom: 8 }}>💻</div>
            <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 6 }}>Accessible</div>
            <p style={{ fontSize: 11, color: "#94a3b8", lineHeight: 1.5 }}>
              Transparent 3-part pricing. <span className="c-blue" style={{ fontWeight: 600 }}>Most customers land in the ~$4k–$7k/month range.</span>
            </p>
          </div>
          <div className="pdf-card bg-purple" style={{ borderRadius: 10 }}>
            <div style={{ fontSize: 20, marginBottom: 8 }}>🚀</div>
            <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 6 }}>Fast</div>
            <p style={{ fontSize: 11, color: "#94a3b8", lineHeight: 1.5 }}>
              "MGA Launch Kit" enables <span className="c-purple" style={{ fontWeight: 600 }}>Go-Live in under 60 days</span>
            </p>
          </div>
        </div>

        {/* Workflow strip */}
        <div className="pdf-card" style={{ textAlign: "center", borderColor: "rgba(34,197,94,.2)", background: "rgba(34,197,94,.04)" }}>
          <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 6 }}>Complete Workflow Automation</div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 10, fontSize: 13 }}>
            <span className="c-slate">Quote</span>
            <span className="c-green">→</span>
            <span className="c-slate">Bind</span>
            <span className="c-green">→</span>
            <span className="c-slate">Bordereaux</span>
            <span className="c-green">→</span>
            <span className="c-slate">Reconciliation</span>
            <span className="c-green">→</span>
            <span className="c-green" style={{ fontWeight: 600 }}>Audit Ready</span>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
