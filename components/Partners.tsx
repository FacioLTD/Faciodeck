import { Building2, TrendingUp } from "lucide-react";

export function Partners() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 text-white">Strategic Partners</h2>
          <p className="text-xl text-slate-300">Distribution & Trust</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Microsoft */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-blue-500/50 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <Building2 className="text-blue-400" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl text-white">Microsoft</h3>
                  <div className="text-sm text-blue-400">Enterprise Distribution</div>
                </div>
              </div>
              <p className="text-slate-300 mb-4">
                Distribution & Trust through <span className="text-blue-400 font-semibold">Marketplace Access</span>
              </p>
              <div className="flex flex-wrap gap-2">
                <div className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                  Azure Marketplace
                </div>
                <div className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                  Enterprise Credibility
                </div>
              </div>
            </div>
          </div>
          
          {/* Symphony */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-purple-500/50 rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <TrendingUp className="text-purple-400" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl text-white">Symphony</h3>
                  <div className="text-sm text-purple-400">Growth Engine</div>
                </div>
              </div>
              <p className="text-slate-300 mb-4">
                The growth engine to dominate the <span className="text-purple-400 font-semibold">Lloyd's Coverholder</span> segment
              </p>
              <div className="flex flex-wrap gap-2">
                <div className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                  Lloyd's Market
                </div>
                <div className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                  Specialty Insurance
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
