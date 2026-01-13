import { ShieldCheck, CheckCircle2 } from "lucide-react";

const logos = [
    { name: "Berkshire Hathaway", src: "/images/logos/berkshire.png" },
    { name: "Generali", src: "/images/logos/generali.svg" },
    { name: "Mapfre", src: "/images/logos/mapfre.png" },
    { name: "Aflac", src: "/images/logos/aflac.png" },
    { name: "Harel", src: "/images/logos/harel.png" },
    { name: "Howden", src: "/images/logos/howden.png" },
    { name: "AmTrust", src: "/images/logos/amtrust.png" }
];

export function TechValidation() {
    return (
        <section className="relative py-20 px-6">
            <div className="max-w-5xl mx-auto">
                <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-md border border-slate-700 rounded-2xl p-8 md:p-12 overflow-hidden relative">

                    <div className="flex items-center justify-center mb-8">
                        <div className="bg-green-500/10 p-3 rounded-full border border-green-500/20">
                            <ShieldCheck className="text-green-400" size={40} />
                        </div>
                    </div>

                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Tech Validation</h2>
                        <h3 className="text-xl text-blue-400 font-medium mb-4">Enterprise-Grade Architecture</h3>
                        <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                            Before targeting the high-velocity MGA market, our core infrastructure was stress-tested and validated by the world's largest carriers.
                        </p>
                    </div>

                    <div className="mb-12">
                        <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest mb-6">
                            Pilots & Technical Validation with
                        </p>
                        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 opacity-80">
                            {logos.map((logo, index) => (
                                <div key={index} className="relative h-12 w-32 grayscale hover:grayscale-0 transition-all duration-300">
                                    <img
                                        src={logo.src}
                                        alt={logo.name}
                                        title={logo.name}
                                        className="object-contain w-full h-full"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                            // Fallback text
                                            const span = document.createElement('span');
                                            span.className = 'text-lg font-bold text-slate-400';
                                            span.innerText = logo.name;
                                            e.currentTarget.parentElement?.appendChild(span);
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 max-w-2xl mx-auto">
                        <div className="flex items-start gap-4">
                            <CheckCircle2 className="text-green-400 shrink-0 mt-1" size={24} />
                            <div>
                                <h4 className="text-white font-semibold mb-1">Why we pivoted:</h4>
                                <p className="text-slate-300 italic">
                                    "We proved the tech works at the enterprise level, then pointed it at the MGA market for rapid sales velocity."
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
