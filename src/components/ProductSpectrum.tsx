import React, { useState } from 'react';
import {
  TrendingUp,
  PieChart,
  Zap,
  LineChart,
  Flame,
  ShieldCheck,
  Check,
  ChevronRight,
  Layers
} from 'lucide-react';

interface ProductSpectrumProps {
  onOpenAccountModal: () => void;
  onNavigateSection: (sectionId: string) => void;
}

interface ProductCard {
  id: string;
  category: string;
  title: string;
  description: string;
  badge: string;
  features: string[];
  stats: { label: string; value: string };
  icon: React.ReactNode;
  actionText: string;
  targetSection?: string;
}

export const ProductSpectrum: React.FC<ProductSpectrumProps> = ({
  onOpenAccountModal,
  onNavigateSection,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'equity' | 'wealth' | 'derivatives'>('all');

  const products: ProductCard[] = [
    {
      id: 'stocks',
      category: 'equity',
      title: 'Direct Stocks & ETFs',
      description: 'Invest in 5,000+ NSE & BSE equities with ₹0 brokerage delivery, advanced real-time charts, and institutional analyst target scores.',
      badge: '₹0 Brokerage Delivery',
      features: ['Zero account opening fees', 'Smart limit & GTT orders', 'Live market depth & tick data', 'Direct CDSL Demat credit'],
      stats: { label: 'Colocation Latency', value: '< 18ms' },
      icon: <TrendingUp className="w-5 h-5 text-emerald-700" />,
      actionText: 'Explore Stocks',
    },
    {
      id: 'mutual-funds',
      category: 'wealth',
      title: 'Direct Mutual Funds',
      description: 'Never pay distributor commission again. Access 2,500+ direct mutual fund schemes from 44 top AMCs and save up to 1.5% every single year.',
      badge: '0% Distributor Commission',
      features: ['Instant regular-to-direct switch', 'Automated portfolio rebalancing', 'Instant CAS auto-sync', 'Daily NAV tracking'],
      stats: { label: 'Commissions Saved', value: '1.4% / Yr' },
      icon: <PieChart className="w-5 h-5 text-emerald-700" />,
      actionText: 'Browse Direct Funds',
    },
    {
      id: 'smart-sip',
      category: 'wealth',
      title: 'Smart Auto-Pilot SIPs',
      description: 'Automate your compounding with salary-day auto-debits, annual percentage step-ups, and flexible zero-penalty pause/resume controls.',
      badge: 'Step-Up Enabled',
      features: ['UPI AutoPay 2.0 integration', 'Salary-linked date sync', '1-Click step-up modifier', 'Zero penalty on pause'],
      stats: { label: 'Automation Success', value: '99.98%' },
      icon: <Zap className="w-5 h-5 text-emerald-700" />,
      actionText: 'Calculate SIP Returns',
      targetSection: 'calculator',
    },
    {
      id: 'thematic-baskets',
      category: 'equity',
      title: 'Thematic Quant Baskets',
      description: 'Handcrafted baskets of high-momentum stocks built around structural themes like Clean Energy, Digital India, and Indigenous Defence.',
      badge: 'SEBI Research Backed',
      features: ['Curated by SEBI Analysts', 'Quarterly rebalancing alerts', '1-Click basket execution', 'Full stock transparency'],
      stats: { label: '3-Yr Top CAGR', value: '+34.8%' },
      icon: <Flame className="w-5 h-5 text-emerald-700" />,
      actionText: 'Explore 4 Baskets',
      targetSection: 'baskets',
    },
    {
      id: 'fno',
      category: 'derivatives',
      title: 'Futures & Options (F&O)',
      description: 'Engineered for serious derivatives traders. Sub-18ms execution, live Option Greeks, multi-leg strategy builder, and flat ₹20 fee.',
      badge: 'Flat ₹20 / Order',
      features: ['Real-time Option Chain & Greeks', 'Interactive Payoff visualizer', 'Instant bracket & cover orders', 'Risk stop-loss guards'],
      stats: { label: 'Brokerage Rate', value: 'Flat ₹20' },
      icon: <LineChart className="w-5 h-5 text-emerald-700" />,
      actionText: 'Open Pro Terminal',
    },
    {
      id: 'fixed-income',
      category: 'wealth',
      title: 'Fixed Income & Sovereign Gold',
      description: 'Balance your high-growth equity with Sovereign Gold Bonds (2.5% annual interest + tax-free gains), Treasury Bills, and AAA Corporate Bonds.',
      badge: 'Guaranteed Yields',
      features: ['Sovereign Gold Bonds (SGBs)', 'Zero tax on SGB redemption', 'AAA rated corporate debt', 'Direct RBI retail access'],
      stats: { label: 'Annual SGB Yield', value: '2.5% + Gold' },
      icon: <ShieldCheck className="w-5 h-5 text-emerald-700" />,
      actionText: 'Explore Fixed Yields',
    },
  ];

  const filteredProducts = activeFilter === 'all'
    ? products
    : products.filter((p) => p.category === activeFilter);

  return (
    <section id="products" className="py-20 md:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-200">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 font-bold">
              <Layers className="w-3.5 h-3.5" />
              <span>Investment Universe</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              One platform. Every investment instrument.
            </h2>
            <p className="text-slate-600 text-base">
              No need to shuffle between 4 different apps. Manage your entire portfolio on Fermor with unified risk oversight.
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center gap-1.5 bg-white p-1 rounded-2xl border border-slate-200 shrink-0 self-start md:self-auto shadow-2xs">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeFilter === 'all'
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Assets
            </button>
            <button
              onClick={() => setActiveFilter('equity')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeFilter === 'equity'
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Equity & Baskets
            </button>
            <button
              onClick={() => setActiveFilter('wealth')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeFilter === 'wealth'
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Direct MFs & SIPs
            </button>
            <button
              onClick={() => setActiveFilter('derivatives')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeFilter === 'derivatives'
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              F&O
            </button>
          </div>
        </div>

        {/* Bento Grid Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="p-6 sm:p-7 rounded-3xl border border-slate-200 bg-white hover:border-slate-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                    {prod.icon}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-bold text-slate-700 font-mono">
                    {prod.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                    {prod.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {prod.description}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  {prod.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-slate-500 uppercase font-semibold">
                    {prod.stats.label}
                  </div>
                  <div className="text-sm font-bold text-slate-900 font-mono-num">
                    {prod.stats.value}
                  </div>
                </div>

                <button
                  onClick={() => {
                    if (prod.targetSection) {
                      onNavigateSection(prod.targetSection);
                    } else {
                      onOpenAccountModal();
                    }
                  }}
                  className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-900 hover:text-white text-xs font-bold text-slate-800 transition-all flex items-center gap-1 group/btn"
                >
                  <span>{prod.actionText}</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
