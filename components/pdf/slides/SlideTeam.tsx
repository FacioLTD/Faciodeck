import React from "react";

const teamMembers = [
  {
    name: "Uriel Aharoni", role: "CEO & Co-founder", title: "The Visionary & Architect",
    details: ["PhD in AI, MA in Law, BA in Economics", "Co-founder of Choco Insurance & InsurMedix", "Led 100+ tech integrations for financial institutions", "Translating complex insurance law into automated code"],
  },
  {
    name: "Liav Geffen", role: "Chairman & Co-founder", title: "The Industry Heavyweight",
    details: ["Founder of largest Ultra-Orthodox agency", "Former CMO/Data at Harel", "Deep ties into Israeli & Lloyd's ecosystems", "Ecosystem access + distribution leverage"],
  },
  {
    name: "Roey Geffen", role: "COO", title: "The Operational Backbone",
    details: ["CEO of Geffen Basad", "Board Member at Choco Insurance", "ERP + Systems Execution Expert", "Turning chaos into structured workflows"],
  },
  {
    name: "Yoni Novick", role: "MD of Growth", title: "The Scaling Engine",
    details: ["Scaled fintech ops for 20k+ users", "Built training divisions for a $3B Bank", "Electronics Engineer + MBA (Highest Honors)", "Building repeatable onboarding machine"],
  },
];

export function SlideTeam({ children }: { children?: React.ReactNode }) {
  return (
    <div className="pdf-slide slide-bg-dark" style={{ padding: "36px 48px" }}>
      <div style={{ position: "relative", zIndex: 1 }}>
        <div className="pdf-section-title" style={{ textAlign: "center", fontSize: 28 }}>The Team</div>
        <div className="pdf-section-sub c-slate" style={{ textAlign: "center", fontSize: 13, marginBottom: 16 }}>
          Deep Insurance DNA paired with Enterprise Tech Execution
        </div>

        <div className="pdf-grid-4" style={{ marginBottom: 14, gap: 12 }}>
          {teamMembers.map((m, i) => (
            <div key={i} className="pdf-card" style={{ padding: 14 }}>
              <div style={{ textAlign: "center", marginBottom: 8 }}>
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 8px", fontSize: 22 }}>👤</div>
                <div style={{ fontSize: 14, fontWeight: 700 }}>{m.name}</div>
                <div className="c-blue" style={{ fontSize: 11, fontWeight: 500 }}>{m.role}</div>
                <div className="c-slate" style={{ fontSize: 9, fontStyle: "italic" }}>{m.title}</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {m.details.map((d, j) => (
                  <div key={j} style={{ fontSize: 9, color: "#94a3b8", display: "flex", gap: 4, alignItems: "flex-start" }}>
                    <span style={{ color: "#60a5fa", flexShrink: 0 }}>•</span>{d}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Team strength strip */}
        <div className="pdf-card" style={{ textAlign: "center", borderColor: "rgba(59,130,246,.15)", background: "rgba(59,130,246,.03)" }}>
          <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 6 }}>Why We Win as a Team</div>
          <p className="c-blue" style={{ fontSize: 12, fontStyle: "italic", marginBottom: 8 }}>&quot;We are not learning insurance. We are automating it.&quot;</p>
          <div style={{ display: "flex", justifyContent: "center", gap: 16, fontSize: 10, color: "#cbd5e1" }}>
            <span>🛡️ Insurance distribution expertise</span>
            <span>⚡ Enterprise-grade tech execution</span>
            <span>💼 Proven complex integrations</span>
            <span>📈 Founder-led traction proven</span>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
