import React, { useState } from 'react';
import type { Wine } from './types';
import { Navbar } from './components/common/Navbar';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';
import { AgeVerificationBanner } from './components/common/AgeVerificationBanner';
import { WineDetailModal } from './components/common/WineDetailModal';
import { WineSommelierAdvisor } from './components/common/WineSommelierAdvisor';

import { Hero } from './components/sections/Hero';
import { WineHighlights } from './components/sections/WineHighlights';
import { WineCatalog } from './components/sections/WineCatalog';
import { InstagramSection } from './components/sections/InstagramSection';
import { LocationSection } from './components/sections/LocationSection';
import { OrdersAndContactSection } from './components/sections/OrdersAndContactSection';
import { GoogleReviewsSection } from './components/sections/GoogleReviewsSection';
import { Footer } from './components/sections/Footer';

export const App: React.FC = () => {
  const [selectedWine, setSelectedWine] = useState<Wine | null>(null);
  const [isAdvisorOpen, setIsAdvisorOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#171513] text-[#FCFAF6] font-sans selection:bg-[#481B28] selection:text-[#F4EFE5] relative">
      {/* Navigation */}
      <Navbar onOpenAdvisor={() => setIsAdvisorOpen(true)} />

      {/* Main Content Layout */}
      <main id="main-content">
        {/* Hero Section */}
        <Hero onOpenAdvisor={() => setIsAdvisorOpen(true)} />

        {/* 1. Wine Catalog & Explorer first */}
        <WineCatalog onSelectWine={(wine) => setSelectedWine(wine)} />

        {/* 2. Featured Showcase with Virtual Sommelier */}
        <WineHighlights
          onSelectWine={(wine) => setSelectedWine(wine)}
          onOpenAdvisor={() => setIsAdvisorOpen(true)}
        />

        {/* Official Instagram Hub */}
        <InstagramSection />

        {/* Location & Visit (Morales 438, Bariloche) */}
        <LocationSection />

        {/* Orders & Contact (Uber Eats & WhatsApp) */}
        <OrdersAndContactSection />

        {/* Google Reviews Invitation */}
        <GoogleReviewsSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Non-intrusive Floating WhatsApp Access */}
      <FloatingWhatsApp />

      {/* Responsible Consumption (+18) Confirmation */}
      <AgeVerificationBanner />

      {/* Sommelier Tasting Card Modal */}
      <WineDetailModal
        wine={selectedWine}
        onClose={() => setSelectedWine(null)}
      />

      {/* Virtual Sommelier Concierge */}
      <WineSommelierAdvisor
        isOpen={isAdvisorOpen}
        onClose={() => setIsAdvisorOpen(false)}
        onSelectWine={(wine) => {
          setIsAdvisorOpen(false);
          setSelectedWine(wine);
        }}
      />
    </div>
  );
};

export default App;
