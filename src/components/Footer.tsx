import React from 'react';
import { FermorLogo } from './FermorLogo';
import {
  MapPin,
  Mail,
  ArrowUp
} from 'lucide-react';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenAccountModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateSection,
  onOpenAccountModal,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 pt-16 pb-12 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800 items-start">
          <div className="lg:col-span-5 space-y-4">
            <FermorLogo size="lg" darkText={false} />
            <p className="text-slate-300 text-sm max-w-sm leading-relaxed mt-2">
              Building a better way for people to <strong className="text-white">understand, act, and grow financially</strong>. We believe better financial outcomes should be simpler to achieve and easier to sustain over time.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                All Systems Operational
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400 font-mono">SEBI Registered</span>
            </div>
          </div>

          {/* Right Newsletter */}
          <div className="lg:col-span-7 lg:pl-12 space-y-3">
            <div className="text-sm font-bold text-white">
              The Fermor Weekly Briefing
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              Join 65,000+ investors who receive our Sunday morning breakdown on Indian markets, thematic sector deep-dives, and wealth compounding frameworks.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md pt-1">
              <input
                type="email"
                placeholder="Enter your email..."
                className="flex-1 px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-[#00B368]"
              />
              <button
                onClick={onOpenAccountModal}
                className="px-5 py-3 rounded-xl bg-[#00B368] hover:bg-[#009A59] text-white font-bold text-xs transition-colors shrink-0 shadow-sm"
              >
                Subscribe Free
              </button>
            </div>
          </div>
        </div>

        {/* Middle Navigation Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">Products</div>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  onClick={() => onNavigateSection('products')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Direct Stocks & ETFs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('products')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Direct Mutual Funds (0% Comm.)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('calculator')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Smart Auto-Pilot SIPs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('baskets')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Thematic Quant Baskets
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('products')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Futures & Options (F&O)
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">Tools & Calculators</div>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  onClick={() => onNavigateSection('calculator')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  SIP Wealth & Step-Up Engine
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('diagnostic')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Mutual Fund Overlap X-Ray
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('pricing')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Brokerage & Fee Comparison
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('pillars')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Tax-Loss Harvesting Suite
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">Pillars</div>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  onClick={() => onNavigateSection('pillars')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  01. Understand (Net Worth Radar)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('pillars')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  02. Act (Sub-18ms Execution)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('pillars')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  03. Grow (Quantitative Alpha)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('security')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  CDSL Demat Custody
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">Company & Office</div>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-start gap-1.5 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Indiranagar, Bengaluru, KA 560038, India</span>
              </li>
              <li className="flex items-center gap-1.5 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>support@fermor.in</span>
              </li>
              <li>
                <a href="#security" className="hover:text-emerald-400 transition-colors">
                  Investor Charter & Grievances
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-emerald-400 transition-colors">
                  SEBI Regulatory Disclosures
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-emerald-400 transition-colors">
                  Privacy Policy & Terms
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory & Risk Disclaimers */}
        <div className="pt-8 border-t border-slate-800 space-y-3 text-[11px] text-slate-500 leading-relaxed">
          <p>
            <strong className="text-slate-400">Fermor Technologies Private Limited:</strong> Member of NSE, BSE, MCX. SEBI Registration No.: INZ000293438 | CDSL Depository Participant DP ID: IN300128 | AMFI Registered Mutual Fund Distributor ARN: 248912 | SEBI Research Analyst Reg. No.: INH000010928. CIN: U67190KA2024PTC189201. Registered Address: Indiranagar, Bengaluru, Karnataka 560038, India.
          </p>
          <p>
            <strong className="text-slate-400">Disclaimer:</strong> Investments in securities market are subject to market risks; read all the related documents carefully before investing. Brokerage will not exceed the SEBI prescribed limit.
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Fermor Technologies Pvt. Ltd. All rights reserved. Made in Bengaluru.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
