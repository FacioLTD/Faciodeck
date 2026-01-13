import { AlertCircle, DollarSign, Wrench } from "lucide-react";

export function Problem() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-white">The Problem</h2>
          <p className="text-2xl text-red-400 mb-4">The "MGA Bottleneck"</p>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            MGAs have the operational complexity of a Carrier, but the budget of a startup.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-red-900/40 to-orange-900/40 border border-red-500/30 rounded-xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <DollarSign className="text-red-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl mb-2 text-white">Legacy Tech is Prohibitive</h3>
              </div>
            </div>
            <p className="text-slate-300 mb-3">
              Competitors repurpose heavy Carrier systems that demand <span className="text-red-400 font-semibold">$600k+ for implementation</span> and <span className="text-red-400 font-semibold">$600k+ in annual licensing</span>, pricing out mid-market MGAs.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-900/40 to-yellow-900/40 border border-orange-500/30 rounded-xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Wrench className="text-orange-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl mb-2 text-white">Complexity is Manual</h3>
              </div>
            </div>
            <p className="text-slate-300 mb-3">
              No existing tool <span className="text-orange-400 font-semibold">automatically handles</span> the complex split of premiums, commissions, and taxes for Lloyd's standards
            </p>
            <div className="text-sm text-slate-400">
              Hours of manual work each month
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}