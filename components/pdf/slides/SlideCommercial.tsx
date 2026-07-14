import React from "react";

export function SlideCommercial({ children }: { children?: React.ReactNode }) {
  return (
    <div className="pdf-slide slide-bg-dark">
      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
          <div>
            <div className="pdf-section-title">Commercial Model</div>
            <div className="pdf-section-sub c-green">Zero CapEx — Disruptive Pricing</div>
          </div>
          <span className="pdf-badge" style={{ background: "rgba(34,197,94,.12)", border: "1px solid rgba(34,197,94,.25)", color: "#34d399" }}>
            ZERO CAPEX
          </span>
        </div>
        <div className="pdf-divider" />

        <p style={{ fontSize: 12, color: "#94a3b8", marginBottom: 20, maxWidth: 650 }}>
          We waive the industry-standard $50k+ setup fee in exchange for a structured monthly success retainer. <span style={{ color: "#fff", fontWeight: 600 }}>Zero CapEx for the client. Higher lifetime value for us.</span>
        </p>

        <div className="pdf-grid-3" style={{ marginBottom: 20 }}>
          <div className="pdf-card" style={{ textAlign: "center" }}>
            <div className="pdf-label c-slate" style={{ marginBottom: 6 }}>1. Platform License</div>
            <div style={{ fontSize: 28, fontWeight: 700, color: "#fff" }}>$65</div>
            <div className="pdf-xs c-slate">/ user / mo</div>
            <div style={{ borderTop: "1px solid rgba(255,255,255,.06)", marginTop: 12, paddingTop: 8 }}>
              <span className="c-blue" style={{ fontSize: 11, fontWeight: 500 }}>Core SaaS Subscription</span>
            </div>
          </div>
          <div className="pdf-card" style={{ textAlign: "center" }}>
            <div className="pdf-label c-slate" style={{ marginBottom: 6 }}>2. Cloud Infrastructure</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: "#fff", marginTop: 4 }}>Usage Based</div>
            <div className="pdf-xs c-slate" style={{ opacity: 0 }}>spacer</div>
            <div style={{ borderTop: "1px solid rgba(255,255,255,.06)", marginTop: 12, paddingTop: 8 }}>
              <span className="c-purple" style={{ fontSize: 11, fontWeight: 500 }}>Usage-based pass-through</span>
            </div>
          </div>
          <div className="pdf-card" style={{ textAlign: "center", borderColor: "rgba(34,197,94,.25)", background: "linear-gradient(180deg, rgba(34,197,94,.06), rgba(15,23,42,.3))", position: "relative" }}>
            <div style={{ position: "absolute", top: -10, left: "50%", transform: "translateX(-50%)", background: "#22c55e", color: "#0a0a1a", fontSize: 8, fontWeight: 700, padding: "2px 8px", borderRadius: 99 }}>VALUE DRIVER</div>
            <div className="pdf-label c-green" style={{ marginBottom: 6 }}>3. Managed Success</div>
            <div style={{ fontSize: 28, fontWeight: 700, color: "#fff" }}>$2,000+</div>
            <div className="pdf-xs c-slate">/ mo</div>
            <div style={{ borderTop: "1px solid rgba(34,197,94,.15)", marginTop: 12, paddingTop: 8 }}>
              <span className="c-green" style={{ fontSize: 11, fontWeight: 500 }}>Amortized Implementation</span>
            </div>
          </div>
        </div>

        {/* Deal Economics */}
        <div className="pdf-card" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24 }}>
          <div style={{ flex: 1, borderRight: "1px solid rgba(255,255,255,.06)", paddingRight: 20 }}>
            <div className="pdf-label c-slate" style={{ marginBottom: 8 }}>Deal Profile (15 Users)</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 3, fontSize: 11 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}><span className="c-slate">SaaS License:</span><span style={{ fontFamily: "monospace" }}>$975 /mo</span></div>
              <div style={{ display: "flex", justifyContent: "space-between" }}><span className="c-slate">Cloud Tier 2:</span><span style={{ fontFamily: "monospace" }}>~$2,000 /mo</span></div>
              <div style={{ display: "flex", justifyContent: "space-between" }}><span className="c-slate">Success Retainer:</span><span style={{ fontFamily: "monospace" }}>$2,025 /mo</span></div>
            </div>
          </div>
          <div style={{ textAlign: "center", flex: 1 }}>
            <div className="pdf-label c-slate" style={{ marginBottom: 4 }}>Target MRR</div>
            <div style={{ fontSize: 28, fontWeight: 700 }}>~$5,000 <span style={{ fontSize: 13, fontWeight: 400, color: "#64748b" }}>/mo</span></div>
            <div className="pdf-xs c-slate">Annual Contract Value: $60,000</div>
          </div>
          <div style={{ fontSize: 10, background: "rgba(255,255,255,.03)", padding: 10, borderRadius: 6, border: "1px solid rgba(255,255,255,.06)", minWidth: 140 }}>
            <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,.06)", paddingBottom: 4, marginBottom: 4 }}>
              <span className="c-slate">Competitors</span>
              <span className="c-red" style={{ fontFamily: "monospace" }}>$50k Upfront</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontWeight: 600 }}>Facio</span>
              <span className="c-green" style={{ fontFamily: "monospace" }}>$0 Upfront</span>
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
