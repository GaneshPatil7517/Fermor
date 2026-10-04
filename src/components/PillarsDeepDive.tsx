import React, { useState } from 'react';
import {
  PieChart,
  Zap,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Gauge
} from 'lucide-react';

interface PillarsDeepDiveProps {
  onOpenAccountModal: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const PillarsDeepDive: React.FC<PillarsDeepDiveProps> = ({
  onOpenAccountModal,
  onNavigateSection,
}) => {
  const [selectedPillar, setSelectedPillar] = useState<'understand' | 'act' | 'grow'>('understand');

  return (
    <section id="pillars" className="py-20 md:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800">
            <span>The Fermor Framework</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Understand. Act. Grow.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Most platforms only push transactions. Fermor provides a complete, structured operating system to turn income into enduring wealth.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="mt-10 flex justify-center">
          <div className="grid grid-cols-3 p-1.5 rounded-2xl bg-white border border-slate-200 max-w-xl w-full shadow-xs">
            <button
              onClick={() => setSelectedPillar('understand')}
              className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                selectedPillar === 'understand'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <PieChart className="w-4 h-4" />
              <span>1. Understand</span>
            </button>

            <button
              onClick={() => setSelectedPillar('act')}
              className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                selectedPillar === 'act'
                  ? 'bg-[#00B368] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Zap className="w-4 h-4" />
              <span>2. Act</span>
            </button>

            <button
              onClick={() => setSelectedPillar('grow')}
              className={`flex items-center justify-center gap-2 py-3 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                selectedPillar === 'grow'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              <span>3. Grow</span>
            </button>
          </div>
        </div>

        {/* Dynamic Pillar Card */}
        <div className="mt-10">
          {/* PILLAR 1: UNDERSTAND */}
          {selectedPillar === 'understand' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-200">
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Pillar 01 • Complete Financial Clarity
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
                  See all your assets, liabilities, and leakages in one clear lens.
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  You cannot compound what you do not understand. Fermor integrates across all your external broker accounts, mutual fund folios, and bank accounts into a single live net-worth radar.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm text-slate-700">
                      <strong className="text-slate-900">Multi-Broker Auto Sync:</strong> Connect accounts from Zerodha, Groww, Upstox, AngelOne, ICICI, and HDFC via CAS in 60 seconds.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm text-slate-700">
                      <strong className="text-slate-900">Hidden Commission Finder:</strong> Identify exactly where regular mutual fund distributors are siphoning off 1.5% of your annual gains.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm text-slate-700">
                      <strong className="text-slate-900">Stock Overlap Diagnostics:</strong> Prevent false diversification by uncovering duplicate equities held across multiple active mutual funds.
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onNavigateSection('diagnostic')}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
                  >
                    <span>Run a free portfolio overlap check</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 bg-white shadow-xl space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                        <Gauge className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">Live Account Aggregation</div>
                        <div className="text-[11px] text-slate-500">Auto-synced via Account Aggregator</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold font-mono">
                      Health Score: 94/100
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2.5">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-[11px] text-slate-500">Zerodha Kite</div>
                      <div className="font-mono-num font-bold text-sm text-slate-900 mt-1">₹18,40,000</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-[11px] text-slate-500">Groww MFs</div>
                      <div className="font-mono-num font-bold text-sm text-slate-900 mt-1">₹12,25,000</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-[11px] text-slate-500">HDFC Bank</div>
                      <div className="font-mono-num font-bold text-sm text-slate-900 mt-1">₹6,80,000</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-950">
                    <div className="font-bold text-amber-900">2 Regular Mutual Funds Detected</div>
                    <p className="mt-1 text-slate-700 leading-snug">
                      Switching your regular plans in Axis Bluechip & HDFC Midcap to Direct folios on Fermor will retain <strong className="text-slate-900 font-bold">₹16,400/year</strong> directly in your portfolio.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* PILLAR 2: ACT */}
          {selectedPillar === 'act' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-200">
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Pillar 02 • Execution Without Friction
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
                  Execute in milliseconds. Automate without manual effort.
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Fermor gives you zero brokerage on equity delivery, direct mutual funds with 0% distributor commission, and salary-linked automated SIPs.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm text-slate-700">
                      <strong className="text-slate-900">₹0 Brokerage on Equity Delivery:</strong> Buy and hold any NSE/BSE stock without paying commissions.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm text-slate-700">
                      <strong className="text-slate-900">Auto-Pilot Salary Day SIPs:</strong> Auto-debits on your salary day with automated annual percentage step-ups.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm text-slate-700">
                      <strong className="text-slate-900">Pro Derivatives Execution:</strong> Real-time Option Greeks, strategy builder, and flat ₹20 fee.
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onOpenAccountModal}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
                  >
                    <span>Open free trading & demat account</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 bg-white shadow-xl space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <span className="text-xs font-bold text-slate-900">Execution Matrix</span>
                    <span className="text-xs font-mono font-bold text-emerald-700">NSE / BSE Gateway</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-slate-900">Salary-Linked Auto SIP</div>
                      <div className="text-[11px] text-slate-500">Auto-debits on 1st of month with 10% annual step-up</div>
                    </div>
                    <span className="text-xs font-mono-num font-bold text-emerald-700">₹25,000/mo</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-slate-900">Equity Delivery (Tata Motors)</div>
                      <div className="text-[11px] text-slate-500">Direct CDSL demat allocation</div>
                    </div>
                    <span className="text-xs font-mono font-bold text-emerald-700">₹0 Brokerage</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-slate-900">F&O Options Strategy</div>
                      <div className="text-[11px] text-slate-500">Real-time Greeks & capped risk spread</div>
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-900">Flat ₹20</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* PILLAR 3: GROW */}
          {selectedPillar === 'grow' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-200">
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Pillar 03 • Systematic Compounding
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
                  Outperform market benchmarks with research-backed discipline.
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Long-term wealth requires smart asset allocation, periodic rebalancing, and tax efficiency. Fermor equips you with institutional research tools.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm text-slate-700">
                      <strong className="text-slate-900">Thematic Baskets:</strong> Curated stock portfolios engineered by SEBI registered research analysts.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm text-slate-700">
                      <strong className="text-slate-900">Tax-Loss Harvesting:</strong> Offset capital gains tax legally with automated rebalancing reminders.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm text-slate-700">
                      <strong className="text-slate-900">Clear Financial Teardowns:</strong> Plain-English company quarterly earnings briefings and valuation checks.
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onNavigateSection('baskets')}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
                  >
                    <span>Browse 4 SEBI Thematic Baskets</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 bg-white shadow-xl space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <span className="text-xs font-bold text-slate-900">Thematic Basket Showcase</span>
                    <span className="text-xs font-mono font-bold text-emerald-700">+34.8% 3-Yr CAGR</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <div className="font-bold text-sm text-slate-900">Clean Energy & EV Revolution</div>
                    <p className="text-xs text-slate-600">
                      8-stock basket capitalizing on solar generation, green hydrogen, and electric mobility.
                    </p>

                    <div className="grid grid-cols-4 gap-2 pt-2 text-center text-xs">
                      <div className="p-2 rounded-lg bg-white border border-slate-200">
                        <div className="text-[10px] text-slate-500">Tata Power</div>
                        <div className="font-mono-num font-bold text-slate-900 mt-0.5">22%</div>
                      </div>
                      <div className="p-2 rounded-lg bg-white border border-slate-200">
                        <div className="text-[10px] text-slate-500">Suzlon</div>
                        <div className="font-mono-num font-bold text-slate-900 mt-0.5">18%</div>
                      </div>
                      <div className="p-2 rounded-lg bg-white border border-slate-200">
                        <div className="text-[10px] text-slate-500">KPIT Tech</div>
                        <div className="font-mono-num font-bold text-slate-900 mt-0.5">16%</div>
                      </div>
                      <div className="p-2 rounded-lg bg-white border border-slate-200">
                        <div className="text-[10px] text-slate-500">Olectra</div>
                        <div className="font-mono-num font-bold text-slate-900 mt-0.5">14%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
