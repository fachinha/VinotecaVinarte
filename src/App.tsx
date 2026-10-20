import React, { useState } from 'react';
import type { Wine } from './types';
import { DEMO_WINES } from './data/wines';
import { Navbar } from './components/common/Navbar';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';
import { AgeVerificationBanner } from './components/common/AgeVerificationBanner';
import { WineDetailModal } from './components/common/WineDetailModal';
import { WineSommelierAdvisor } from './components/common/WineSommelierAdvisor';
import { AdminPanelModal } from './components/common/AdminPanelModal';

import { Hero } from './components/sections/Hero';
import { AboutSection } from './components/sections/AboutSection';
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
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Dynamic catalog state with localStorage persistence
  const [wines, setWines] = useState<Wine[]>(() => {
    try {
      const stored = localStorage.getItem('vinarte_catalog_data');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Error loading stored wine catalog', e);
    }
    return DEMO_WINES;
  });

  const handleUpdateWines = (newWines: Wine[]) => {
    setWines(newWines);
    try {
      localStorage.setItem('vinarte_catalog_data', JSON.stringify(newWines));
    } catch (e) {
      console.error('Error saving catalog to localStorage', e);
    }
  };

  const handleResetWines = () => {
    setWines(DEMO_WINES);
    try {
      localStorage.removeItem('vinarte_catalog_data');
    } catch (e) {
      console.error('Error removing catalog from localStorage', e);
    }
  };

  return (
    <div className="min-h-screen bg-[#171513] text-[#FCFAF6] font-sans selection:bg-[#481B28] selection:text-[#F4EFE5] relative">
      {/* Navigation */}
      <Navbar
        onOpenAdvisor={() => setIsAdvisorOpen(true)}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Main Content Layout */}
      <main id="main-content">
        {/* Hero Section */}
        <Hero onOpenAdvisor={() => setIsAdvisorOpen(true)} />

        {/* Sobre Nosotros Section (Filosofía, Local Morales 438 y Pilares) */}
        <AboutSection />

        {/* 1. Wine Catalog & Explorer */}
        <WineCatalog
          wines={wines}
          onSelectWine={(wine) => setSelectedWine(wine)}
        />

        {/* 2. Featured Showcase with Virtual Sommelier */}
        <WineHighlights
          wines={wines}
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
        wines={wines}
        onSelectWine={(wine) => {
          setIsAdvisorOpen(false);
          setSelectedWine(wine);
        }}
      />

      {/* Admin Panel Modal (Precios, Fotos y Nuevos Vinos) */}
      <AdminPanelModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        wines={wines}
        onUpdateWines={handleUpdateWines}
        onResetWines={handleResetWines}
      />
    </div>
  );
};

export default App;
