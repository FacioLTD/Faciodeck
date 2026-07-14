import React from "react";

export function SlideRisks({ children }: { children?: React.ReactNode }) {
  return (
    <div className="pdf-slide slide-bg-dark">
      <div style={{ position: "relative", zIndex: 1 }}>
        <div className="pdf-section-title">Strategic Partnership</div>
        <div className="pdf-section-sub c-blue">Risks, Mitigation & What We Seek</div>
        <div className="pdf-divider" />

        {/* Risks */}
        <div className="pdf-grid-3" style={{ marginBottom: 20 }}>
          {[
            { risk: "Long Enterprise Sales Cycles", mitigation: "Standardized Launch Kits + Clear Pricing" },
            { risk: "Integration Complexity", mitigation: "API-first architecture + Pre-built connectors" },
            { risk: "Customer Concentration", mitigation: "40-customer diversification strategy" },
          ].map((r, i) => (
            <div key={i} className="pdf-card">
              <div className="c-red" style={{ fontSize: 11, fontWeight: 600, marginBottom: 6 }}>Risk: {r.risk}</div>
              <p style={{ fontSize: 11, color: "#cbd5e1" }}>
                <span className="c-green" style={{ fontWeight: 600 }}>Mitigation: </span>{r.mitigation}
              </p>
            </div>
          ))}
        </div>

        {/* What we want from partner */}
        <div className="pdf-grid-2">
          <div className="pdf-card bg-blue">
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 10 }}>What We Want From Our Partner</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { num: "1", title: "US Distribution Breakthrough", desc: "10–15 targeted MGA / carrier intros → 2–3 pilots or signed LOIs." },
                { num: "2", title: "Fundraising Readiness → Close", desc: "Refine positioning, metrics, and narrative for next round." },
                { num: "3", title: "Founder-Led → Scalable GTM", desc: "Clear, repeatable US sales playbook and execution roadmap." },
              ].map((w, i) => (
                <div key={i} style={{ fontSize: 11 }}>
                  <span style={{ fontWeight: 600 }}>{w.num}. {w.title}</span>
                  <p className="pdf-xs c-slate" style={{ marginTop: 2 }}>{w.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="pdf-card bg-purple">
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 10 }}>What Makes This a Home Run</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {[
                "Trusted VC on our cap table (long-term partner, follow-on support)",
                "Strategic Advisor Chair aligned to distribution + GTM",
                "High-signal corporate partner access that converts to revenue",
              ].map((p, i) => (
                <div key={i} style={{ display: "flex", gap: 6, alignItems: "flex-start", fontSize: 11, color: "#cbd5e1" }}>
                  <span className="c-purple" style={{ flexShrink: 0 }}>✓</span>
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: 14, fontSize: 12, color: "#fff" }}>
          <span className="c-blue">Goal:</span> Turn $1M ARR into a US revenue engine — <span className="c-purple">with a Trusted VC as a strategic partner.</span>
        </div>
      </div>
      {children}
    </div>
  );
}
