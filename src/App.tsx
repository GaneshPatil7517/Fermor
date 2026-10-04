import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { MarketTicker } from './components/MarketTicker';
import { HeroSection } from './components/HeroSection';
import { PillarsDeepDive } from './components/PillarsDeepDive';
import { InteractiveWealthEngine } from './components/InteractiveWealthEngine';
import { ProductSpectrum } from './components/ProductSpectrum';
import { ThematicBasketsShowcase } from './components/ThematicBasketsShowcase';
import { PortfolioDiagnosticWidget } from './components/PortfolioDiagnosticWidget';
import { ComparisonMatrix } from './components/ComparisonMatrix';
import { SecurityAndTrust } from './components/SecurityAndTrust';
import { TestimonialsAndCommunity } from './components/TestimonialsAndCommunity';
import { FAQSection } from './components/FAQSection';
import { MobileAppPromo } from './components/MobileAppPromo';
import { Footer } from './components/Footer';
import { AccountOpenModal } from './components/AccountOpenModal';
import { CommandBarModal } from './components/CommandBarModal';

export const App: React.FC = () => {
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  // Global keydown shortcut for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchModalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-emerald-100 selection:text-emerald-900 font-sans">
      {/* Top Navbar */}
      <Navbar
        onOpenAccountModal={() => setIsAccountModalOpen(true)}
        onOpenSearchModal={() => setIsSearchModalOpen(true)}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onOpenAccountModal={() => setIsAccountModalOpen(true)}
          onNavigateSection={handleNavigateSection}
        />

        {/* Live Market Ticker */}
        <MarketTicker />

        {/* The Three Pillars: Understand. Act. Grow. */}
        <PillarsDeepDive
          onOpenAccountModal={() => setIsAccountModalOpen(true)}
          onNavigateSection={handleNavigateSection}
        />

        {/* SIP & Wealth Compounding Engine */}
        <InteractiveWealthEngine
          onOpenAccountModal={() => setIsAccountModalOpen(true)}
        />

        {/* Product Spectrum Grid */}
        <ProductSpectrum
          onOpenAccountModal={() => setIsAccountModalOpen(true)}
          onNavigateSection={handleNavigateSection}
        />

        {/* Quantitative Thematic Baskets */}
        <ThematicBasketsShowcase
          onOpenAccountModal={() => setIsAccountModalOpen(true)}
        />

        {/* Portfolio X-Ray Diagnostic Tool */}
        <PortfolioDiagnosticWidget
          onOpenAccountModal={() => setIsAccountModalOpen(true)}
        />

        {/* Pricing & Comparison Matrix */}
        <ComparisonMatrix
          onOpenAccountModal={() => setIsAccountModalOpen(true)}
        />

        {/* Security, Trust & Depository Protection */}
        <SecurityAndTrust />

        {/* Customer Stories & Verified Testimonials */}
        <TestimonialsAndCommunity />

        {/* Searchable FAQ Accordion */}
        <FAQSection />

        {/* Mobile App Download Promo */}
        <MobileAppPromo />
      </main>

      {/* Footer */}
      <Footer
        onNavigateSection={handleNavigateSection}
        onOpenAccountModal={() => setIsAccountModalOpen(true)}
      />

      {/* Account Opening Interactive Simulation Modal */}
      <AccountOpenModal
        isOpen={isAccountModalOpen}
        onClose={() => setIsAccountModalOpen(false)}
      />

      {/* Command Bar Global Spotlight Modal */}
      <CommandBarModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onNavigateSection={handleNavigateSection}
        onOpenAccountModal={() => setIsAccountModalOpen(true)}
      />
    </div>
  );
};

export default App;
