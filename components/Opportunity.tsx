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
            We are the only mid-market solution combining: <br className="hidden md:block" />
            <span className="text-blue-400 font-semibold">Policy management</span>, <span className="text-purple-400 font-semibold">Financial reconciliation</span>, and <span className="text-green-400 font-semibold">Automated bordereaux</span> at accessible pricing.
          </p>
        </div>

        {/* Total Addressable Market */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 mb-8">
          <h3 className="text-2xl mb-6 text-white text-center">Total Addressable Market</h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-lg text-blue-400 mb-4 font-semibold">Target Profile</h4>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">✓</span> <span>MGAs + Lloyd’s Coverholders (total 7,000)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">✓</span> <span>5–150 employees</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400">✓</span> <span>Writing €5M–€100M GWP</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-xl p-6 text-center">
              <div className="text-4xl text-white font-bold mb-2">4,000</div>
              <div className="text-sm text-blue-400 font-medium">Total Addressable Logos in this Segment</div>
            </div>
          </div>
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

        {/* Macro Tailwinds */}
        <div className="mt-8 bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
          <h3 className="text-2xl mb-6 text-white text-center">Macro Tailwinds</h3>
          <div className="grid md:grid-cols-2 gap-y-4 gap-x-8 text-slate-300 mb-6">
            <div className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">✓</span>
              <span>MGA market growing faster than traditional carriers</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">✓</span>
              <span>Lloyd’s modernization mandates</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">✓</span>
              <span>Increasing regulatory scrutiny on reporting</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">✓</span>
              <span>AI-driven underwriting adoption</span>
            </div>
          </div>
          <p className="text-center text-lg text-purple-400 font-medium">
            Regulation and complexity are increasing. Spreadsheets cannot scale.
          </p>
        </div>
      </div>
    </section >
  );
}
