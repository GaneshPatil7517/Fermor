import React from 'react';
import { TESTIMONIALS } from '../data/content';
import { Star, CheckCircle2 } from 'lucide-react';

export const TestimonialsAndCommunity: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800">
            <Star className="w-3.5 h-3.5 fill-emerald-700 text-emerald-700" />
            <span>Trusted by 150,000+ Investors</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Built for those who take their wealth seriously.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            See how engineers, founders, active traders, and long-term investors use Fermor every day.
          </p>
        </div>

        {/* Rating Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <div className="px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="text-xs">
              <span className="font-extrabold text-slate-900 font-mono-num">4.9 / 5.0</span>
              <span className="text-slate-500 ml-1.5">(18,400+ iOS App Reviews)</span>
            </div>
          </div>

          <div className="px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="text-xs">
              <span className="font-extrabold text-slate-900 font-mono-num">4.8 / 5.0</span>
              <span className="text-slate-500 ml-1.5">(42,000+ Play Store Reviews)</span>
            </div>
          </div>
        </div>

        {/* Testimonials Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-3xl border border-slate-200 bg-white hover:border-slate-300 shadow-sm transition-all flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-bold font-mono">
                    {item.highlightTag}
                  </span>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5 font-bold text-sm text-slate-900">
                    <span>{item.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <div className="text-[11px] text-slate-500">{item.role}</div>
                  <div className="text-[10px] text-slate-400">{item.company}</div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-slate-400 font-medium block">Milestone</span>
                  <span className="text-xs font-bold text-emerald-700 font-mono-num">
                    {item.portfolioGrowth}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
