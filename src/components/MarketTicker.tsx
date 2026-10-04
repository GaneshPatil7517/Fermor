import React, { useState, useEffect } from 'react';
import { MARKET_INDICES, type IndexItem } from '../data/content';
import { TrendingUp, TrendingDown } from 'lucide-react';

export const MarketTicker: React.FC = () => {
  const [indices, setIndices] = useState<IndexItem[]>(MARKET_INDICES);

  // Micro-fluctuation simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setIndices((prev) =>
        prev.map((item) => {
          if (Math.random() > 0.4) return item;
          const delta = (Math.random() - 0.48) * (item.value * 0.0003);
          const newValue = +(item.value + delta).toFixed(2);
          const newChange = +(item.change + delta).toFixed(2);
          const newPercent = +((newChange / (newValue - newChange)) * 100).toFixed(2);
          return {
            ...item,
            value: newValue,
            change: newChange,
            changePercent: newPercent,
            isPositive: newChange >= 0,
          };
        })
      );
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-slate-50 border-y border-slate-200 overflow-hidden relative select-none py-2 text-xs">
      {/* Edge gradient fades */}
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

      {/* Ticker marquee */}
      <div className="flex animate-marquee items-center gap-8 whitespace-nowrap">
        {[...indices, ...indices].map((idx, i) => (
          <div
            key={`${idx.name}-${i}`}
            className="flex items-center gap-2 px-2.5 py-0.5 rounded hover:bg-slate-200/60 transition-colors duration-150 cursor-pointer"
          >
            <span className="font-semibold text-slate-700">
              {idx.name}
            </span>
            <span className="font-mono-num font-bold text-slate-900">
              ₹{idx.value.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
            <span
              className={`flex items-center gap-0.5 font-mono-num font-semibold text-[11px] px-1.5 py-0.2 rounded ${
                idx.isPositive
                  ? 'text-emerald-700 bg-emerald-100/70'
                  : 'text-rose-700 bg-rose-100/70'
              }`}
            >
              {idx.isPositive ? (
                <TrendingUp className="w-3 h-3" />
              ) : (
                <TrendingDown className="w-3 h-3" />
              )}
              {idx.isPositive ? '+' : ''}
              {idx.changePercent}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
