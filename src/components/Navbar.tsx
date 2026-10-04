import React, { useState, useEffect } from 'react';
import { FermorLogo } from './FermorLogo';
import {
  TrendingUp,
  PieChart,
  Zap,
  Layers,
  ShieldCheck,
  Search,
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  Calculator,
  LineChart,
  Flame
} from 'lucide-react';

interface NavbarProps {
  onOpenAccountModal: () => void;
  onOpenSearchModal: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAccountModal,
  onOpenSearchModal,
  onNavigateSection,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (sectionId: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    onNavigateSection(sectionId);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3'
            : 'bg-white border-b border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="focus:outline-none"
            >
              <FermorLogo size="md" darkText={true} />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('products')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  activeDropdown === 'products'
                    ? 'text-slate-900 bg-slate-100'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <span>Products</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 text-slate-400 ${
                    activeDropdown === 'products' ? 'rotate-180 text-emerald-600' : ''
                  }`}
                />
              </button>

              {/* Products Dropdown Menu */}
              {activeDropdown === 'products' && (
                <div className="absolute top-full left-0 w-[520px] -mt-1 pt-2 z-50 animate-in fade-in duration-150">
                  <div className="bg-white rounded-2xl p-4 shadow-xl border border-slate-200 grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleLinkClick('products')}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors text-left group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                          Stocks & Direct Equity
                        </div>
                        <div className="text-[11px] text-slate-500 leading-snug">
                          ₹0 brokerage on equity delivery.
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={() => handleLinkClick('products')}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors text-left group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                        <PieChart className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                          Direct Mutual Funds
                        </div>
                        <div className="text-[11px] text-slate-500 leading-snug">
                          0% distributor commission plans.
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={() => handleLinkClick('calculator')}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors text-left group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                        <Zap className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                          Smart Auto-SIPs
                        </div>
                        <div className="text-[11px] text-slate-500 leading-snug">
                          Salary-linked date sync & step-ups.
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={() => handleLinkClick('baskets')}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors text-left group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                        <Flame className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                          Thematic Baskets
                        </div>
                        <div className="text-[11px] text-slate-500 leading-snug">
                          SEBI analyst-curated portfolios.
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={() => handleLinkClick('products')}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors text-left group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                        <LineChart className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                          Futures & Options (F&O)
                        </div>
                        <div className="text-[11px] text-slate-500 leading-snug">
                          Flat ₹20/order pro terminal.
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={() => handleLinkClick('diagnostic')}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors text-left group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                        <Calculator className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                          Portfolio Diagnostic
                        </div>
                        <div className="text-[11px] text-slate-500 leading-snug">
                          Detect fund overlaps & fee drag.
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => handleLinkClick('pillars')}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
            >
              How It Works
            </button>

            <button
              onClick={() => handleLinkClick('calculator')}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
            >
              SIP Calculator
            </button>

            <button
              onClick={() => handleLinkClick('baskets')}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
            >
              Thematic Baskets
            </button>

            <button
              onClick={() => handleLinkClick('pricing')}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
            >
              Pricing
            </button>

            <button
              onClick={() => handleLinkClick('security')}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors"
            >
              Security
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            {/* Cmd+K Search Launcher */}
            <button
              onClick={onOpenSearchModal}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs text-slate-500 hover:text-slate-800 transition-colors"
              title="Search stocks, funds, tools (Ctrl+K)"
            >
              <Search className="w-3.5 h-3.5 text-slate-400" />
              <span>Search assets...</span>
              <kbd className="hidden md:inline-block px-1.5 py-0.5 rounded bg-white border border-slate-200 font-mono text-[10px] text-slate-500 shadow-2xs">
                ⌘K
              </kbd>
            </button>

            {/* Sign in */}
            <button
              onClick={onOpenAccountModal}
              className="hidden sm:block px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-slate-950 transition-colors"
            >
              Log in
            </button>

            {/* Primary Action Button */}
            <button
              onClick={onOpenAccountModal}
              className="px-4 py-2 rounded-xl text-sm font-bold text-white bg-[#00B368] hover:bg-[#009A59] active:scale-98 shadow-sm transition-all duration-150 flex items-center gap-1.5"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-slate-700" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] bg-white z-30 md:hidden p-6 overflow-y-auto border-b border-slate-200 shadow-xl animate-in fade-in duration-150">
          <div className="space-y-4">
            <button
              onClick={onOpenSearchModal}
              className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-600"
            >
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-emerald-600" />
                <span>Search stocks, mutual funds, calculators...</span>
              </div>
              <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded text-xs text-slate-500">⌘K</kbd>
            </button>

            <div className="border-t border-slate-100 pt-3 space-y-1">
              <button
                onClick={() => handleLinkClick('products')}
                className="w-full flex items-center gap-3 p-3 rounded-xl text-slate-700 hover:bg-slate-50 text-left font-semibold"
              >
                <TrendingUp className="w-5 h-5 text-emerald-600" />
                Stocks & Mutual Funds
              </button>
              <button
                onClick={() => handleLinkClick('pillars')}
                className="w-full flex items-center gap-3 p-3 rounded-xl text-slate-700 hover:bg-slate-50 text-left font-semibold"
              >
                <Layers className="w-5 h-5 text-emerald-600" />
                Understand • Act • Grow
              </button>
              <button
                onClick={() => handleLinkClick('calculator')}
                className="w-full flex items-center gap-3 p-3 rounded-xl text-slate-700 hover:bg-slate-50 text-left font-semibold"
              >
                <Calculator className="w-5 h-5 text-emerald-600" />
                SIP Compounding Engine
              </button>
              <button
                onClick={() => handleLinkClick('baskets')}
                className="w-full flex items-center gap-3 p-3 rounded-xl text-slate-700 hover:bg-slate-50 text-left font-semibold"
              >
                <Flame className="w-5 h-5 text-emerald-600" />
                Thematic Quant Baskets
              </button>
              <button
                onClick={() => handleLinkClick('pricing')}
                className="w-full flex items-center gap-3 p-3 rounded-xl text-slate-700 hover:bg-slate-50 text-left font-semibold"
              >
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                Pricing & Transparency
              </button>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAccountModal();
                }}
                className="w-full py-3 rounded-xl font-bold bg-[#00B368] text-white text-center shadow-xs"
              >
                Open Free Account (3 Mins)
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAccountModal();
                }}
                className="w-full py-3 rounded-xl font-semibold bg-slate-100 text-slate-800 text-center"
              >
                Log In
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
