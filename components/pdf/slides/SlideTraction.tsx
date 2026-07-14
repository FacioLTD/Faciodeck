import React from "react";

export function SlideTraction({ children }: { children?: React.ReactNode }) {
  return (
    <div className="pdf-slide slide-bg-dark">
      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <span className="pdf-badge" style={{ background: "rgba(34,197,94,.12)", border: "1px solid rgba(34,197,94,.25)", color: "#34d399", marginBottom: 8, display: "inline-block" }}>TRACTION FIRST</span>
          <div className="pdf-section-title" style={{ textAlign: "center" }}>By The Numbers</div>
          <div className="pdf-section-sub c-slate" style={{ textAlign: "center", marginBottom: 0 }}>100% Founder-Led Sales</div>
        </div>

        {/* 4 Metric cards */}
        <div className="pdf-grid-4" style={{ marginBottom: 20 }}>
          {[
            { value: "12", label: "Customers", sub: "6 Live + 6 Signed", color: "#60a5fa", bg: "rgba(59,130,246,.08)", border: "rgba(59,130,246,.3)" },
            { value: "$1M", label: "ARR", sub: "~$83k MRR Contracted", color: "#34d399", bg: "rgba(34,197,94,.08)", border: "rgba(34,197,94,.3)" },
            { value: "<4", label: "Month Payback", sub: "100% Subscription Revenue", color: "#a78bfa", bg: "rgba(168,85,247,.08)", border: "rgba(168,85,247,.3)" },
            { value: "$180k", label: "LTV", sub: "Per Logo (36mo)", color: "#fbbf24", bg: "rgba(251,191,36,.08)", border: "rgba(251,191,36,.3)" },
          ].map((m, i) => (
            <div key={i} className="pdf-card" style={{ textAlign: "center", borderColor: m.border, background: m.bg }}>
              <div style={{ fontSize: 32, fontWeight: 700, color: "#fff", marginBottom: 4 }}>{m.value}</div>
              <div style={{ fontSize: 11, color: "#94a3b8", marginBottom: 2 }}>{m.label}</div>
              <div style={{ fontSize: 9, color: m.color }}>{m.sub}</div>
            </div>
          ))}
        </div>

        {/* Proof + Production */}
        <div className="pdf-grid-2">
          <div className="pdf-card">
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 10, textAlign: "center" }}>Proven Track Record</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, textAlign: "center" }}>
              <div><div className="c-green" style={{ fontSize: 16, fontWeight: 600 }}>6 Live</div><div className="pdf-xs c-slate">In Production</div></div>
              <div><div className="c-blue" style={{ fontSize: 16, fontWeight: 600 }}>6 Signed</div><div className="pdf-xs c-slate">Onboarding</div></div>
              <div><div className="c-purple" style={{ fontSize: 16, fontWeight: 600 }}>100%</div><div className="pdf-xs c-slate">Subscription SaaS</div></div>
              <div><div className="c-yellow" style={{ fontSize: 16, fontWeight: 600 }}>Zero</div><div className="pdf-xs c-slate">Institutional Capital Raised</div></div>
            </div>
          </div>

          <div className="pdf-card">
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 10, textAlign: "center" }}>Production Status</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {["Processing real premiums", "Generating Lloyd's-compliant bordereaux", "Passing audits", "Operating in production environments"].map((t, i) => (
                <div key={i} className="pdf-check">{t}</div>
              ))}
            </div>
            <p style={{ fontSize: 11, color: "#60a5fa", fontStyle: "italic", textAlign: "center", marginTop: 10 }}>
              &quot;This is not a pilot. This is revenue-generating infrastructure.&quot;
            </p>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
