import React from 'react';
import {
  Check,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

interface ComparisonMatrixProps {
  onOpenAccountModal: () => void;
}

export const ComparisonMatrix: React.FC<ComparisonMatrixProps> = ({
  onOpenAccountModal,
}) => {
  const comparisonRows = [
    {
      feature: 'Account Opening & Lifetime AMC',
      fermor: '₹0 (Free Forever)',
      legacyBanks: '₹500 - ₹1,000 / yr',
      discountBrokers: '₹200 - ₹300 / yr',
    },
    {
      feature: 'Equity Delivery Brokerage',
      fermor: '₹0 (100% Free)',
      legacyBanks: '0.35% - 0.55%',
      discountBrokers: '₹0 - ₹20',
    },
    {
      feature: 'Direct Mutual Funds (0% Commission)',
      fermor: 'Included (100% Direct)',
      legacyBanks: 'Regular Only (1.5% Fee)',
      discountBrokers: 'Direct (Basic)',
    },
    {
      feature: 'Unified Multi-Broker Net Worth Aggregator',
      fermor: 'Automatic (30+ Brokers)',
      legacyBanks: 'No (Siloed)',
      discountBrokers: 'Manual / Basic',
    },
    {
      feature: 'Quantitative Thematic Baskets (SEBI Curated)',
      fermor: 'Included Free',
      legacyBanks: 'Expensive Advisory',
      discountBrokers: 'Third-party addon fees',
    },
    {
      feature: 'Automated Tax-Loss Harvesting Engine',
      fermor: '1-Click Optimization',
      legacyBanks: 'No',
      discountBrokers: 'No',
    },
    {
      feature: 'F&O Order Execution Latency',
      fermor: '< 18ms Colocation',
      legacyBanks: '80 - 150ms',
      discountBrokers: '30 - 60ms',
    },
    {
      feature: 'AI Financial Copilot & Concall Insights',
      fermor: 'Integrated',
      legacyBanks: 'Lengthy PDFs only',
      discountBrokers: 'No AI insights',
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Zero Hidden Charges</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Institutional quality. Transparent pricing.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            No maintenance charges, no percentages on delivery, and zero distributor kickbacks.
          </p>
        </div>

        {/* 4 Cards */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-6 rounded-3xl border border-slate-200 bg-slate-50 text-center shadow-2xs">
            <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">
              Equity Delivery
            </div>
            <div className="text-4xl font-black text-slate-900 font-mono-num mt-2">
              ₹0
            </div>
            <p className="text-xs text-emerald-700 font-semibold mt-1">Zero brokerage forever</p>
          </div>

          <div className="p-6 rounded-3xl border border-slate-200 bg-slate-50 text-center shadow-2xs">
            <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">
              Direct Mutual Funds
            </div>
            <div className="text-4xl font-black text-slate-900 font-mono-num mt-2">
              0%
            </div>
            <p className="text-xs text-emerald-700 font-semibold mt-1">Distributor commissions</p>
          </div>

          <div className="p-6 rounded-3xl border border-slate-200 bg-slate-50 text-center shadow-2xs">
            <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">
              Account AMC
            </div>
            <div className="text-4xl font-black text-slate-900 font-mono-num mt-2">
              ₹0
            </div>
            <p className="text-xs text-emerald-700 font-semibold mt-1">Lifetime maintenance free</p>
          </div>

          <div className="p-6 rounded-3xl border border-slate-200 bg-slate-50 text-center shadow-2xs">
            <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">
              Intraday & F&O
            </div>
            <div className="text-4xl font-black text-slate-900 font-mono-num mt-2">
              ₹20
            </div>
            <p className="text-xs text-slate-600 font-medium mt-1">Flat per executed order</p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mt-12 rounded-3xl border border-slate-200 overflow-hidden shadow-xl bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="p-5 text-sm font-bold text-slate-700 w-2/5">Capability / Feature</th>
                  <th className="p-5 text-sm font-black text-slate-950 bg-emerald-50 text-center w-1/5 border-x border-emerald-200">
                    FERMOR
                  </th>
                  <th className="p-5 text-sm font-semibold text-slate-500 text-center w-1/5">
                    Traditional Banks
                  </th>
                  <th className="p-5 text-sm font-semibold text-slate-500 text-center w-1/5">
                    Discount Brokers
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-5 font-semibold text-slate-800">
                      {row.feature}
                    </td>
                    <td className="p-5 text-center font-bold text-emerald-800 bg-emerald-50/40 border-x border-emerald-200 font-mono">
                      <div className="flex items-center justify-center gap-1.5">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{row.fermor}</span>
                      </div>
                    </td>
                    <td className="p-5 text-center text-slate-500 font-mono">
                      {row.legacyBanks}
                    </td>
                    <td className="p-5 text-center text-slate-500 font-mono">
                      {row.discountBrokers}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                Zero account opening fees • Instant paperless digital KYC via DigiLocker
              </span>
            </div>

            <button
              onClick={onOpenAccountModal}
              className="px-6 py-2.5 rounded-xl font-bold text-white bg-[#00B368] hover:bg-[#009A59] active:scale-98 shadow-sm transition-all text-xs flex items-center gap-1.5"
            >
              <span>Switch to Fermor Today</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
