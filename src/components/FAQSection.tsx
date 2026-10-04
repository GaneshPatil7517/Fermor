import React, { useState } from 'react';
import { FAQS } from '../data/content';
import {
  HelpCircle,
  ChevronDown,
  Search,
  Mail
} from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedId, setExpandedId] = useState<string | null>('faq-1');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const filteredFaqs = FAQS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 md:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Clear answers to common questions.
          </h2>
          <p className="text-slate-600 text-base">
            Everything you need to know about switching to Fermor, direct funds, and zero brokerage.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mt-8 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search questions (e.g. mutual funds, brokerage, security, demat)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-emerald-500 shadow-xs"
          />
        </div>

        {/* Filter Chips */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5">
          {[
            { id: 'all', label: 'All Questions' },
            { id: 'general', label: 'About Fermor' },
            { id: 'pricing', label: 'Pricing & Fees' },
            { id: 'investing', label: 'Direct Mutual Funds' },
            { id: 'security', label: 'Security & Demat' },
            { id: 'migration', label: 'Broker Migration' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-slate-900 text-white'
                  : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="mt-8 space-y-2.5">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-10 rounded-2xl bg-white border border-slate-200 text-slate-500 text-sm">
              No matching questions found. Try a different keyword or contact our support team.
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = expandedId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-2xs transition-all"
                >
                  <button
                    onClick={() => toggleExpand(faq.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-bold text-sm sm:text-base text-slate-900">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-emerald-700' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-150">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Support Callout */}
        <div className="mt-10 p-6 rounded-3xl border border-slate-200 bg-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
          <div>
            <div className="text-sm font-bold text-slate-900">Have a specific question?</div>
            <div className="text-xs text-slate-500 mt-0.5">
              Our Bengaluru advisory team responds in under 5 minutes.
            </div>
          </div>

          <a
            href="mailto:support@fermor.in"
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-800 transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5 text-emerald-700" />
            <span>Email Support</span>
          </a>
        </div>
      </div>
    </section>
  );
};
