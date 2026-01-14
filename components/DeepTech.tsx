import { Atom, Landmark, Shield } from "lucide-react";

export function DeepTech() {
  return (
    <section className="relative py-24 px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-white">The Upside</h2>
          <p className="text-2xl text-cyan-400 mb-4">Deep Tech Moat</p>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            While our core business is Insurance SaaS, our infrastructure has massive potential
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* GovTech */}
          <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/30 rounded-xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Landmark className="text-purple-400" size={28} />
              </div>
              <div>
                <h3 className="text-2xl mb-2 text-white">GovTech</h3>
                <div className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm mb-3">
                  In Advanced Talks
                </div>
              </div>
            </div>
            <p className="text-slate-300 mb-4">
              Government AI portals for regulated workflows
            </p>
            <div className="flex flex-wrap gap-2">
              <div className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-sm">
                Israel
              </div>
              <div className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-sm">
                Papua New Guinea
              </div>
            </div>
          </div>

          {/* Quantum DB */}
          <div className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 border border-cyan-500/30 rounded-xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Atom className="text-cyan-400" size={28} />
              </div>
              <div>
                <h3 className="text-2xl mb-2 text-white">Quantum DB</h3>
                <div className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm mb-3">
                  Future / Optional
                </div>
              </div>
            </div>
            <p className="text-slate-300 mb-4">
              Proprietary database architecture for high-frequency fintech
            </p>
            <div className="flex flex-wrap gap-2">
              <div className="px-3 py-1 bg-cyan-500/10 text-cyan-300 rounded-full text-sm">
                Next-Gen Infrastructure
              </div>
              <div className="px-3 py-1 bg-cyan-500/10 text-cyan-300 rounded-full text-sm">
                High-Frequency Trading
              </div>
            </div>
          </div>
        </div>

        {/* Strategic note */}
        <div className="mt-8 bg-slate-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-6 text-center">
          <p className="text-slate-300">
            <span className="text-cyan-400 font-semibold">Insurance SaaS</span> is the business. <span className="text-purple-400 font-semibold">Our infrastructure</span> is a long-term moat and optional expansion.
          </p>
        </div>
      </div>
    </section>
  );
}
