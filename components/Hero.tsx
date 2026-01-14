import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      {/* Glowing orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Logo/Brand */}
        <div className="inline-block mb-8">
          <div className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            FACIO
          </div>
        </div>

        {/* Main headline */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl mb-6 text-white/90 max-w-4xl mx-auto leading-tight">
          The Operating System for Specialty Insurance
        </h1>

        {/* Status badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="px-4 py-2 bg-green-500/20 border border-green-500/50 rounded-full text-green-400">
            Bootstrapped
          </div>
          <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 mb-6 backdrop-blur-sm">
            Investor Presentation v2.1
          </div>
          <div className="px-4 py-2 bg-purple-500/20 border border-purple-500/50 rounded-full text-purple-400 font-semibold">
            $1M Contracted ARR
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 text-slate-500 animate-bounce">
          <span className="text-sm uppercase tracking-wider">Scroll to explore</span>
          <ArrowRight className="rotate-90" size={20} />
        </div>
      </div>
    </section>
  );
}