import React, { useState } from 'react';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  PieChart,
  Zap,
  TrendingUp,
  RefreshCw,
  Sliders,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { POPULAR_STOCKS } from '../data/content';

interface HeroSectionProps {
  onOpenAccountModal: () => void;
  onNavigateSection: (sectionId: string) => void;
}

type HeroTab = 'understand' | 'act' | 'grow';

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenAccountModal,
  onNavigateSection,
}) => {
  const [activeTab, setActiveTab] = useState<HeroTab>('understand');
  const [selectedStock, setSelectedStock] = useState(POPULAR_STOCKS[0]);
  const [orderQuantity, setOrderQuantity] = useState(25);
  const [orderType, setOrderType] = useState<'BUY' | 'SIP'>('BUY');
  const [executionMessage, setExecutionMessage] = useState<string | null>(null);
  const [isExecuting, setIsExecuting] = useState(false);
  const [growthHorizon, setGrowthHorizon] = useState<'3Y' | '5Y' | '10Y'>('5Y');
  const [isRebalanced, setIsRebalanced] = useState(false);

  const handleSimulateOrder = () => {
    setIsExecuting(true);
    setExecutionMessage(null);
    setTimeout(() => {
      setIsExecuting(false);
      const totalCost = (selectedStock.price * orderQuantity).toLocaleString('en-IN', {
        maximumFractionDigits: 2,
      });
      setExecutionMessage(
        `✓ ${orderType === 'BUY' ? 'Direct Buy Executed' : 'Smart SIP Activated'}: ${orderQuantity}x ${selectedStock.symbol} at ₹${selectedStock.price} (Total: ₹${totalCost}) • ₹0 Brokerage Fee`
      );
    }, 400);
  };

  const handleSimulateRebalance = () => {
    setIsRebalanced(true);
    setTimeout(() => setIsRebalanced(false), 3500);
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-white overflow-hidden border-b border-slate-100">
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 bg-grid-subtle pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Product Category Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100/90 border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs">
            <span>Stocks</span>
            <span className="text-slate-400">•</span>
            <span>Mutual Funds</span>
            <span className="text-slate-400">•</span>
            <span>SIPs</span>
            <span className="text-slate-400">•</span>
            <span>F&O</span>
            <span className="text-slate-400">•</span>
            <span>Research</span>
            <span className="text-slate-400">•</span>
            <span className="text-emerald-700 font-bold">Portfolio</span>
          </div>
        </div>

        {/* Hero Title & Core Copy */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.08]">
            All your finances{' '}
            <span className="text-[#00B368]">
              made simple.
            </span>
          </h1>

          {/* Tagline: Understand. Act. Grow. */}
          <div className="flex items-center justify-center gap-3 sm:gap-6 text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-slate-800">
            <span>Understand.</span>
            <span className="text-[#00B368]">Act.</span>
            <span>Grow.</span>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed pt-1">
            Begin your financial momentum. We believe better financial outcomes should be simpler to achieve and easier to sustain over time.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
            <button
              onClick={onOpenAccountModal}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-base font-bold text-white bg-[#00B368] hover:bg-[#009A59] active:scale-98 shadow-md hover:shadow-lg transition-all duration-150 flex items-center justify-center gap-2 group"
            >
              <span>Open Free Account</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={() => onNavigateSection('calculator')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 transition-all duration-150 flex items-center justify-center gap-2"
            >
              <Sliders className="w-4 h-4 text-emerald-600" />
              <span>Calculate SIP Wealth</span>
            </button>
          </div>

          {/* Trust Highlights */}
          <div className="pt-5 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              ₹0 AMC & Account Opening
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              100% Direct Mutual Funds
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              SEBI Registered Intermediary
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Direct CDSL Demat Custody
            </span>
          </div>
        </div>

        {/* Photorealistic Financial Command Center Mockup */}
        <div className="mt-12 md:mt-16 max-w-5xl mx-auto">
          <div className="card-subtle rounded-3xl p-4 sm:p-6 md:p-8 border border-slate-200 bg-white shadow-xl relative">
            
            {/* Header / Tabs Controller */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-200" />
                <div className="w-3 h-3 rounded-full bg-slate-200" />
                <div className="w-3 h-3 rounded-full bg-slate-200" />
                <span className="text-xs font-semibold text-slate-700 ml-2">
                  Fermor Unified Portfolio OS
                </span>
              </div>

              {/* Understand • Act • Grow Tab Switcher */}
              <div className="flex items-center bg-slate-100 p-1 rounded-xl w-full sm:w-auto">
                <button
                  onClick={() => setActiveTab('understand')}
                  className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                    activeTab === 'understand'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <PieChart className="w-3.5 h-3.5 text-emerald-600" />
                  <span>1. Understand</span>
                </button>

                <button
                  onClick={() => setActiveTab('act')}
                  className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                    activeTab === 'act'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Zap className="w-3.5 h-3.5 text-emerald-600" />
                  <span>2. Act</span>
                </button>

                <button
                  onClick={() => setActiveTab('grow')}
                  className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                    activeTab === 'grow'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                  <span>3. Grow</span>
                </button>
              </div>
            </div>

            {/* TAB CONTENT 1: UNDERSTAND */}
            {activeTab === 'understand' && (
              <div className="mt-6 space-y-6 animate-in fade-in duration-200">
                {/* Net Worth Card & Health */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 col-span-1 md:col-span-2">
                    <div className="text-xs text-slate-500 font-semibold flex items-center justify-between">
                      <span>Consolidated Net Worth (4 Accounts)</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[11px] font-mono-num font-bold">
                        ▲ +22.4% YTD
                      </span>
                    </div>
                    <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono-num mt-2">
                      ₹48,65,240<span className="text-slate-400 text-lg font-normal">.00</span>
                    </div>
                    <div className="text-xs text-slate-500 mt-2 flex items-center gap-2">
                      <span className="text-emerald-700 font-bold font-mono-num">+₹8,92,400</span>
                      <span>total unrealized profit</span>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="text-xs text-slate-500 font-semibold">Portfolio Health Score</div>
                    <div className="flex items-baseline gap-2 mt-2">
                      <span className="text-3xl font-extrabold text-emerald-700 font-mono-num">94</span>
                      <span className="text-slate-400 text-sm">/ 100</span>
                    </div>
                    <div className="w-full bg-slate-200 h-2 rounded-full mt-3 overflow-hidden">
                      <div className="bg-[#00B368] h-full rounded-full w-[94%]" />
                    </div>
                    <div className="text-[11px] text-slate-600 mt-2 font-medium">
                      ✓ Zero regular fund commission drag
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                    <div className="text-xs text-slate-500 font-semibold">Connected Sources</div>
                    <div className="flex items-center gap-1.5 mt-3">
                      <span className="px-2 py-1 rounded bg-white text-[11px] text-slate-700 font-medium border border-slate-200">Zerodha</span>
                      <span className="px-2 py-1 rounded bg-white text-[11px] text-slate-700 font-medium border border-slate-200">Groww</span>
                      <span className="px-2 py-1 rounded bg-white text-[11px] text-slate-700 font-medium border border-slate-200">HDFC</span>
                    </div>
                    <div className="text-[11px] text-slate-500 mt-2 flex items-center gap-1">
                      <RefreshCw className="w-3 h-3 text-emerald-600" />
                      <span>Synced via Account Aggregator</span>
                    </div>
                  </div>
                </div>

                {/* Asset Allocation Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-5 rounded-2xl bg-white border border-slate-200 md:col-span-2 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-slate-900">Asset Allocation Architecture</span>
                      <span className="text-xs text-slate-500 font-medium">Auto-rebalanced</span>
                    </div>

                    {/* Clean segmented bar */}
                    <div className="h-3.5 w-full rounded-full overflow-hidden flex bg-slate-100">
                      <div className="bg-[#00B368] h-full" style={{ width: '62%' }} title="Direct Equity (62%)" />
                      <div className="bg-sky-500 h-full" style={{ width: '22%' }} title="Direct MFs (22%)" />
                      <div className="bg-amber-500 h-full" style={{ width: '11%' }} title="Gold & Debt (11%)" />
                      <div className="bg-slate-400 h-full" style={{ width: '5%' }} title="Cash (5%)" />
                    </div>

                    {/* Breakdown cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs pt-1">
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                        <div className="flex items-center gap-1.5 text-slate-600 font-medium">
                          <span className="w-2 h-2 rounded-full bg-[#00B368]" />
                          Direct Equity
                        </div>
                        <div className="text-sm font-bold text-slate-900 font-mono-num mt-1">₹30.16L</div>
                        <div className="text-[11px] text-emerald-700 font-mono-num font-semibold">62% • +24.8%</div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                        <div className="flex items-center gap-1.5 text-slate-600 font-medium">
                          <span className="w-2 h-2 rounded-full bg-sky-500" />
                          Direct MFs
                        </div>
                        <div className="text-sm font-bold text-slate-900 font-mono-num mt-1">₹10.70L</div>
                        <div className="text-[11px] text-sky-700 font-mono-num font-semibold">22% • +19.2%</div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                        <div className="flex items-center gap-1.5 text-slate-600 font-medium">
                          <span className="w-2 h-2 rounded-full bg-amber-500" />
                          Gold & SGBs
                        </div>
                        <div className="text-sm font-bold text-slate-900 font-mono-num mt-1">₹5.35L</div>
                        <div className="text-[11px] text-amber-700 font-mono-num font-semibold">11% • +13.5%</div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                        <div className="flex items-center gap-1.5 text-slate-600 font-medium">
                          <span className="w-2 h-2 rounded-full bg-slate-400" />
                          Liquid Cash
                        </div>
                        <div className="text-sm font-bold text-slate-900 font-mono-num mt-1">₹2.43L</div>
                        <div className="text-[11px] text-slate-600 font-mono-num font-semibold">5% • 6.8% Yield</div>
                      </div>
                    </div>
                  </div>

                  {/* Understand Insight Card */}
                  <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 uppercase tracking-wider">
                        <Sparkles className="w-4 h-4" />
                        <span>Fermor Fee Diagnostic</span>
                      </div>
                      <p className="text-xs text-slate-700 mt-2 leading-relaxed">
                        "Your portfolio has healthy sector diversification. By switching 2 regular mutual fund folios to Direct plans on Fermor, you will save <strong className="text-emerald-900 font-bold">₹42,800/yr</strong> in distributor commissions."
                      </p>
                    </div>
                    <button
                      onClick={() => setActiveTab('act')}
                      className="mt-4 w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
                    >
                      <span>Take Action on Fermor</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT 2: ACT */}
            {activeTab === 'act' && (
              <div className="mt-6 space-y-6 animate-in fade-in duration-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Stock Selector */}
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Select Equity / Fund
                    </label>
                    <div className="space-y-2">
                      {POPULAR_STOCKS.slice(0, 3).map((stock) => (
                        <button
                          key={stock.symbol}
                          onClick={() => setSelectedStock(stock)}
                          className={`w-full p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                            selectedStock.symbol === stock.symbol
                              ? 'bg-emerald-50/80 border-emerald-400 shadow-2xs'
                              : 'bg-white border-slate-200 hover:bg-slate-50'
                          }`}
                        >
                          <div>
                            <div className="font-bold text-xs text-slate-900">{stock.symbol}</div>
                            <div className="text-[11px] text-slate-500">{stock.name}</div>
                          </div>
                          <div className="text-right">
                            <div className="font-mono-num font-bold text-xs text-slate-900">
                              ₹{stock.price}
                            </div>
                            <div className="text-[10px] font-mono-num font-semibold text-emerald-700">
                              +{stock.changePercent}%
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Interactive Order Module */}
                  <div className="p-5 rounded-2xl bg-white border border-slate-200 md:col-span-2 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-slate-900">Order Execution & SIPs</span>
                        <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold">
                          Zero Brokerage
                        </span>
                      </div>
                      <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
                        <button
                          onClick={() => setOrderType('BUY')}
                          className={`px-3 py-1 rounded text-xs font-bold transition-colors ${
                            orderType === 'BUY'
                              ? 'bg-white text-slate-900 shadow-2xs'
                              : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          Direct Buy
                        </button>
                        <button
                          onClick={() => setOrderType('SIP')}
                          className={`px-3 py-1 rounded text-xs font-bold transition-colors ${
                            orderType === 'SIP'
                              ? 'bg-white text-slate-900 shadow-2xs'
                              : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          Auto-SIP
                        </button>
                      </div>
                    </div>

                    {/* Quantity slider */}
                    <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-600 font-medium">Quantity (Shares / Units)</span>
                        <span className="text-slate-900 font-mono-num font-bold text-sm">
                          {orderQuantity} Shares
                        </span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="100"
                        value={orderQuantity}
                        onChange={(e) => setOrderQuantity(Number(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#00B368]"
                      />
                    </div>

                    {/* Cost summary */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                        <div className="text-slate-500">Order Value</div>
                        <div className="font-mono-num font-bold text-sm text-slate-900 mt-1">
                          ₹{(selectedStock.price * orderQuantity).toLocaleString('en-IN', {
                            maximumFractionDigits: 2,
                          })}
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                        <div className="text-slate-500">Fermor Brokerage</div>
                        <div className="font-mono-num font-bold text-sm text-emerald-700 mt-1">
                          ₹0.00 (100% Free)
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 col-span-2 sm:col-span-1">
                        <div className="text-slate-500">Depository</div>
                        <div className="font-mono-num font-bold text-sm text-slate-800 mt-1">
                          CDSL Demat
                        </div>
                      </div>
                    </div>

                    {/* Submit Order Action */}
                    <button
                      onClick={handleSimulateOrder}
                      disabled={isExecuting}
                      className="w-full py-3.5 rounded-xl font-bold text-white bg-[#00B368] hover:bg-[#009A59] active:scale-98 shadow-xs transition-all flex items-center justify-center gap-2 text-xs"
                    >
                      {isExecuting ? (
                        <span>Executing Order on NSE/BSE...</span>
                      ) : (
                        <span>
                          {orderType === 'BUY'
                            ? `Execute Direct Buy: ₹${(
                                selectedStock.price * orderQuantity
                              ).toLocaleString('en-IN')}`
                            : 'Set Up Monthly Salary-Day SIP'}
                        </span>
                      )}
                    </button>

                    {executionMessage && (
                      <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-medium animate-in fade-in">
                        {executionMessage}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT 3: GROW */}
            {activeTab === 'grow' && (
              <div className="mt-6 space-y-6 animate-in fade-in duration-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Graph */}
                  <div className="p-5 rounded-2xl bg-white border border-slate-200 md:col-span-2 space-y-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                      <div>
                        <div className="text-sm font-bold text-slate-900">
                          Quantitative Thematic Basket Performance
                        </div>
                        <div className="text-xs text-slate-500">
                          SEBI registered research models vs Nifty 50
                        </div>
                      </div>
                      <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
                        {(['3Y', '5Y', '10Y'] as const).map((hz) => (
                          <button
                            key={hz}
                            onClick={() => setGrowthHorizon(hz)}
                            className={`px-2.5 py-1 rounded text-xs font-bold transition-colors ${
                              growthHorizon === hz
                                ? 'bg-white text-slate-900 shadow-2xs'
                                : 'text-slate-600 hover:text-slate-900'
                            }`}
                          >
                            {hz}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* SVG Chart */}
                    <div className="relative h-44 w-full pt-2">
                      <svg viewBox="0 0 500 150" className="w-full h-full overflow-visible">
                        <line x1="0" y1="30" x2="500" y2="30" stroke="#F1F5F9" strokeDasharray="4 4" />
                        <line x1="0" y1="80" x2="500" y2="80" stroke="#F1F5F9" strokeDasharray="4 4" />
                        <line x1="0" y1="130" x2="500" y2="130" stroke="#F1F5F9" strokeDasharray="4 4" />

                        {/* Nifty 50 */}
                        <path
                          d="M 10 130 Q 120 110, 250 85 T 490 55"
                          fill="none"
                          stroke="#94A3B8"
                          strokeWidth="2"
                          strokeDasharray="4 4"
                        />

                        {/* Fermor Quant Model */}
                        <path
                          d="M 10 130 Q 120 85, 250 45 T 490 12"
                          fill="none"
                          stroke="#00B368"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                        />
                        <circle cx="490" cy="12" r="5" fill="#00B368" />
                      </svg>
                    </div>

                    <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-100 text-slate-600">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1.5 font-medium text-slate-800">
                          <span className="w-3 h-1 bg-[#00B368] rounded-full" />
                          Fermor Thematic Basket (+31.4% CAGR)
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="w-3 h-1 bg-slate-400 rounded-full" />
                          Nifty 50 (+14.2% CAGR)
                        </span>
                      </div>
                      <span className="text-emerald-700 font-bold">+17.2% Alpha</span>
                    </div>
                  </div>

                  {/* Rebalance action */}
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Automated Rebalancing
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 mt-1">
                        Tax-Loss Harvesting & Weight Drift Optimization
                      </h4>
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                        Fermor calculates portfolio drift and offsets capital gains tax automatically.
                      </p>

                      <div className="mt-4 p-3 rounded-xl bg-white border border-slate-200 text-xs space-y-1">
                        <div className="flex justify-between text-slate-600">
                          <span>Harvestable Tax Loss:</span>
                          <span className="font-bold text-slate-900 font-mono-num">₹28,400</span>
                        </div>
                        <div className="flex justify-between text-slate-600">
                          <span>Tax Saved:</span>
                          <span className="font-bold text-emerald-700 font-mono-num">₹5,680</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <button
                        onClick={handleSimulateRebalance}
                        className="w-full py-3 rounded-xl font-bold bg-slate-900 hover:bg-slate-800 text-white transition-all text-xs flex items-center justify-center gap-2"
                      >
                        <RefreshCw className={`w-3.5 h-3.5 ${isRebalanced ? 'animate-spin' : ''}`} />
                        <span>{isRebalanced ? 'Optimizing Weights...' : 'Run 1-Click Rebalance'}</span>
                      </button>

                      {isRebalanced && (
                        <div className="mt-2 p-2 rounded-lg bg-emerald-100 text-emerald-900 text-[11px] font-medium text-center">
                          ✓ Portfolio rebalanced & ₹5,680 tax saved!
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Footer inside Command Center */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Securities held directly in your personal CDSL Demat Account</span>
              </div>
              <button
                onClick={onOpenAccountModal}
                className="text-emerald-700 hover:text-emerald-800 font-bold flex items-center gap-1"
              >
                <span>Open free trading & demat account</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Corporate Metrics Bar */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 text-center sm:text-left shadow-2xs">
            <div className="text-xs text-slate-500 font-medium">Assets Monitored</div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono-num mt-1">
              ₹4,200+ Cr
            </div>
            <div className="text-[11px] text-emerald-700 font-semibold mt-1">
              Across stocks, MFs & debt
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 text-center sm:text-left shadow-2xs">
            <div className="text-xs text-slate-500 font-medium">Active Investors</div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono-num mt-1">
              150,000+
            </div>
            <div className="text-[11px] text-slate-500 mt-1">
              Pan-India & NRI investors
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 text-center sm:text-left shadow-2xs">
            <div className="text-xs text-slate-500 font-medium">Commissions Saved</div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-700 font-mono-num mt-1">
              ₹18.6+ Cr
            </div>
            <div className="text-[11px] text-slate-500 mt-1">
              Via Direct 0% Mutual Funds
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 text-center sm:text-left shadow-2xs">
            <div className="text-xs text-slate-500 font-medium">Brokerage on Delivery</div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono-num mt-1">
              ₹0.00
            </div>
            <div className="text-[11px] text-emerald-700 font-semibold mt-1">
              Lifetime Free Forever
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
