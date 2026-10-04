import React, { useState } from 'react';
import {
  Smartphone,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Bell,
  TrendingUp,
  Fingerprint,
  Zap
} from 'lucide-react';

export const MobileAppPromo: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [linkSent, setLinkSent] = useState(false);

  const handleSendLink = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.trim().length >= 10) {
      setLinkSent(true);
      setTimeout(() => {
        setLinkSent(false);
        setPhoneNumber('');
      }, 4000);
    }
  };

  return (
    <section className="py-20 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-800 bg-slate-900 text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-xs text-emerald-400 font-semibold">
                <Smartphone className="w-3.5 h-3.5" />
                <span>Fermor Mobile Experience</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
                Your financial momentum,{' '}
                <span className="text-[#00B368]">in your pocket.</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Biometric security, instant SIP execution, lock screen portfolio widgets, and real-time market price alerts—available on iOS & Android.
              </p>

              {/* Feature Pills */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Fingerprint className="w-4 h-4 text-emerald-400" />
                  <span>FaceID & Biometric 2FA</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Zap className="w-4 h-4 text-sky-400" />
                  <span>UPI AutoPay 2.0 Integration</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Bell className="w-4 h-4 text-amber-400" />
                  <span>Smart Price Trigger Alerts</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Encrypted Offline Cache</span>
                </div>
              </div>

              {/* SMS Direct Link Form */}
              <div className="pt-3">
                <form onSubmit={handleSendLink} className="flex flex-col sm:flex-row gap-2 max-w-md">
                  <div className="relative flex-1">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 font-mono">
                      +91
                    </span>
                    <input
                      type="tel"
                      placeholder="Enter 10-digit mobile number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      maxLength={10}
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-[#00B368]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-5 py-3 rounded-xl bg-[#00B368] hover:bg-[#009A59] text-white font-bold text-xs transition-colors shrink-0 shadow-sm flex items-center justify-center gap-1.5"
                  >
                    <span>Get App Link</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>

                {linkSent && (
                  <div className="mt-2 text-xs text-emerald-400 font-mono animate-in fade-in">
                    ✓ Download link sent to +91 {phoneNumber}!
                  </div>
                )}
              </div>

              {/* Store Ratings */}
              <div className="flex items-center gap-4 pt-1 text-xs text-slate-400">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700">
                  <span className="font-bold text-white">4.9 ★</span>
                  <span>Apple App Store</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700">
                  <span className="font-bold text-white">4.8 ★</span>
                  <span>Google Play Store</span>
                </div>
              </div>
            </div>

            {/* Right Phone Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-[270px] sm:w-[290px] rounded-[38px] p-3 bg-slate-950 border-4 border-slate-800 shadow-2xl relative">
                <div className="w-20 h-3.5 bg-slate-900 rounded-full mx-auto mb-2" />

                <div className="bg-slate-900 rounded-[28px] p-4 space-y-3.5 text-white border border-slate-800">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 pb-2 border-b border-slate-800">
                    <span className="font-mono font-bold text-white">9:41 AM</span>
                    <span className="text-[10px] text-emerald-400 font-bold">● NSE Active</span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-800 border border-slate-700 space-y-1">
                    <div className="text-[10px] text-slate-400">Total Net Worth</div>
                    <div className="text-xl font-extrabold font-mono-num text-white">
                      ₹48,65,240
                    </div>
                    <div className="text-[10px] text-emerald-400 font-mono-num font-semibold">
                      ▲ +₹8,92,400 (+22.4%)
                    </div>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <div>
                        <div className="font-bold text-white text-[11px]">Monthly SIP Executed</div>
                        <div className="text-[10px] text-slate-400">₹25,000 at NAV ₹54.2</div>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" />
                      <div>
                        <div className="font-bold text-white text-[11px]">Clean Energy Basket</div>
                        <div className="text-[10px] text-slate-400">+4.2% today</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-1">
                    <div className="w-full py-2.5 rounded-xl bg-[#00B368] text-white font-bold text-center text-xs shadow-xs">
                      1-Click Rebalance Available
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
