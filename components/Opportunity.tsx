import { TrendingUp, Zap, Target } from "lucide-react";

export function Opportunity() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-white">The Opportunity</h2>
          <p className="text-2xl text-slate-300 mb-6">
            Facio powers the "Autonomous Economy," starting with the <span className="text-blue-400">global $100B+ MGA market</span>
          </p>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            We replace the "Excel Chaos" of Managing General Agents (MGAs) with an automated, smart-contract-driven platform
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-2xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Target className="text-blue-400" size={32} />
            <h3 className="text-2xl text-white">The Only Mid-Market Solution</h3>
          </div>
          <p className="text-lg text-slate-300">
            We are the only solution that combines <span className="text-blue-400 font-semibold">complex financial reconciliation</span> with <span className="text-purple-400 font-semibold">policy management</span> at a mid-market price point.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <TrendingUp className="text-blue-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl mb-3 text-white">Market Size</h3>
                <div className="text-3xl text-blue-400 mb-2">$100B+</div>
                <p className="text-slate-400">MGA market with urgent operational pain</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="text-purple-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl mb-3 text-white">Unique Position</h3>
                <p className="text-slate-300 mb-2">Automated bordereaux generation</p>
                <p className="text-slate-400">Complex commission splits, Lloyd's standards compliance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}
