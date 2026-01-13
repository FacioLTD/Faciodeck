import { Mail, Globe } from "lucide-react";

export function Contact() {
  return (
    <section className="relative py-24 px-6 min-h-screen flex items-center justify-center">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900 to-slate-950"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-8">
          <div className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            FACIO
          </div>
        </div>

        {/* Tagline */}
        <p className="text-2xl md:text-3xl mb-12 text-slate-300 italic">
          "Building the infrastructure for the future of finance."
        </p>

        {/* Contact info */}
        <div className="space-y-6 mb-12">
          <div className="inline-block px-6 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full mb-6">
            <span className="text-slate-400">CEO: </span>
            <span className="text-white font-semibold">Uriel Aharoni</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                <Mail className="text-blue-400" size={24} />
              </div>
              <div className="text-left">
                <div className="text-sm text-slate-400">Email</div>
                <a href="mailto:uriel@facio.io" className="text-lg text-white hover:text-blue-400 transition-colors">
                  uriel@facio.io
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
                <Globe className="text-purple-400" size={24} />
              </div>
              <div className="text-left">
                <div className="text-sm text-slate-400">Website</div>
                <a href="https://facio.io" target="_blank" rel="noopener noreferrer" className="text-lg text-white hover:text-purple-400 transition-colors">
                  facio.io
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="relative inline-block mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-50"></div>
          <a href="mailto:uriel@facio.io" className="relative block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl text-lg font-medium hover:from-blue-500 hover:to-purple-500 transition-all">
            Let's Build the Future Together
          </a>
        </div>

        {/* Footer */}
        <div className="pt-8 border-t border-slate-800">
          <p className="text-sm text-slate-500">
            $500k Seed Round | $10M Cap (SAFE) | $1M → $2.4M ARR in 18 Months
          </p>
        </div>
      </div>
    </section>
  );
}