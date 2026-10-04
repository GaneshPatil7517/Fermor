import React, { useState, useEffect } from 'react';
import {
  Search,
  TrendingUp,
  Flame,
  Calculator,
  PieChart,
  ShieldCheck,
  ArrowRight,
  X
} from 'lucide-react';
import { POPULAR_STOCKS, THEMATIC_BASKETS } from '../data/content';

interface CommandBarModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateSection: (sectionId: string) => void;
  onOpenAccountModal: () => void;
}

export const CommandBarModal: React.FC<CommandBarModalProps> = ({
  isOpen,
  onClose,
  onNavigateSection,
  onOpenAccountModal,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const matchedStocks = POPULAR_STOCKS.filter(
    (s) =>
      s.symbol.toLowerCase().includes(query.toLowerCase()) ||
      s.name.toLowerCase().includes(query.toLowerCase())
  );

  const matchedBaskets = THEMATIC_BASKETS.filter(
    (b) =>
      b.title.toLowerCase().includes(query.toLowerCase()) ||
      b.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  const handleSelect = (action: () => void) => {
    action();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white border border-slate-200 rounded-3xl max-w-xl w-full shadow-2xl overflow-hidden text-slate-900">
        {/* Search Bar */}
        <div className="p-4 border-b border-slate-100 flex items-center gap-3 bg-slate-50">
          <Search className="w-5 h-5 text-emerald-700 shrink-0" />
          <input
            type="text"
            placeholder="Type a stock, mutual fund, quant basket, or tool..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="flex-1 bg-transparent border-none text-slate-900 placeholder-slate-400 text-sm focus:outline-none"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-slate-400 hover:text-slate-700">
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="px-2 py-0.5 rounded bg-white border border-slate-200 text-[10px] text-slate-500 font-mono shadow-2xs">
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div className="max-h-96 overflow-y-auto p-4 space-y-3 text-xs">
          {/* Quick Tools */}
          <div className="space-y-1">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2">
              Platform Tools
            </div>
            <button
              onClick={() => handleSelect(() => onNavigateSection('calculator'))}
              className="w-full p-2.5 rounded-xl hover:bg-slate-50 flex items-center justify-between transition-colors text-left group"
            >
              <div className="flex items-center gap-2.5">
                <Calculator className="w-4 h-4 text-emerald-700" />
                <span className="font-semibold text-slate-800 group-hover:text-slate-900">
                  SIP Wealth & Step-Up Engine
                </span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-700" />
            </button>

            <button
              onClick={() => handleSelect(() => onNavigateSection('diagnostic'))}
              className="w-full p-2.5 rounded-xl hover:bg-slate-50 flex items-center justify-between transition-colors text-left group"
            >
              <div className="flex items-center gap-2.5">
                <PieChart className="w-4 h-4 text-emerald-700" />
                <span className="font-semibold text-slate-800 group-hover:text-slate-900">
                  Mutual Fund Overlap & Fee Diagnostic
                </span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-700" />
            </button>

            <button
              onClick={() => handleSelect(() => onNavigateSection('pricing'))}
              className="w-full p-2.5 rounded-xl hover:bg-slate-50 flex items-center justify-between transition-colors text-left group"
            >
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span className="font-semibold text-slate-800 group-hover:text-slate-900">
                  ₹0 Brokerage & Pricing
                </span>
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-700" />
            </button>
          </div>

          {/* Stocks */}
          {matchedStocks.length > 0 && (
            <div className="space-y-1 pt-1">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2">
                Stocks (NSE / BSE)
              </div>
              {matchedStocks.map((stock) => (
                <button
                  key={stock.symbol}
                  onClick={() => handleSelect(onOpenAccountModal)}
                  className="w-full p-2.5 rounded-xl hover:bg-slate-50 flex items-center justify-between transition-colors text-left group"
                >
                  <div className="flex items-center gap-2.5">
                    <TrendingUp className="w-4 h-4 text-emerald-700" />
                    <div>
                      <div className="font-bold text-slate-900">
                        {stock.symbol}
                      </div>
                      <div className="text-[10px] text-slate-500">{stock.name}</div>
                    </div>
                  </div>
                  <div className="text-right font-mono">
                    <div className="font-bold text-slate-900">₹{stock.price}</div>
                    <div className="text-[10px] text-emerald-700 font-bold">+{stock.changePercent}%</div>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Thematic Baskets */}
          {matchedBaskets.length > 0 && (
            <div className="space-y-1 pt-1">
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2">
                Thematic Baskets
              </div>
              {matchedBaskets.map((b) => (
                <button
                  key={b.id}
                  onClick={() => handleSelect(() => onNavigateSection('baskets'))}
                  className="w-full p-2.5 rounded-xl hover:bg-slate-50 flex items-center justify-between transition-colors text-left group"
                >
                  <div className="flex items-center gap-2.5">
                    <Flame className="w-4 h-4 text-emerald-700" />
                    <div className="font-bold text-slate-900">{b.title}</div>
                  </div>
                  <span className="font-mono text-emerald-700 font-bold">+{b.cagr3Y}% (3Y)</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-50 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between px-4">
          <span>Search stocks, direct mutual funds & thematic baskets</span>
          <span className="font-bold text-emerald-700">FERMOR</span>
        </div>
      </div>
    </div>
  );
};
