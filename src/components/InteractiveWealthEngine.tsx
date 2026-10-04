import React, { useState, useMemo } from 'react';
import {
  Calculator,
  ArrowRight,
  Award
} from 'lucide-react';

interface InteractiveWealthEngineProps {
  onOpenAccountModal: () => void;
}

export const InteractiveWealthEngine: React.FC<InteractiveWealthEngineProps> = ({
  onOpenAccountModal,
}) => {
  const [monthlyInvestment, setMonthlyInvestment] = useState<number>(25000);
  const [expectedReturnRate, setExpectedReturnRate] = useState<number>(15);
  const [timeHorizonYears, setTimeHorizonYears] = useState<number>(15);
  const [annualStepUpPercent, setAnnualStepUpPercent] = useState<number>(10);
  const [adjustForInflation, setAdjustForInflation] = useState<boolean>(false);

  const calculationResults = useMemo(() => {
    let totalInvested = 0;
    let totalDirectValue = 0;
    let totalRegularValue = 0;
    let currentMonthlySIP = monthlyInvestment;
    const monthlyRateDirect = expectedReturnRate / 12 / 100;
    const monthlyRateRegular = Math.max(0, expectedReturnRate - 1.4) / 12 / 100;

    const yearlyDataPoints: { year: number; invested: number; futureValue: number; regularValue: number }[] = [];
    const totalMonths = timeHorizonYears * 12;

    for (let month = 1; month <= totalMonths; month++) {
      if (month > 1 && (month - 1) % 12 === 0 && annualStepUpPercent > 0) {
        currentMonthlySIP = currentMonthlySIP * (1 + annualStepUpPercent / 100);
      }

      totalInvested += currentMonthlySIP;
      totalDirectValue = (totalDirectValue + currentMonthlySIP) * (1 + monthlyRateDirect);
      totalRegularValue = (totalRegularValue + currentMonthlySIP) * (1 + monthlyRateRegular);

      if (month % 12 === 0 || month === totalMonths) {
        yearlyDataPoints.push({
          year: Math.round(month / 12),
          invested: Math.round(totalInvested),
          futureValue: Math.round(totalDirectValue),
          regularValue: Math.round(totalRegularValue),
        });
      }
    }

    const estimatedGains = totalDirectValue - totalInvested;
    const commissionSavedWithFermor = totalDirectValue - totalRegularValue;
    const wealthMultiplier = +(totalDirectValue / totalInvested).toFixed(1);

    const inflationDiscount = Math.pow(1.06, timeHorizonYears);
    const realPurchasingPower = adjustForInflation
      ? Math.round(totalDirectValue / inflationDiscount)
      : Math.round(totalDirectValue);

    return {
      totalInvested: Math.round(totalInvested),
      totalFutureValue: Math.round(totalDirectValue),
      estimatedGains: Math.round(estimatedGains),
      commissionSavedWithFermor: Math.round(commissionSavedWithFermor),
      wealthMultiplier,
      realPurchasingPower,
      yearlyDataPoints,
    };
  }, [monthlyInvestment, expectedReturnRate, timeHorizonYears, annualStepUpPercent, adjustForInflation]);

  const formatCurrency = (val: number) => {
    if (val >= 10000000) {
      return `₹${(val / 10000000).toFixed(2)} Cr`;
    }
    if (val >= 100000) {
      return `₹${(val / 100000).toFixed(2)} Lakh`;
    }
    return `₹${val.toLocaleString('en-IN')}`;
  };

  return (
    <section id="calculator" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800">
            <Calculator className="w-3.5 h-3.5" />
            <span>SIP & Compounding Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            See the math of your wealth.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Calculate your future wealth with annual salary step-ups and discover the exact amount saved by switching to 0% commission direct mutual funds.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Panel */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl border border-slate-200 bg-white shadow-xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Investment Parameters
              </span>
              <button
                onClick={() => setAdjustForInflation(!adjustForInflation)}
                className={`text-xs px-3 py-1 rounded-lg border transition-all font-semibold ${
                  adjustForInflation
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:text-slate-900'
                }`}
              >
                {adjustForInflation ? '✓ 6% Inflation Adjusted' : 'Nominal Value'}
              </button>
            </div>

            {/* Monthly Investment Slider */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-700">Monthly SIP Amount</label>
                <span className="font-mono-num font-black text-lg text-slate-900">
                  ₹{monthlyInvestment.toLocaleString('en-IN')}
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="150000"
                step="1000"
                value={monthlyInvestment}
                onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#00B368]"
              />
              <div className="flex gap-2 pt-1">
                {[5000, 15000, 25000, 50000, 100000].map((preset) => (
                  <button
                    key={preset}
                    onClick={() => setMonthlyInvestment(preset)}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors ${
                      monthlyInvestment === preset
                        ? 'bg-slate-900 text-white font-bold'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    ₹{preset >= 100000 ? `${preset / 100000}L` : `${preset / 1000}k`}
                  </button>
                ))}
              </div>
            </div>

            {/* Return Rate Slider */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-700">Expected Annual Return (CAGR)</label>
                <span className="font-mono-num font-black text-lg text-[#00B368]">
                  {expectedReturnRate}%
                </span>
              </div>
              <input
                type="range"
                min="6"
                max="25"
                step="0.5"
                value={expectedReturnRate}
                onChange={(e) => setExpectedReturnRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#00B368]"
              />
              <div className="flex gap-2 pt-1">
                {[
                  { label: 'FD (7%)', val: 7 },
                  { label: 'Gold (11%)', val: 11 },
                  { label: 'Nifty 50 (14%)', val: 14 },
                  { label: 'Fermor Quant (18%)', val: 18 },
                ].map((bench) => (
                  <button
                    key={bench.val}
                    onClick={() => setExpectedReturnRate(bench.val)}
                    className={`px-2.5 py-1 rounded-md text-[11px] transition-colors ${
                      expectedReturnRate === bench.val
                        ? 'bg-slate-900 text-white font-bold'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {bench.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Horizon Slider */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-700">Investment Duration</label>
                <span className="font-mono-num font-black text-lg text-slate-900">
                  {timeHorizonYears} Years
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                step="1"
                value={timeHorizonYears}
                onChange={(e) => setTimeHorizonYears(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#00B368]"
              />
              <div className="flex gap-2 pt-1">
                {[5, 10, 15, 20, 25].map((yrs) => (
                  <button
                    key={yrs}
                    onClick={() => setTimeHorizonYears(yrs)}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-colors ${
                      timeHorizonYears === yrs
                        ? 'bg-slate-900 text-white font-bold'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {yrs} Yrs
                  </button>
                ))}
              </div>
            </div>

            {/* Annual Step Up Slider */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-700">Annual Salary Step-Up</label>
                <span className="font-mono-num font-black text-lg text-slate-900">
                  +{annualStepUpPercent}% / yr
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="25"
                step="5"
                value={annualStepUpPercent}
                onChange={(e) => setAnnualStepUpPercent(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#00B368]"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-medium">
                <span>0% (Flat SIP)</span>
                <span>10% (Avg Annual Hike)</span>
                <span>20% (Aggressive)</span>
              </div>
            </div>
          </div>

          {/* Results Summary */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 bg-slate-900 text-white shadow-xl relative">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center justify-between">
                <span>Estimated Maturity Corpus</span>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-xs font-bold">
                  {calculationResults.wealthMultiplier}x Growth
                </span>
              </div>

              <div className="mt-3">
                <div className="text-4xl sm:text-5xl md:text-6xl font-black text-white font-mono-num tracking-tight">
                  {formatCurrency(calculationResults.realPurchasingPower)}
                </div>
                {adjustForInflation && (
                  <div className="text-xs text-slate-400 mt-1 font-mono">
                    Nominal unadjusted value: {formatCurrency(calculationResults.totalFutureValue)}
                  </div>
                )}
              </div>

              {/* Core Breakdown */}
              <div className="mt-6 grid grid-cols-2 gap-4 pt-5 border-t border-slate-800">
                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700">
                  <div className="text-xs text-slate-400 font-medium">Total Amount Invested</div>
                  <div className="text-lg sm:text-xl font-bold text-white font-mono-num mt-1">
                    {formatCurrency(calculationResults.totalInvested)}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700">
                  <div className="text-xs text-slate-400 font-medium">Compounded Gains</div>
                  <div className="text-lg sm:text-xl font-bold text-emerald-400 font-mono-num mt-1">
                    {formatCurrency(calculationResults.estimatedGains)}
                  </div>
                </div>
              </div>

              {/* Fermor Direct Savings Edge */}
              <div className="mt-4 p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-emerald-300">
                    The Fermor Direct Edge: You Save {formatCurrency(calculationResults.commissionSavedWithFermor)}
                  </div>
                  <p className="text-[11px] text-slate-300 mt-1 leading-snug">
                    Traditional regular funds charge ~1.4% yearly commission. By investing in 0% commission Direct Mutual Funds on Fermor, this entire ₹{calculationResults.commissionSavedWithFermor.toLocaleString('en-IN')} stays compounded in your account.
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={onOpenAccountModal}
                className="mt-6 w-full py-4 rounded-xl font-bold text-slate-950 bg-[#00D084] hover:bg-[#00B873] active:scale-98 transition-all flex items-center justify-center gap-2 text-sm shadow-md"
              >
                <span>Set Up This SIP on Fermor (Zero Fee)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
