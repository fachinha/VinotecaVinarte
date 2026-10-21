import React, { useEffect } from 'react';
import { X, MessageCircle, ShoppingBag, Wine as WineIcon, Sparkles, Thermometer, Info } from 'lucide-react';
import type { Wine } from '../../types';
import { BUSINESS_CONFIG, getWineWhatsAppUrl } from '../../data/config';

interface WineDetailModalProps {
  wine: Wine | null;
  onClose: () => void;
}

export const WineDetailModal: React.FC<WineDetailModalProps> = ({ wine, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (wine) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [wine, onClose]);

  if (!wine) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="wine-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0e0d0c]/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#201c1a] border border-[#B79A68]/30 rounded-2xl shadow-2xl z-10 text-[#FCFAF6] scrollbar-thin">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#171513]/80 border border-[#B79A68]/20 flex items-center justify-center text-[#F4EFE5]/70 hover:text-[#B79A68] hover:border-[#B79A68] transition-colors"
          aria-label="Cerrar detalles del vino"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          {/* Image & Terroir Badge Column */}
          <div className="md:col-span-5 bg-gradient-to-b from-[#29151C] to-[#171513] p-8 flex flex-col items-center justify-center relative min-h-[300px] border-b md:border-b-0 md:border-r border-[#B79A68]/15">
            <div className="relative w-full max-w-[220px] aspect-[3/4] rounded-xl overflow-hidden shadow-2xl border border-white/5">
              <img
                src={wine.imageUrl}
                alt={wine.name}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171513]/80 via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="mt-4 text-center">
              <span className="inline-block text-[10px] uppercase tracking-widest text-[#B79A68] font-semibold bg-[#B79A68]/10 px-3 py-1 rounded-full border border-[#B79A68]/30">
                {wine.isPatagonian ? 'Terruño Patagónico' : 'Selección Nacional'}
              </span>
              <p className="text-xs text-[#8C827A] mt-2">{wine.region}, {wine.province}</p>
            </div>
          </div>

          {/* Tasting Sheet & Actions Column */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Winery & Category */}
              <div className="flex items-center justify-between text-xs tracking-wider uppercase text-[#B79A68] font-medium mb-1">
                <span>{wine.winery}</span>
                {wine.vintage && <span className="text-[#8C827A]">Cosecha {wine.vintage}</span>}
              </div>

              {/* Title */}
              <h2 id="wine-modal-title" className="font-editorial text-3xl sm:text-4xl text-[#FCFAF6] font-semibold leading-tight">
                {wine.name}
              </h2>

              <p className="text-sm text-[#A3988F] font-medium mt-1 mb-4">
                Varietal: <span className="text-[#F4EFE5]">{wine.varietal}</span>
              </p>

              {/* Tasting Notes */}
              <div className="space-y-4 my-6 bg-[#171513]/60 p-4 rounded-xl border border-white/5">
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-[#B79A68] font-semibold flex items-center gap-1.5 mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    En Nariz (Aromas)
                  </h3>
                  <p className="text-xs sm:text-sm text-[#F4EFE5]/90 leading-relaxed">
                    {wine.tastingNotes.aroma}
                  </p>
                </div>

                <div>
                  <h3 className="text-xs uppercase tracking-wider text-[#B79A68] font-semibold flex items-center gap-1.5 mb-1">
                    <WineIcon className="w-3.5 h-3.5" />
                    En Boca (Estructura)
                  </h3>
                  <p className="text-xs sm:text-sm text-[#F4EFE5]/90 leading-relaxed">
                    {wine.tastingNotes.palate}
                  </p>
                </div>

                <div>
                  <h3 className="text-xs uppercase tracking-wider text-[#B79A68] font-semibold flex items-center gap-1.5 mb-1">
                    🍽️ Maridaje Recomendado
                  </h3>
                  <p className="text-xs sm:text-sm text-[#F4EFE5]/90 leading-relaxed">
                    {wine.tastingNotes.foodPairing}
                  </p>
                </div>
              </div>

              {/* Technical badges */}
              <div className="flex flex-wrap items-center gap-3 text-xs text-[#A3988F] mb-6">
                {wine.servingTemp && (
                  <span className="flex items-center gap-1 bg-[#29151C] px-3 py-1 rounded-md border border-[#B79A68]/20 text-[#F4EFE5]">
                    <Thermometer className="w-3.5 h-3.5 text-[#B79A68]" />
                    Temp: {wine.servingTemp}
                  </span>
                )}
                {wine.alcoholContent && (
                  <span className="bg-[#29151C] px-3 py-1 rounded-md border border-[#B79A68]/20 text-[#F4EFE5]">
                    Graduación: {wine.alcoholContent}
                  </span>
                )}
                {wine.priceDisplay && (
                  <span className="font-editorial text-lg text-[#B79A68] font-semibold">
                    {wine.priceDisplay}
                  </span>
                )}
              </div>

              {/* Transparency Notice */}
              <div className="flex items-start gap-2 bg-[#29151C]/40 p-3 rounded-lg border border-[#B79A68]/20 text-[11px] text-[#A3988F] mb-6">
                <Info className="w-4 h-4 text-[#B79A68] flex-shrink-0 mt-0.5" />
                <span>
                  Etiquetas y precios actualizados directamente de nuestra tienda oficial en Uber Eats y local en Morales 438, Bariloche.
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <a
                href={getWineWhatsAppUrl(wine.name, wine.winery)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#22c35e] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider py-3 rounded-full transition-all duration-200 shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Consultar por WhatsApp</span>
              </a>

              <a
                href={BUSINESS_CONFIG.uberEatsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 flex items-center justify-center gap-2 bg-[#B79A68] hover:bg-[#c9af7e] text-[#171513] font-semibold text-xs sm:text-sm uppercase tracking-wider py-3 rounded-full transition-all duration-200 shadow-lg"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Pedir en Uber Eats</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
