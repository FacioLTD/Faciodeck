import { Users, DollarSign, Clock, TrendingUp } from "lucide-react";

export function Traction() {
  return (
    <section className="relative py-24 px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-full text-green-400 mb-4 uppercase tracking-wider text-sm">
            Traction First
          </div>
          <h2 className="text-4xl md:text-5xl mb-4 text-white">By The Numbers</h2>
          <p className="text-xl text-slate-300">
            100% Founder-Led Sales
          </p>
        </div>
        
        {/* Key metrics - highlighted prominently */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-sm border-2 border-blue-500/50 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-blue-400" size={28} />
              </div>
              <div className="text-5xl mb-2 text-white">8</div>
              <div className="text-sm text-slate-400 mb-3">Customers</div>
              <div className="text-xs text-blue-400">4 Live + 4 Signed</div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-sm border-2 border-green-500/50 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="text-green-400" size={28} />
              </div>
              <div className="text-5xl mb-2 text-white">$1M</div>
              <div className="text-sm text-slate-400 mb-3">ARR</div>
              <div className="text-xs text-green-400">Contracted Value</div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-sm border-2 border-purple-500/50 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-purple-400" size={28} />
              </div>
              <div className="text-5xl mb-2 text-white">&lt;4</div>
              <div className="text-sm text-slate-400 mb-3">Month Payback</div>
              <div className="text-xs text-purple-400">High-margin SaaS</div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-sm border-2 border-yellow-500/50 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-yellow-400" size={28} />
              </div>
              <div className="text-5xl mb-2 text-white">$180k</div>
              <div className="text-sm text-slate-400 mb-3">LTV</div>
              <div className="text-xs text-yellow-400">Per Logo (36mo)</div>
            </div>
          </div>
        </div>
        
        {/* Proof points */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-xl p-8">
          <h3 className="text-xl mb-6 text-center text-white">Proven Track Record</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl text-green-400 mb-2">4 Live</div>
              <div className="text-sm text-slate-400">In Production</div>
            </div>
            <div>
              <div className="text-2xl text-blue-400 mb-2">4 Signed</div>
              <div className="text-sm text-slate-400">Onboarding</div>
            </div>
            <div>
              <div className="text-2xl text-purple-400 mb-2">100%</div>
              <div className="text-sm text-slate-400">Founder-Led Sales</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}