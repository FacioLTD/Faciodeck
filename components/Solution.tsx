import { Code2, Zap, Rocket, Check, X } from "lucide-react";

export function Solution() {
  return (
    <section className="relative py-24 px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-white">The Solution</h2>
          <p className="text-2xl text-green-400 mb-4">The Revenue Engine</p>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            A complete "Business Logic as Code" platform
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-xl p-8">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
              <Zap className="text-green-400" size={24} />
            </div>
            <h3 className="text-xl mb-3 text-white">Automated</h3>
            <p className="text-slate-400">
              From Quote → Bind → Audit-ready bordereaux, <span className="text-green-400 font-semibold">with humans only handling exceptions.</span>
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-xl p-8">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
              <Code2 className="text-blue-400" size={24} />
            </div>
            <h3 className="text-xl mb-3 text-white">Accessible</h3>
            <p className="text-slate-400">
              Transparent 3-part pricing. <span className="text-blue-400 font-semibold">Most customers land in the ~$4k–$7k/month</span> range depending on scale.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl p-8">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
              <Rocket className="text-purple-400" size={24} />
            </div>
            <h3 className="text-xl mb-3 text-white">Fast</h3>
            <p className="text-slate-400">
              "MGA Launch Kit" enables <span className="text-purple-400 font-semibold">Go-Live in under 60 days</span>
            </p>
          </div>
        </div>

        {/* Pricing Block */}
        {/* Commercial Model Block */}
        <div className="mb-12 bg-slate-800/40 border border-slate-700 rounded-xl p-8 max-w-5xl mx-auto relative overflow-hidden">
          {/* Headline Strategy Badge */}
          <div className="absolute top-0 right-0 bg-gradient-to-l from-green-500/20 to-transparent px-4 py-2 rounded-bl-xl border-b border-l border-green-500/30">
            <span className="text-xs font-semibold text-green-400 tracking-wider">DISRUPTIVE MODEL: ZERO CAPEX</span>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-end mb-8 mt-2">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Commercial Model</h3>
              <p className="text-slate-400 text-sm max-w-xl">
                We waive the industry-standard $50k+ setup fee in exchange for a high-value monthly retainer. <span className="text-white font-semibold">Zero CapEx for the client. Higher ARR for us.</span>
              </p>
            </div>
          </div>

          {/* 3 Revenue Streams Columns */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Column 1 */}
            <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700/50 flex flex-col items-center text-center">
              <div className="text-xs uppercase tracking-widest text-slate-500 mb-2 font-semibold">1. Platform License</div>
              <div className="text-3xl font-bold text-white mb-1">$65</div>
              <div className="text-xs text-slate-400 mb-4">/ user / mo</div>
              <div className="w-full border-t border-slate-700/50 pt-3 mt-auto">
                <span className="text-blue-400 text-sm font-medium">Core SaaS Subscription</span>
              </div>
            </div>

            {/* Column 2 */}
            <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700/50 flex flex-col items-center text-center">
              <div className="text-xs uppercase tracking-widest text-slate-500 mb-2 font-semibold">2. Cloud Infrastructure</div>
              <div className="text-2xl font-bold text-white mb-2 mt-1">Usage Based</div>
              <div className="text-xs text-slate-400 mb-4 opacity-0">spacer</div> {/* invisible spacer for alignment */}
              <div className="w-full border-t border-slate-700/50 pt-3 mt-auto">
                <span className="text-purple-400 text-sm font-medium">Pass-through Compute</span>
              </div>
            </div>

            {/* Column 3 */}
            <div className="bg-gradient-to-b from-green-900/10 to-slate-900/50 p-6 rounded-lg border border-green-500/30 flex flex-col items-center text-center relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-500 text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded-full">
                VALUE DRIVER
              </div>
              <div className="text-xs uppercase tracking-widest text-green-400 mb-2 font-semibold">3. Managed Success</div>
              <div className="text-3xl font-bold text-white mb-1">$2,000+</div>
              <div className="text-xs text-slate-400 mb-4">/ mo</div>
              <div className="w-full border-t border-green-500/30 pt-3 mt-auto">
                <span className="text-green-400 text-sm font-medium">Amortized Implementation</span>
              </div>
            </div>
          </div>

          {/* Deal Economics Bar */}
          <div className="bg-slate-900/80 border border-slate-700 rounded-lg p-5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-left flex-1 border-r border-slate-700/50 pr-6 mr-2 hidden md:block">
              <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">Deal Profile (15 Users)</div>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between"><span className="text-slate-400">SaaS License:</span> <span className="text-slate-200 font-mono">$975 /mo</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Cloud Tier 2:</span> <span className="text-slate-200 font-mono">~$2,000 /mo</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Success Retainer:</span> <span className="text-slate-200 font-mono">$2,025 /mo</span></div>
              </div>
            </div>

            <div className="flex-1 flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
              <div className="text-center md:text-right flex-grow">
                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Target MRR</div>
                <div className="text-3xl font-bold text-white">~$5,000 <span className="text-lg text-slate-500 font-normal">/ mo</span></div>
                <div className="text-xs text-slate-400">Annual Contract Value: $60,000</div>
              </div>
              {/* Competitor Comparison Mini-Box */}
              <div className="text-xs bg-white/5 p-3 rounded border border-white/10 w-full md:w-auto min-w-[180px]">
                <div className="flex justify-between border-b border-white/10 pb-1 mb-1">
                  <span className="text-slate-400">Competitors</span>
                  <span className="text-red-400 font-mono">$50k Upfront</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-200 font-semibold">Facio</span>
                  <span className="text-green-400 font-mono">$0 Upfront</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Value prop */}
        <div className="relative bg-slate-900/50 backdrop-blur-sm border border-green-500/30 rounded-2xl p-8 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
          <div className="relative text-center">
            <h3 className="text-2xl mb-4 text-white">Complete Workflow Automation</h3>
            <div className="flex flex-wrap justify-center items-center gap-4 text-lg">
              <span className="text-slate-300">Quote</span>
              <span className="text-green-400">→</span>
              <span className="text-slate-300">Bind</span>
              <span className="text-green-400">→</span>
              <span className="text-slate-300">Bordereaux</span>
              <span className="text-green-400">→</span>
              <span className="text-slate-300">Reconciliation</span>
              <span className="text-green-400">→</span>
              <span className="text-green-400 font-semibold">Audit Ready</span>
            </div>
          </div>
        </div>

        {/* Competitive Landscape */}
        <div className="mt-12 bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Competitive Landscape (Why we win)</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-700 text-slate-400 text-sm">
                  <th className="py-3 px-4 font-normal">Feature</th>
                  <th className="py-3 px-4 font-semibold text-blue-400 text-center bg-blue-500/5 rounded-t-lg">Facio</th>
                  <th className="py-3 px-4 font-normal text-center">Generic PAS</th>
                  <th className="py-3 px-4 font-normal text-center">Excel</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-slate-800">
                  <td className="py-3 px-4 text-slate-300">Lloyd's bordereaux + complex splits</td>
                  <td className="py-3 px-4 text-center bg-blue-500/5"><Check className="inline text-green-400" size={18} /></td>
                  <td className="py-3 px-4 text-center text-yellow-500">⚠️</td>
                  <td className="py-3 px-4 text-center text-red-500"><X className="inline" size={18} /></td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-3 px-4 text-slate-300">Audit-ready reconciliation</td>
                  <td className="py-3 px-4 text-center bg-blue-500/5"><Check className="inline text-green-400" size={18} /></td>
                  <td className="py-3 px-4 text-center text-yellow-500">⚠️</td>
                  <td className="py-3 px-4 text-center text-red-500"><X className="inline" size={18} /></td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-3 px-4 text-slate-300">Go-live speed (≤60 days)</td>
                  <td className="py-3 px-4 text-center bg-blue-500/5"><Check className="inline text-green-400" size={18} /></td>
                  <td className="py-3 px-4 text-center text-red-500"><X className="inline" size={18} /></td>
                  <td className="py-3 px-4 text-center text-slate-500">-</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-slate-300">Total cost to operate (mid-market)</td>
                  <td className="py-3 px-4 text-center bg-blue-500/5 rounded-b-lg"><Check className="inline text-green-400" size={18} /></td>
                  <td className="py-3 px-4 text-center text-red-500"><X className="inline" size={18} /></td>
                  <td className="py-3 px-4 text-center text-red-500"><X className="inline" size={18} /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}