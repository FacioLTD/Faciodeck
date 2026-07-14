import React from "react";

export function SlideAsk({ children }: { children?: React.ReactNode }) {
  return (
    <div className="pdf-slide slide-bg-accent">
      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <div className="pdf-section-title" style={{ textAlign: "center" }}>The Ask</div>
          <div style={{ fontSize: 32, fontWeight: 700, background: "linear-gradient(135deg, #60a5fa, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: 8 }}>
            $1.5M Precision Round
          </div>
          <span className="pdf-badge" style={{ background: "rgba(168,85,247,.12)", border: "1px solid rgba(168,85,247,.25)", color: "#a78bfa" }}>
            Terms: $10M Cap (SAFE)
          </span>
        </div>

        <p style={{ fontSize: 12, color: "#94a3b8", textAlign: "center", maxWidth: 600, margin: "0 auto 20px" }}>
          <span style={{ color: "#fff", fontWeight: 600 }}>The Goal:</span> Convert founder-led traction into a repeatable sales engine with a lead investor who adds distribution and operating leverage.
        </p>

        {/* Use of Funds */}
        <div className="pdf-grid-3" style={{ marginBottom: 16 }}>
          {[
            { label: "Product & Engineering", pct: "40%", amount: "$600k", desc: "Self-Serve Launch Kit", color: "#3b82f6" },
            { label: "Go-to-Market", pct: "30%", amount: "$450k", desc: "First Sales/Marketing hire", color: "#a855f7" },
            { label: "Operations", pct: "30%", amount: "$450k", desc: "Customer Success team", color: "#10b981" },
          ].map((f, i) => (
            <div key={i} className="pdf-card" style={{ textAlign: "center" }}>
              <div className="pdf-label" style={{ color: f.color, marginBottom: 4 }}>{f.label}</div>
              <div style={{ fontSize: 24, fontWeight: 700, marginBottom: 2 }}>{f.pct}</div>
              <div className="pdf-xs" style={{ color: f.color, marginBottom: 6 }}>{f.amount}</div>
              <p className="pdf-xs c-slate">{f.desc}</p>
              <div className="pdf-progress" style={{ marginTop: 8 }}>
                <div className="pdf-progress-fill" style={{ width: f.pct, background: f.color }} />
              </div>
            </div>
          ))}
        </div>

        {/* Outcome */}
        <div className="pdf-card" style={{ textAlign: "center", borderColor: "rgba(168,85,247,.2)", background: "linear-gradient(135deg, rgba(30,58,138,.1), rgba(88,28,135,.1), rgba(131,24,67,.06))" }}>
          <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 6 }}>The Outcome</div>
          <p style={{ fontSize: 13, color: "#e2e8f0", marginBottom: 8 }}>
            This capital funds the path from <span className="c-blue" style={{ fontWeight: 600 }}>12 to 40+ customers</span> and <span className="c-green" style={{ fontWeight: 600 }}>$1M to $2.4M ARR</span>
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 10, fontSize: 10 }}>
            <span style={{ background: "rgba(255,255,255,.06)", padding: "3px 10px", borderRadius: 99 }}>✓ Scalable Sales Machine</span>
            <span style={{ background: "rgba(255,255,255,.06)", padding: "3px 10px", borderRadius: 99 }}>✓ Self-Serve Onboarding</span>
            <span style={{ background: "rgba(255,255,255,.06)", padding: "3px 10px", borderRadius: 99 }}>✓ Series A Ready</span>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
