import React from 'react';
import {
  ShieldCheck,
  Lock,
  Building2,
  KeyRound,
  CheckCircle2,
  MapPin
} from 'lucide-react';

export const SecurityAndTrust: React.FC = () => {
  const securityPillars = [
    {
      icon: <Building2 className="w-5 h-5 text-emerald-700" />,
      title: 'Direct CDSL Demat Ownership',
      description: 'Your shares and mutual fund units are held directly in your personal Demat account with Central Depository Services India Ltd (CDSL). Your assets remain 100% safe under your name.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-700" />,
      title: 'SEBI Registered & Exchange Regulated',
      description: 'Fully compliant regulatory framework adhering to Securities and Exchange Board of India (SEBI) standards, NSE, BSE, and AMFI norms.',
    },
    {
      icon: <Lock className="w-5 h-5 text-emerald-700" />,
      title: '256-Bit AES Bank Grade Security',
      description: 'End-to-end TLS 1.3 encryption with ISO 27001 certified cloud infrastructure. Your financial data is strictly confidential.',
    },
    {
      icon: <KeyRound className="w-5 h-5 text-emerald-700" />,
      title: 'Biometric 2FA & Consent Architecture',
      description: 'Two-factor biometric authentication and RBI-approved Account Aggregator framework ensure consent-driven, zero-credential-sharing data sync.',
    },
  ];

  return (
    <section id="security" className="py-20 md:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Institutional-Grade Safety</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Your assets and data are strictly protected.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Built from the ground up on national depository architecture with military-grade encryption.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {securityPillars.map((p, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-3xl border border-slate-200 bg-white hover:border-slate-300 shadow-sm transition-all flex items-start gap-4 group"
            >
              <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                {p.icon}
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-slate-900">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Badge Bar */}
        <div className="mt-10 p-6 rounded-3xl border border-slate-200 bg-white flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600 shadow-2xs">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>
              Headquartered in <strong className="text-slate-900">Bengaluru, India</strong> • Fintech Capital
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <span className="flex items-center gap-1.5 font-mono text-slate-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              CDSL DP ID: IN300128
            </span>
            <span className="flex items-center gap-1.5 font-mono text-slate-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              SEBI Reg: INZ000293438
            </span>
            <span className="flex items-center gap-1.5 font-mono text-slate-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              AMFI ARN: 248912
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
