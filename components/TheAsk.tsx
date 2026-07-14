import { Rocket, Target, Users } from "lucide-react";

export function TheAsk() {
  return (
    <section className="relative py-24 px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-white">The Ask</h2>
          <div className="text-5xl text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-4">
            $1.5M Precision Round
          </div>
          <p className="text-xl text-slate-300 mb-2 max-w-3xl mx-auto">
            <span className="font-semibold text-white">The Goal:</span> Convert founder-led traction into a repeatable sales engine with a lead investor who adds distribution and operating leverage.
          </p>
          <div className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-500/50 rounded-full text-purple-400 mt-4">
            Terms: $10M Cap (SAFE)
          </div>
        </div>

        {/* The Financial Ask: Use of Funds */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 mb-8">
          <h3 className="text-2xl mb-8 text-center text-white">The Financial Ask: Use of Funds</h3>

          <div className="space-y-6">
            {/* Product & Eng - 40% */}
            <div className="relative">
              <div className="flex items-start gap-4 mb-2">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Rocket className="text-blue-400" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg text-white">Product & Engineering</h4>
                    <div className="text-2xl text-blue-400 font-semibold">40%</div>
                  </div>
                  <p className="text-slate-400 mb-2">
                    Finalizing the "Self-Serve" Launch Kit to reduce onboarding friction
                  </p>
                  <div className="text-sm text-blue-400">$600k</div>
                </div>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: '40%' }}></div>
              </div>
            </div>

            {/* Go-to-Market - 30% */}
            <div className="relative">
              <div className="flex items-start gap-4 mb-2">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="text-purple-400" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg text-white">Go-to-Market</h4>
                    <div className="text-2xl text-purple-400 font-semibold">30%</div>
                  </div>
                  <p className="text-slate-400 mb-2">
                    Hiring the first Sales/Marketing lead to drive the pipeline
                  </p>
                  <div className="text-sm text-purple-400">$450k</div>
                </div>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-purple-500 rounded-full" style={{ width: '30%' }}></div>
              </div>
            </div>

            {/* Operations - 30% */}
            <div className="relative">
              <div className="flex items-start gap-4 mb-2">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="text-green-400" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg text-white">Operations</h4>
                    <div className="text-2xl text-green-400 font-semibold">30%</div>
                  </div>
                  <p className="text-slate-400 mb-2">
                    Establish Customer Success to protect retention and reduce founder dependency
                  </p>
                  <div className="text-sm text-green-400">$450k</div>
                </div>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{ width: '30%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Risks & Mitigation */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 mb-8">
          <h3 className="text-2xl mb-6 text-center text-white">Risks & Mitigation</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50">
              <h4 className="text-red-400 font-semibold mb-2">Risk: Long Enterprise Sales Cycles</h4>
              <p className="text-slate-300 text-sm"><span className="text-green-400 font-semibold">Mitigation:</span> Standardized Launch Kits + Clear Pricing</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50">
              <h4 className="text-red-400 font-semibold mb-2">Risk: Integration Complexity</h4>
              <p className="text-slate-300 text-sm"><span className="text-green-400 font-semibold">Mitigation:</span> API-first architecture + Pre-built connectors</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700/50">
              <h4 className="text-red-400 font-semibold mb-2">Risk: Customer Concentration</h4>
              <p className="text-slate-300 text-sm"><span className="text-green-400 font-semibold">Mitigation:</span> 40-customer diversification strategy</p>
            </div>
          </div>
        </div>

        {/* The Strategic Ask */}
        <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-xl p-8 mb-8">
          <h3 className="text-2xl mb-8 text-center text-white">The Strategic Ask</h3>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* What We Want From Our Partner */}
            <div>
              <h4 className="text-xl text-blue-400 mb-6 font-semibold">What We Want From Our Partner</h4>
              <div className="space-y-6">
                <div>
                  <div className="text-white font-semibold mb-1">1. US Distribution Breakthrough</div>
                  <p className="text-slate-400 text-sm">10–15 targeted MGA / carrier intros → 2–3 pilots or signed LOIs.</p>
                </div>
                <div>
                  <div className="text-white font-semibold mb-1">2. Fundraising Readiness → Close</div>
                  <p className="text-slate-400 text-sm">Refine positioning, metrics, and narrative to run and close our next round post-program.</p>
                </div>
                <div>
                  <div className="text-white font-semibold mb-1">3. Founder-Led → Scalable GTM</div>
                  <p className="text-slate-400 text-sm">Leave with a clear, repeatable US sales playbook and execution roadmap.</p>
                </div>
              </div>
            </div>

            {/* What Makes This a Home Run */}
            <div>
              <h4 className="text-xl text-purple-400 mb-6 font-semibold">What Makes This a Home Run</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3 bg-slate-800/50 p-4 rounded-lg border border-slate-700/50 hover:border-purple-500/50 transition-colors">
                  <span className="text-purple-400 shrink-0 mt-0.5">✓</span>
                  <span className="text-slate-300 text-sm">Trusted VC on our cap table (long-term partner, follow-on support)</span>
                </div>
                <div className="flex items-start gap-3 bg-slate-800/50 p-4 rounded-lg border border-slate-700/50 hover:border-purple-500/50 transition-colors">
                  <span className="text-purple-400 shrink-0 mt-0.5">✓</span>
                  <span className="text-slate-300 text-sm">Strategic Advisor Chair aligned to distribution + GTM</span>
                </div>
                <div className="flex items-start gap-3 bg-slate-800/50 p-4 rounded-lg border border-slate-700/50 hover:border-purple-500/50 transition-colors">
                  <span className="text-purple-400 shrink-0 mt-0.5">✓</span>
                  <span className="text-slate-300 text-sm">High-signal corporate partner access that converts to revenue</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-700/50 text-center">
            <p className="text-lg text-white font-medium">
              <span className="text-blue-400">Goal:</span> Turn $1M ARR into a US revenue engine — <span className="text-purple-400">with a Trusted VC as a strategic partner.</span>
            </p>
          </div>
        </div>

        {/* The outcome */}
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-900/40 via-purple-900/40 to-pink-900/40 border-2 border-purple-500/50 rounded-2xl p-8">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="relative text-center">
            <h3 className="text-2xl mb-4 text-white">The Outcome</h3>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto mb-6">
              This capital directly funds the path from <span className="text-blue-400 font-semibold">12 to 40+ customers</span> and <span className="text-green-400 font-semibold">$1M to $2.4M ARR</span>
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white">
                ✓ Scalable Sales Machine
              </div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white">
                ✓ Self-Serve Onboarding
              </div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white">
                ✓ Series A Ready
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}