import { User, Shield, Briefcase, Zap } from "lucide-react";

const teamMembers = [
    {
        name: "Uriel Aharoni",
        role: "CEO & Co-founder",
        title: "The Visionary & Architect",
        icon: <Zap className="text-yellow-400" size={32} />,
        details: [
            { highlight: "Tech & Law Triad", desc: "PhD in AI (Business Admin), MA in Law, BA in Economics." },
            { highlight: "Serial Founder", desc: "Co-founder of Choco Insurance and InsurMedix Global Care." },
            { highlight: "Enterprise Vet", desc: "Led 100+ tech integration projects for major financial institutions." },
            { highlight: "Superpower", desc: "Translating complex insurance law into automated code." }
        ]
    },
    {
        name: "Liav Geffen",
        role: "Chairman & Co-founder",
        title: "The Industry Heavyweight",
        icon: <Shield className="text-blue-400" size={32} />,
        details: [
            { highlight: "Market Dominance", desc: "Founder of Geffen Basad, the largest insurance agency for the Ultra-Orthodox niche." },
            { highlight: "Enterprise Scale", desc: "Former Chief of Marketing & Data at Harel Insurance and ZIM Shipping." },
            { highlight: "The Network", desc: "Deep ties into the Israeli and Lloyd's insurance ecosystems." },
            { highlight: "Superpower", desc: "Opening doors and securing high-level partnerships." }
        ]
    },
    {
        name: "Roey Geffen",
        role: "COO",
        title: "The Operational Backbone",
        icon: <Briefcase className="text-green-400" size={32} />,
        details: [
            { highlight: "Execution", desc: "CEO of Geffen Basad & Board Member at Choco Insurance." },
            { highlight: "Systems Expert", desc: "Former CIO at PL Group and Logistics Director at Matrix (Israel’s leading IT integrator)." },
            { highlight: "Experience", desc: "Specialist in ERP implementation and complex business systems." },
            { highlight: "Superpower", desc: "Turning chaotic operations into structured workflows." }
        ]
    },
    {
        name: "Yoni Novick",
        role: "MD of Growth",
        title: "The Scaling Engine",
        icon: <User className="text-purple-400" size={32} />,
        details: [
            { highlight: "Global Ops", desc: "Decades in Fintech/Insurtech building Professional Services & Customer Success teams." },
            { highlight: "Builder", desc: "Built training divisions from scratch for a $3B Bank and scaled systems for 20k+ users." },
            { highlight: "Elite Background", desc: "Electronics Engineer + MBA (Highest Honors). Combat Engineering Officer & EMT." },
            { highlight: "Superpower", desc: "Building the \"Machine\" that allows us to onboard 40+ customers." }
        ]
    }
];

export function Team() {
    return (
        <section className="relative py-24 px-6 bg-slate-900/40 border-y border-slate-800">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl mb-4 text-white font-bold">The Team</h2>
                    <p className="text-xl text-slate-300">Deep Insurance DNA paired with Enterprise Tech Execution.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="bg-slate-900/60 backdrop-blur-md border border-slate-700 p-6 rounded-xl hover:border-blue-500/50 transition-colors">
                            <div className="mb-6 flex justify-center">
                                <div className="bg-slate-800 p-4 rounded-full border border-slate-600">
                                    {member.icon}
                                </div>
                            </div>
                            <div className="text-center mb-6">
                                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                                <div className="text-blue-400 font-medium mb-1">{member.role}</div>
                                <div className="text-sm text-slate-400 italic">{member.title}</div>
                            </div>

                            <div className="space-y-4">
                                {member.details.map((detail, i) => (
                                    <div key={i} className="text-sm">
                                        <span className="text-white font-semibold block mb-1">{detail.highlight}:</span>
                                        <span className="text-slate-400 leading-relaxed">{detail.desc}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
