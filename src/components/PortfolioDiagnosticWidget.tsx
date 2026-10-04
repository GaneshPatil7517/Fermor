import React, { useState } from 'react';
import { SAMPLE_MUTUAL_FUNDS } from '../data/content';
import {
  PieChart,
  CheckCircle2,
  ArrowRight,
  Activity
} from 'lucide-react';

interface PortfolioDiagnosticWidgetProps {
  onOpenAccountModal: () => void;
}

export const PortfolioDiagnosticWidget: React.FC<PortfolioDiagnosticWidgetProps> = ({
  onOpenAccountModal,
}) => {
  const [selectedFundIds, setSelectedFundIds] = useState<string[]>(['mf-1', 'mf-2']);

  const toggleFund = (id: string) => {
    if (selectedFundIds.includes(id)) {
      if (selectedFundIds.length > 1) {
        setSelectedFundIds(selectedFundIds.filter((f) => f !== id));
      }
    } else {
      setSelectedFundIds([...selectedFundIds, id]);
    }
  };

  const selectedFunds = SAMPLE_MUTUAL_FUNDS.filter((f) => selectedFundIds.includes(f.id));

  const averageDirectExpense = +(
    selectedFunds.reduce((acc, f) => acc + f.expenseRatioDirect, 0) / selectedFunds.length
  ).toFixed(2);

  const averageRegularExpense = +(
    selectedFunds.reduce((acc, f) => acc + f.expenseRatioRegular, 0) / selectedFunds.length
  ).toFixed(2);

  const expenseSpread = +(averageRegularExpense - averageDirectExpense).toFixed(2);
  const overlapPercentage = selectedFundIds.length >= 3 ? 28.4 : selectedFundIds.length === 2 ? 18.2 : 0;

  return (
    <section id="diagnostic" className="py-20 md:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800">
            <PieChart className="w-3.5 h-3.5" />
            <span>Portfolio Diagnostic Tool</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Diagnose your mutual funds for overlaps & fee leaks.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Select sample funds below to see how duplicate stock holdings and regular plan distributor commissions secretly erode your returns.
          </p>
        </div>

        {/* Diagnostic Matrix */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Fund Selection Panel */}
          <div className="lg:col-span-5 p-6 rounded-3xl border border-slate-200 bg-white shadow-xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Select Funds to Compare
              </span>
              <span className="text-xs text-emerald-700 font-mono font-bold">
                {selectedFundIds.length} Selected
              </span>
            </div>

            <div className="space-y-2">
              {SAMPLE_MUTUAL_FUNDS.map((fund) => {
                const isChecked = selectedFundIds.includes(fund.id);
                return (
                  <div
                    key={fund.id}
                    onClick={() => toggleFund(fund.id)}
                    className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                      isChecked
                        ? 'bg-emerald-50/50 border-emerald-400 shadow-2xs'
                        : 'bg-white border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <div className="space-y-0.5 max-w-[80%]">
                      <div className="text-xs font-bold text-slate-900 leading-tight">{fund.name}</div>
                      <div className="flex items-center gap-2 text-[11px] text-slate-500">
                        <span>{fund.category}</span>
                        <span>•</span>
                        <span className="text-emerald-700 font-mono-num font-bold">
                          +{fund.cagr3Y}% (3Y)
                        </span>
                      </div>
                    </div>

                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center transition-colors ${
                        isChecked
                          ? 'bg-[#00B368] text-white'
                          : 'border border-slate-300 text-transparent'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="text-[11px] text-slate-500 leading-snug pt-1">
              On Fermor, you can sync your actual Consolidated Account Statement (CAS) in under 60 seconds.
            </p>
          </div>

          {/* Diagnostic Report Panel */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl border border-slate-200 bg-white shadow-xl space-y-5">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-emerald-700" />
                <h3 className="text-base font-bold text-slate-900">Consolidated Diagnostic Report</h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold font-mono">
                Stock Overlap: {overlapPercentage}%
              </span>
            </div>

            {/* Metric Comparison Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="text-xs text-slate-500 font-medium">Expense Ratio Drag</div>
                <div className="flex items-baseline justify-between">
                  <div>
                    <div className="text-xl font-black text-emerald-700 font-mono-num">
                      {averageDirectExpense}%
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium">Direct on Fermor</div>
                  </div>
                  <span className="text-xs text-slate-400 font-mono">vs</span>
                  <div className="text-right">
                    <div className="text-xl font-black text-rose-600 font-mono-num">
                      {averageRegularExpense}%
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium">Regular Bank Plan</div>
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-200 text-[11px] text-emerald-800 font-bold">
                  ✓ Saves {expenseSpread}% in annual distributor commissions
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="text-xs text-slate-500 font-medium">Top Overlapping Holdings</div>
                <div className="space-y-1 pt-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-700">HDFC Bank</span>
                    <span className="text-slate-900 font-mono-num font-bold">14.8% combined</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-700">ICICI Bank</span>
                    <span className="text-slate-900 font-mono-num font-bold">11.2% combined</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-700">ITC Ltd</span>
                    <span className="text-slate-900 font-mono-num font-bold">8.4% combined</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recommendation Alert */}
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-emerald-900">
                  Fermor Optimization Suggestion
                </div>
                <p className="text-[11px] text-slate-700 mt-1 leading-snug">
                  By switching regular mutual funds to Direct plans with 0% distributor commission, you add an estimated <strong className="text-slate-900 font-bold">+1.8% to +2.4%</strong> to your annual compounded returns.
                </p>
              </div>
            </div>

            {/* Action CTA */}
            <button
              onClick={onOpenAccountModal}
              className="w-full py-3.5 rounded-xl font-bold text-white bg-[#00B368] hover:bg-[#009A59] active:scale-98 transition-all flex items-center justify-center gap-2 text-xs shadow-sm"
            >
              <span>Scan Your Actual Portfolio for Free</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
