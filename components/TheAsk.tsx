import { Rocket, Target, Users } from "lucide-react";

export function TheAsk() {
  return (
    <section className="relative py-24 px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-white">The Ask</h2>
          <div className="text-5xl text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-4">
            $500k Seed Round
          </div>
          <p className="text-xl text-slate-300 mb-2">
            This round converts founder-led delivery into a repeatable onboarding + sales machine
          </p>
          <div className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-500/50 rounded-full text-purple-400 mt-4">
            Valuation Target: $10M Cap (SAFE)
          </div>
        </div>

        {/* Use of Funds */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 mb-8">
          <h3 className="text-2xl mb-8 text-center text-white">Use of Funds</h3>

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
                  <div className="text-sm text-blue-400">$200k</div>
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
                  <div className="text-sm text-purple-400">$150k</div>
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
                    establish Customer Success to protect retention and reduce founder dependency
                  </p>
                  <div className="text-sm text-green-400">$150k</div>
                </div>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{ width: '30%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* The outcome */}
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-900/40 via-purple-900/40 to-pink-900/40 border-2 border-purple-500/50 rounded-2xl p-8">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="relative text-center">
            <h3 className="text-2xl mb-4 text-white">The Outcome</h3>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto mb-6">
              This capital directly funds the path from <span className="text-blue-400 font-semibold">8 to 40+ customers</span> and <span className="text-green-400 font-semibold">$1M to $2.4M ARR</span>
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