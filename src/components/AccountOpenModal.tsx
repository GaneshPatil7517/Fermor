import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  X,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Building2,
  RotateCw
} from 'lucide-react';
import { FermorLogo } from './FermorLogo';

interface AccountOpenModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccountOpenModal: React.FC<AccountOpenModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<number>(1);
  const [mobileNumber, setMobileNumber] = useState<string>('');
  const [otp, setOtp] = useState<string>('');
  const [riskProfile, setRiskProfile] = useState<string>('Aggressive Compounder');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  if (!isOpen) return null;

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#00B368', '#38BDF8', '#0F172A', '#F59E0B'],
    });
  };

  const handleNextStep = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      if (step === 3) {
        setStep(4);
        triggerConfetti();
      } else {
        setStep((prev) => prev + 1);
      }
    }, 450);
  };

  const resetAndClose = () => {
    setStep(1);
    setMobileNumber('');
    setOtp('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white border border-slate-200 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden text-slate-900">
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
          <FermorLogo size="sm" darkText={true} />
          <div className="text-xs text-slate-500 font-semibold">
            {step < 4 ? `Step ${step} of 3 • Paperless KYC` : 'Account Activated'}
          </div>
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <div className="mt-6 space-y-4 animate-in fade-in">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Begin your financial momentum.</h3>
              <p className="text-xs text-slate-600 mt-1">
                Open your lifetime free Demat & Direct Investment account in under 3 minutes.
              </p>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-xs font-bold text-slate-700">Mobile Number (Aadhaar linked)</label>
                <div className="mt-1 relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-500 font-mono">
                    +91
                  </span>
                  <input
                    type="tel"
                    placeholder="98765 43210"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-emerald-500 font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700">One-Time Password (OTP)</label>
                <input
                  type="text"
                  placeholder="Enter 6-digit OTP (e.g. 748291)"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="mt-1 w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-emerald-500 font-mono tracking-widest text-center"
                />
                <div className="text-[11px] text-emerald-700 font-semibold mt-1 cursor-pointer" onClick={() => setOtp('748291')}>
                  ⚡ Click to auto-fill sample OTP (748291)
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>₹0 Account Opening • ₹0 AMC Lifetime • 100% CDSL Demat Custody</span>
            </div>

            <button
              onClick={handleNextStep}
              disabled={isLoading}
              className="w-full py-3.5 rounded-xl font-bold text-white bg-[#00B368] hover:bg-[#009A59] active:scale-98 transition-all flex items-center justify-center gap-2 text-sm shadow-sm"
            >
              {isLoading ? (
                <RotateCw className="w-4 h-4 animate-spin text-white" />
              ) : (
                <>
                  <span>Verify OTP & Proceed</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="mt-6 space-y-4 animate-in fade-in">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Instant DigiLocker Verification</h3>
              <p className="text-xs text-slate-600 mt-1">
                SEBI compliant digital verification via DigiLocker API.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-700 font-medium">PAN Verification</span>
                <span className="text-emerald-800 font-bold font-mono">ABCDE1234F</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-700 font-medium">Aadhaar e-KYC</span>
                <span className="text-emerald-800 font-bold flex items-center gap-1 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Authenticated
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-700 font-medium">CDSL Demat Status</span>
                <span className="text-emerald-800 font-bold font-mono">Ready for Allocation</span>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700">Bank Account for SIP & Withdrawals</label>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-emerald-700" />
                  <div>
                    <div className="font-bold text-slate-900">HDFC Bank Ltd</div>
                    <div className="text-[10px] text-slate-500 font-mono">A/C: •••• 8492 (IFSC: HDFC0000128)</div>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                  Penny Drop Success
                </span>
              </div>
            </div>

            <button
              onClick={handleNextStep}
              disabled={isLoading}
              className="w-full py-3.5 rounded-xl font-bold text-white bg-[#00B368] hover:bg-[#009A59] active:scale-98 transition-all flex items-center justify-center gap-2 text-sm shadow-sm"
            >
              {isLoading ? (
                <RotateCw className="w-4 h-4 animate-spin text-white" />
              ) : (
                <>
                  <span>Confirm KYC & Set Risk Profile</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="mt-6 space-y-4 animate-in fade-in">
            <div>
              <h3 className="text-xl font-bold text-slate-900">Select Your Investment Style</h3>
              <p className="text-xs text-slate-600 mt-1">
                Fermor customizes your "Understand. Act. Grow." suggestions to match your goals.
              </p>
            </div>

            <div className="space-y-2">
              {[
                {
                  title: 'Aggressive Compounder',
                  desc: 'High equity allocation (Stocks, Direct MFs, Thematic Baskets) aiming for 16-25% CAGR.',
                },
                {
                  title: 'Balanced Wealth Builder',
                  desc: 'Mix of Flexi-cap funds, Large-cap titans, and Sovereign Gold Bonds (12-16% CAGR).',
                },
                {
                  title: 'Active Quantitative Trader',
                  desc: 'Options, Futures, and Intraday momentum strategies with sub-18ms tools.',
                },
              ].map((prof) => (
                <div
                  key={prof.title}
                  onClick={() => setRiskProfile(prof.title)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                    riskProfile === prof.title
                      ? 'bg-emerald-50/70 border-emerald-500 shadow-2xs'
                      : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="font-bold text-xs text-slate-900">{prof.title}</div>
                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        riskProfile === prof.title
                          ? 'border-emerald-600 bg-emerald-600'
                          : 'border-slate-400'
                      }`}
                    >
                      {riskProfile === prof.title && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-600 mt-1">{prof.desc}</p>
                </div>
              ))}
            </div>

            <button
              onClick={handleNextStep}
              disabled={isLoading}
              className="w-full py-3.5 rounded-xl font-bold text-white bg-[#00B368] hover:bg-[#009A59] active:scale-98 transition-all flex items-center justify-center gap-2 text-sm shadow-sm"
            >
              {isLoading ? (
                <RotateCw className="w-4 h-4 animate-spin text-white" />
              ) : (
                <>
                  <span>Activate Fermor Account (Free)</span>
                  <Sparkles className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <div className="mt-6 text-center space-y-4 animate-in zoom-in-95 duration-150">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <div>
              <h3 className="text-2xl font-black text-slate-900">Welcome to Fermor!</h3>
              <p className="text-xs text-slate-600 mt-1 max-w-sm mx-auto">
                Your direct Demat and unified portfolio OS is fully active. You're ready to Understand, Act, and Grow.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-2 text-left">
              <div className="flex justify-between">
                <span className="text-slate-600">Account ID:</span>
                <span className="text-slate-900 font-mono font-bold">FRM-829104</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">CDSL Demat BO ID:</span>
                <span className="text-emerald-700 font-mono font-bold">1208160004928174</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Brokerage Tier:</span>
                <span className="text-emerald-700 font-bold">₹0 Free Lifetime</span>
              </div>
            </div>

            <button
              onClick={resetAndClose}
              className="w-full py-3.5 rounded-xl font-bold text-white bg-[#00B368] hover:bg-[#009A59] active:scale-98 transition-all text-sm shadow-sm"
            >
              Enter Financial Command Center
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
