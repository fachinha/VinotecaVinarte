import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../data/config';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-30 flex items-end flex-col gap-2 pointer-events-auto">
      {/* Editorial Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#29151C]/95 border border-[#B79A68]/40 text-[#FCFAF6] text-xs px-3.5 py-2 rounded-xl shadow-2xl backdrop-blur-md animate-fade-in max-w-xs">
          <span>¿Buscás una recomendación para hoy? Escribinos.</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#B79A68] hover:text-[#FCFAF6] transition-colors p-0.5"
            aria-label="Cerrar sugerencia"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Button */}
      <a
        href={BUSINESS_CONFIG.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
        aria-label="Contactar a Vinarte por WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#B79A68]"></span>
        </span>
        <MessageCircle className="w-7 h-7 transition-transform group-hover:rotate-6" />
      </a>
    </div>
  );
};
