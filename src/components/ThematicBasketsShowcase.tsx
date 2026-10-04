import React, { useState } from 'react';
import { THEMATIC_BASKETS, type ThematicBasket } from '../data/content';
import {
  Flame,
  ArrowRight
} from 'lucide-react';

interface ThematicBasketsShowcaseProps {
  onOpenAccountModal?: () => void;
}

export const ThematicBasketsShowcase: React.FC<ThematicBasketsShowcaseProps> = () => {
  const [selectedBasket, setSelectedBasket] = useState<ThematicBasket>(THEMATIC_BASKETS[0]);
  const [investSuccess, setInvestSuccess] = useState<boolean>(false);

  const handleSelectBasket = (b: ThematicBasket) => {
    setSelectedBasket(b);
    setInvestSuccess(false);
  };

  const handleSimulateBasketInvest = () => {
    setInvestSuccess(true);
    setTimeout(() => setInvestSuccess(false), 3500);
  };

  return (
    <section id="baskets" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800">
            <Flame className="w-3.5 h-3.5" />
            <span>Quantitative Thematic Investing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Invest in big structural themes with{' '}
            <span className="text-[#00B368]">Thematic Baskets.</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Curated portfolios of high-momentum stocks and ETFs researched by SEBI registered analysts. Rebalanced periodically for optimal risk-adjusted alpha.
          </p>
        </div>

        {/* Baskets Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Basket list */}
          <div className="lg:col-span-6 space-y-3">
            {THEMATIC_BASKETS.map((basket) => {
              const isSelected = selectedBasket.id === basket.id;
              return (
                <div
                  key={basket.id}
                  onClick={() => handleSelectBasket(basket)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'border-emerald-500 bg-emerald-50/40 shadow-sm ring-1 ring-emerald-500/20'
                      : 'border-slate-200 bg-white hover:border-slate-300 shadow-2xs'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-base font-bold text-slate-900">{basket.title}</h4>
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded font-mono font-bold ${
                            basket.risk === 'Low'
                              ? 'bg-emerald-100 text-emerald-800'
                              : basket.risk === 'Moderate'
                              ? 'bg-sky-100 text-sky-800'
                              : 'bg-amber-100 text-amber-800'
                          }`}
                        >
                          {basket.risk} Risk
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">{basket.description}</p>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="text-[10px] text-slate-500 uppercase font-semibold">3-Yr CAGR</div>
                      <div className="text-lg font-extrabold text-emerald-700 font-mono-num">
                        +{basket.cagr3Y}%
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center gap-2">
                      <span className="font-mono-num text-slate-800 font-bold">
                        Min. ₹{basket.minInvestment.toLocaleString('en-IN')}
                      </span>
                      <span>•</span>
                      <span>{basket.stocksCount} Stocks</span>
                    </div>

                    <span className="text-emerald-700 font-bold flex items-center gap-1">
                      {isSelected ? 'Viewing Constituents' : 'Inspect Basket'}
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Deep dive inspector */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl border border-slate-200 bg-slate-900 text-white shadow-xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                  Basket Constituent Breakdown
                </div>
                <h3 className="text-xl font-bold text-white mt-0.5">{selectedBasket.title}</h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-xs font-bold">
                +{selectedBasket.cagr3Y}% 3Y CAGR
              </span>
            </div>

            {/* Holdings Weightage Breakdown */}
            <div className="space-y-3">
              <div className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center justify-between">
                <span>Top Constituent Weights</span>
                <span className="text-slate-400 font-mono">Rebalanced {selectedBasket.rebalanceFrequency}</span>
              </div>

              <div className="space-y-2">
                {selectedBasket.topHoldings.map((stock) => (
                  <div key={stock.name} className="p-3 rounded-xl bg-slate-800/90 border border-slate-700 space-y-1.5">
                    <div className="flex justify-between text-xs">
                      <span className="font-semibold text-white">{stock.name}</span>
                      <span className="font-mono-num font-bold text-emerald-400">{stock.weight}% Weight</span>
                    </div>
                    <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-[#00D084]"
                        style={{ width: `${stock.weight * 3.5}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Specs */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-800 border border-slate-700">
                <div className="text-slate-400">Rebalance Schedule</div>
                <div className="text-white font-bold font-mono mt-0.5">{selectedBasket.rebalanceFrequency}</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-800 border border-slate-700">
                <div className="text-slate-400">Brokerage & Management</div>
                <div className="text-emerald-400 font-bold font-mono mt-0.5">₹0 Fees (Zero Markup)</div>
              </div>
            </div>

            {/* 1-Click Order Action */}
            <div className="space-y-3 pt-1">
              <button
                onClick={handleSimulateBasketInvest}
                className="w-full py-3.5 rounded-xl font-bold text-slate-950 bg-[#00D084] hover:bg-[#00B873] active:scale-98 transition-all flex items-center justify-center gap-2 text-xs shadow-md"
              >
                <Flame className="w-4 h-4 fill-slate-950" />
                <span>Simulate 1-Click Basket Investment (₹{selectedBasket.minInvestment.toLocaleString('en-IN')})</span>
              </button>

              {investSuccess && (
                <div className="p-3 rounded-xl bg-emerald-950 border border-emerald-500/40 text-emerald-300 text-xs font-mono text-center animate-in fade-in">
                  ✓ Successfully placed multi-stock basket order for {selectedBasket.title}!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
