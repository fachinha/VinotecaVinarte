import React, { useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../data/config';

export const AgeVerificationBanner: React.FC = () => {
  const [isDismissed, setIsDismissed] = useState(() => {
    if (typeof window === 'undefined') return true;
    return Boolean(localStorage.getItem('vinarte_age_verified'));
  });

  const handleConfirm = () => {
    localStorage.setItem('vinarte_age_verified', 'true');
    setIsDismissed(true);
  };

  if (isDismissed) return null;

  return (
    <aside
      aria-label="Aviso de consumo responsable"
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#171513]/98 border-t border-[#B79A68]/30 px-4 py-3 sm:py-3.5 backdrop-blur-lg shadow-2xl"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#481B28] flex-shrink-0 flex items-center justify-center text-[#B79A68]">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <p className="text-xs text-[#F4EFE5]/85">
            <strong className="text-[#B79A68] uppercase tracking-wider font-semibold mr-1.5">+18 Años:</strong>
            {BUSINESS_CONFIG.legalAlcoholWarning} El ingreso a este sitio implica declarar ser mayor de edad.
          </p>
        </div>
        <button
          onClick={handleConfirm}
          className="whitespace-nowrap px-5 py-1.5 rounded-full bg-[#B79A68] hover:bg-[#c9af7e] text-[#171513] text-xs font-semibold uppercase tracking-wider transition-colors duration-200"
        >
          Soy mayor de 18
        </button>
      </div>
    </aside>
  );
};
