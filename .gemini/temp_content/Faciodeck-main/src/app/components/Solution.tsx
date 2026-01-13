import { Code2, Zap, Rocket } from "lucide-react";

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
              From Quote → Bind → Audit-Ready Bordereaux <span className="text-green-400 font-semibold">without human touch</span>
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-xl p-8">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
              <Code2 className="text-blue-400" size={24} />
            </div>
            <h3 className="text-xl mb-3 text-white">Accessible</h3>
            <p className="text-slate-400">
              Flat <span className="text-blue-400 font-semibold">$5,000/mo</span> retainer. No hidden seat costs.
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
      </div>
    </section>
  );
}