"use client";

import React, { useState } from "react";
import { Check, X, ChevronDown, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// --- The Data Payload (Golden Artifact) ---
const COMPETITOR_DATA = {
    meta: {
        defaultSelection: "novidea",
        columns: {
            facio: "Facio MGA OS",
            pas: "Selected PAS",
            excel: "Excel / Manual",
        },
    },
    competitors: [
        { key: "excel", label: "Excel / Manual", type: "Status Quo" },
        { key: "generic_pas", label: "Generic PAS / Legacy", type: "Legacy" },
        { key: "novidea", label: "Novidea", type: "Salesforce-based" },
        { key: "cloud_insurance", label: "Cloud Insurance", type: "SaaS" },
        { key: "duck_creek", label: "Duck Creek", type: "Enterprise" },
        { key: "guidewire", label: "Guidewire", type: "Enterprise" },
        { key: "socotra", label: "Socotra", type: "Modern Core" },
        { key: "origami_risk", label: "Origami Risk", type: "Risk Platform" },
        { key: "britecore", label: "BriteCore", type: "US Mutuals" },
        { key: "salesforce_ipa", label: "Salesforce (Vlocity)", type: "CRM" },
        { key: "oracle_oipa", label: "Oracle OIPA", type: "Life/Enterprise" },
        { key: "vertafore", label: "Vertafore (AIM)", type: "Legacy MGA" },
    ],
    comparisonRows: [
        {
            id: "comm_model",
            group: "Commercials (The Investor View)",
            label: "Capital Expenditure (CapEx)",
            facio: "Zero CapEx. Implementation fees waived via monthly success retainer.",
            excel: "Low upfront, but scales linearly with headcount (hidden OPEX).",
            pasDefault: "High upfront. Setup fees often $50k–$250k+ before go-live.",
            overrides: {
                socotra: "Moderate setup fees, but requires developer resources (internal cost).",
                guidewire: "Extreme CapEx. Multi-million dollar licensing & implementation projects.",
                salesforce_ipa: "High CapEx. Requires expensive system integrator partners.",
                cloud_insurance: "Moderate setup fees, but typically charges per-module implementation.",
            },
        },
        {
            id: "time_value",
            group: "Commercials (The Investor View)",
            label: "Time to Revenue",
            facio: "Days/Weeks. Pre-configured 'Launch Kits' for Lloyd's & MGA schemes.",
            excel: "Immediate start, but slows down rapidly as volume hits.",
            pasDefault: "6–18 Months. Long discovery and customization phases.",
            overrides: {
                novidea: "Months. Dependent on Salesforce customization complexity.",
                origami_risk: "3–4 Months (via Direct Deploy), fast but template-limited.",
                duck_creek: "12+ Months. Enterprise transformation pace.",
                vertafore: "4–6 Months. Mature system but requires legacy configuration.",
            },
        },
        {
            id: "prod_build",
            group: "Build",
            label: "Product Builder",
            facio: "No-Code. Underwriters configure binders, rates, and wording independently.",
            excel: "Manual. Version control nightmares and copy-paste errors.",
            pasDefault: "Low-Code/Config. Requires IT/Vendor to finalize new schemes.",
            overrides: {
                salesforce_ipa: "Declarative (Flows), but requires Salesforce Admin certification.",
                socotra: "Configuration files (JSON). Fast, but requires developers.",
                oracle_oipa: "Rules Palette. Complex, requires specialized IT analysts.",
                guidewire: "Advanced Product Designer. Powerful but heavy IT dependency.",
            },
        },
        {
            id: "rating",
            group: "Build",
            label: "Rating Engine",
            facio: "Real-time. Supports complex matrices, modifiers, and multi-currency.",
            excel: "Formulas. High regression risk; hard to test at scale.",
            pasDefault: "Supported. often requires external plugin or hard-coding.",
            overrides: {
                britecore: "Python-based plugins. Flexible but requires coding knowledge.",
                origami_risk: "Excel-integrated. Good for simple rating, harder for complex logic.",
                cloud_insurance: "Time-slicing model. Good for adjustments, but generalist engine.",
            },
        },
        {
            id: "da_comp",
            group: "Control",
            "label": "Lloyd's/DA Compliance",
            facio: "Native. Automated Bordereaux (v5.2), PBQA audit trails, and sanctions.",
            excel: "Manual. Rework-heavy, inconsistent formatting, weak audit trail.",
            pasDefault: "Configurable. Requires custom build to meet Lloyd's standards.",
            overrides: {
                novidea: "Supported, but heavily dependent on initial Salesforce config.",
                vertafore: "Strong US Surplus Lines support; Lloyd's reporting often manual/external.",
                duck_creek: "Possible via config, but not a core 'out-of-the-box' feature.",
                socotra: "Build-your-own. You must build the reporting layer via API.",
            },
        },
        {
            id: "ops_portal",
            group: "Operate",
            label: "Portal & AI Support",
            facio: "Unified. Broker portal + AI support agent included in core license.",
            excel: "Email/PDF. Hard to standardize service or track submissions.",
            pasDefault: "Add-on. Portals are often separate modules or 3rd party apps.",
            overrides: {
                salesforce_ipa: "Strong (Experience Cloud), but sold/licensed separately.",
                guidewire: "Digital Portal is a separate, costly implementation.",
                britecore: "BriteQuote included, but focused on standard lines/agents.",
            },
        },
    ],
    dynamicSummary: {
        baseline: [
            "Zero CapEx vs. $50k–$250k upfront",
            "Native Lloyd's v5.2 reporting",
            "Launch new schemes in days, not months",
        ],
        strategies: {
            excel: [
                "Enables scalability in Sales & Ops that is impossible with spreadsheets.",
                "Prevents risk leakage from manual errors and processing delays.",
                "Provides robust, real-time pricing & analytics that Excel cannot match.",
            ],
            generic_pas: [
                "Facio replaces multi-million dollar legacy CAPEX with immediate MGA-fit utility.",
                "Eliminates the need for large in-house IT teams and heavy compliance maintenance.",
            ],
            novidea: [
                "Purpose-built for binders, not Salesforce customization",
                "No Salesforce storage costs or governor limits",
            ],
            guidewire: [
                "Facio offers 90% of the capability at 10% of the TCO.",
                "Designed for MGA agility, not Carrier stability/slowness.",
            ],
            duck_creek: [
                "Avoid the 12-month 'Transformation Project' trap.",
                "Facio includes Delegated Authority reporting out-of-the-box.",
            ],
            salesforce_ipa: [
                "Facio provides deep insurance accounting (splits/taxes) native.",
                "No need to hire expensive Salesforce Architects.",
            ],
            vertafore: [
                "Modern API-first architecture vs. Legacy server-based tech.",
                "Real-time data access vs. nightly batch processing.",
            ],
            socotra: [
                "Facio is a complete OS (GUI included) vs. a developer toolkit.",
                "We handle the Lloyd's compliance layer so you don't have to build it.",
            ],
            britecore: [
                "Facio is built for Global/London Market, not just US Mutuals.",
                "Native handling of complex binder/coverholder structures.",
            ],
            origami_risk: [
                "Dedicated Policy Admin core vs. Risk Management module.",
                "Superior handling of complex premium splits and commissions.",
            ],
            cloud_insurance: [
                "Specialized Delegated Authority features vs. Generalist SaaS.",
                "Deep audit trails specifically designed for Coverholders.",
            ],
            oracle_oipa: [
                "Built for P&C velocity, not Life Insurance complexity.",
                "Modern UX vs. Enterprise legacy interface.",
            ],
        },
    },
};

export function CommercialComparisonTable() {
    const [selectedCompetitorKey, setSelectedCompetitorKey] = useState<string>(
        COMPETITOR_DATA.meta.defaultSelection
    );
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const selectedCompetitor = COMPETITOR_DATA.competitors.find(
        (c) => c.key === selectedCompetitorKey
    ) || COMPETITOR_DATA.competitors[0];

    // UPDATED: Logic to handle Excel override explicitly
    const getCompetitorText = (row: typeof COMPETITOR_DATA.comparisonRows[0]) => {
        if (selectedCompetitorKey === 'excel') return row.excel;
        // @ts-ignore - dynamic key access
        const override = row.overrides ? row.overrides[selectedCompetitorKey] : null;
        return override || row.pasDefault;
    };

    const getDynamicStrategy = () => {
        // @ts-ignore - dynamic key access
        return COMPETITOR_DATA.dynamicSummary.strategies[selectedCompetitorKey] || [];
    };

    return (
        <div className="w-full max-w-6xl mx-auto space-y-8">
            {/* Header and Controls */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
                <h3 className="text-2xl font-bold text-white text-center md:text-left">
                    Competitive Landscape
                    <span className="block text-sm font-normal text-slate-400 mt-1">
                        Why we win against {selectedCompetitor.label}
                    </span>
                </h3>

                {/* Competitor Selector */}
                <div className="relative z-20 w-full md:w-72">
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full flex items-center justify-between bg-slate-800 border border-slate-700 hover:border-blue-500 rounded-lg px-4 py-3 text-white transition-all"
                    >
                        <div className="text-left">
                            <span className="text-xs text-slate-500 block uppercase tracking-wider">
                                Compare Against
                            </span>
                            <span className="font-semibold">{selectedCompetitor.label}</span>
                        </div>
                        <ChevronDown
                            className={`text-slate-400 transition-transform ${isDropdownOpen ? "rotate-180" : ""
                                }`}
                        />
                    </button>

                    {isDropdownOpen && (
                        <>
                            <div
                                className="fixed inset-0 z-10"
                                onClick={() => setIsDropdownOpen(false)}
                            />
                            <div className="absolute top-full mt-2 w-full bg-slate-900 border border-slate-700 rounded-lg shadow-xl max-h-80 overflow-y-auto z-20">
                                {COMPETITOR_DATA.competitors.map((comp) => (
                                    <button
                                        key={comp.key}
                                        onClick={() => {
                                            setSelectedCompetitorKey(comp.key);
                                            setIsDropdownOpen(false);
                                        }}
                                        className={`w-full text-left px-4 py-3 hover:bg-slate-800 border-b border-slate-800 last:border-0 ${selectedCompetitorKey === comp.key
                                            ? "bg-blue-500/10 text-blue-400"
                                            : "text-slate-300"
                                            }`}
                                    >
                                        <div className="font-medium">{comp.label}</div>
                                        <div className="text-xs text-slate-500">{comp.type}</div>
                                    </button>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>

            {/* The Comparison Table */}
            <div className="overflow-hidden bg-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl relative">
                <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-800/[0.1] -z-10" />

                {/* Table Header */}
                <div className="grid grid-cols-12 border-b border-slate-700 bg-slate-900/80 text-sm font-medium text-slate-400">
                    <div className="hidden md:block col-span-2 p-4">Feature</div>
                    <div className="col-span-12 md:col-span-5 p-4 text-blue-400 bg-blue-500/5 border-x border-blue-500/20 text-center relative">
                        <div className="absolute top-0 left-0 w-full h-1 bg-blue-500 animate-pulse" />
                        Facio MGA OS
                    </div>
                    {/* UPDATED: Wider column, removed third column */}
                    <div className="col-span-6 md:col-span-5 p-4 text-center">
                        {selectedCompetitor.label}
                    </div>
                </div>

                {/* Table Body */}
                <div className="divide-y divide-slate-800">
                    {COMPETITOR_DATA.comparisonRows.map((row) => {
                        const isCommercial = row.group === "Commercials (The Investor View)";
                        const isExcel = selectedCompetitorKey === 'excel';
                        // @ts-ignore
                        const compText = getCompetitorText(row);

                        return (
                            <motion.div
                                key={row.id + selectedCompetitorKey}
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className={`grid grid-cols-12 text-sm group ${isCommercial ? "bg-blue-500/5" : "hover:bg-slate-800/30"
                                    }`}
                            >
                                {/* Feature Label */}
                                <div className="hidden md:flex col-span-2 p-4 items-center text-slate-300 font-medium border-r border-transparent">
                                    <div>
                                        {row.label}
                                        {isCommercial && <span className="block text-[10px] text-blue-400 uppercase tracking-wider font-bold mt-1">Key Differentiator</span>}
                                    </div>
                                </div>

                                {/* Facio Column (Hero) */}
                                <div className="col-span-12 md:col-span-5 p-4 border-x border-blue-500/20 bg-blue-500/5 md:bg-transparent relative">
                                    {/* Mobile Label */}
                                    <div className="md:hidden text-xs text-blue-400 mb-1 uppercase tracking-wider font-bold">Facio MGA OS - {row.label}</div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="text-green-400 shrink-0 mt-0.5" size={16} />
                                        <span className="text-slate-100 font-medium">{row.facio}</span>
                                    </div>
                                </div>

                                {/* Competitor Column */}
                                <div className="col-span-12 md:col-span-5 p-4 text-slate-400">
                                    {/* Mobile Label */}
                                    <div className="md:hidden text-xs text-slate-500 mb-1 uppercase tracking-wider">{selectedCompetitor.label}</div>
                                    <div className="flex items-start gap-2">
                                        {isExcel ? (
                                            <X className="text-red-900/50 shrink-0 mt-0.5" size={16} />
                                        ) : (
                                            <span className="text-yellow-500/50 mr-1">⚠️</span>
                                        )}
                                        <span className="group-hover:text-slate-300 transition-colors">{compText}</span>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>

            {/* Dynamic Summary Card (The Closer) */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={selectedCompetitorKey}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-xl p-8 shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

                    <h4 className="text-xl font-bold text-white mb-6 relative z-10">
                        Why Facio Wins vs. <span className="text-blue-400">{selectedCompetitor.label}</span>
                    </h4>

                    <div className="grid md:grid-cols-2 gap-6 relative z-10">
                        <div className="space-y-4">
                            <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-2">Core Differentiators</p>
                            {COMPETITOR_DATA.dynamicSummary.baseline.map((point, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="bg-green-500/20 p-1 rounded-full mt-0.5">
                                        <Check className="text-green-400" size={14} />
                                    </div>
                                    <span className="text-slate-200 font-medium">{point}</span>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-4">
                            <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-2">Strategic Advantage</p>
                            {/* @ts-ignore */}
                            {getDynamicStrategy().map((point: string, i: number) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="bg-blue-500/20 p-1 rounded-full mt-0.5">
                                        <Check className="text-blue-400" size={14} />
                                    </div>
                                    <span className="text-white font-semibold">{point}</span>
                                </div>
                            ))}
                            {/* @ts-ignore */}
                            {getDynamicStrategy().length === 0 && (
                                <div className="text-slate-500 italic">No specific strategy notes for this legacy competitor. Standard baseline applies.</div>
                            )}
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
