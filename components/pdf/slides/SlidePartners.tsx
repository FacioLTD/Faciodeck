import React from "react";

export function SlidePartners({ children }: { children?: React.ReactNode }) {
  const partners = [
    { name: "Microsoft", type: "Enterprise Distribution", desc: "Distribution & Trust through Marketplace Access", tags: ["Azure Marketplace", "Enterprise Credibility"], color: "#60a5fa", bg: "rgba(59,130,246,.08)", border: "rgba(59,130,246,.3)" },
    { name: "Symphony", type: "Growth Engine", desc: "The growth engine to dominate the Lloyd's Coverholder segment", tags: ["Lloyd's Market", "Specialty Insurance"], color: "#a78bfa", bg: "rgba(168,85,247,.08)", border: "rgba(168,85,247,.3)" },
    { name: "Lloyd's Market Access", type: "Ecosystem Access", desc: "Strategic alignment with the Lloyd's ecosystem", tags: ["Coverholder Network", "Market Trust"], color: "#34d399", bg: "rgba(16,185,129,.08)", border: "rgba(16,185,129,.3)" },
  ];

  return (
    <div className="pdf-slide slide-bg-accent">
      <div style={{ position: "relative", zIndex: 1 }}>
        <div className="pdf-section-title" style={{ textAlign: "center" }}>Strategic Partners</div>
        <div className="pdf-section-sub c-slate" style={{ textAlign: "center" }}>Distribution & Trust</div>
        <div className="pdf-divider" style={{ margin: "8px auto 28px" }} />

        <div className="pdf-grid-3">
          {partners.map((p, i) => (
            <div key={i} className="pdf-card" style={{ borderColor: p.border, background: p.bg, textAlign: "center" }}>
              <div style={{ width: 48, height: 48, borderRadius: 10, background: `${p.color}22`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px", fontSize: 24 }}>
                {i === 0 ? "🏢" : i === 1 ? "📈" : "🏛️"}
              </div>
              <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 2 }}>{p.name}</div>
              <div style={{ fontSize: 10, color: p.color, marginBottom: 12, fontWeight: 500 }}>{p.type}</div>
              <p style={{ fontSize: 11, color: "#cbd5e1", marginBottom: 14, lineHeight: 1.5 }}>{p.desc}</p>
              <div style={{ display: "flex", gap: 6, justifyContent: "center", flexWrap: "wrap" }}>
                {p.tags.map((t, j) => (
                  <span key={j} className="pdf-badge" style={{ background: `${p.color}15`, color: p.color, border: `1px solid ${p.color}33`, fontSize: 9 }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {children}
    </div>
  );
}
