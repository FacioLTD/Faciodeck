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
        <div className="mb-12 bg-slate-800/40 border border-slate-700 rounded-xl p-8 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Pricing (3 Components)</h3>
          <div className="grid md:grid-cols-3 gap-6 text-sm mb-6">
            <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700/50">
              <div className="font-semibold text-blue-400 mb-1">Platform Subscription</div>
              <div className="text-slate-300">$65 / user / month</div>
            </div>
            <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700/50">
              <div className="font-semibold text-blue-400 mb-1">Cloud Infrastructure</div>
              <div className="text-slate-300">Tiered (IC10–IC50)</div>
            </div>
            <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700/50">
              <div className="font-semibold text-blue-400 mb-1">Implementation</div>
              <div className="text-slate-300">Hourly w/ volume discounts</div>
            </div>
          </div>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 text-center">
            <p className="text-slate-300">
              <span className="font-semibold text-white">Example (15 users):</span> $975 seats + ~$1.6k–$2.4k cloud + ~$1.5k–$2.5k services ⇒ <span className="font-bold text-white">~$4.1k–$5.9k/month typical</span>
            </p>
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