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
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white border border-[#EAE0D3] rounded-2xl shadow-2xl z-10 text-[#261C20] scrollbar-thin">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#EAE0D3] flex items-center justify-center text-[#6E6259] hover:text-[#E96615] hover:border-[#E96615] transition-colors"
          aria-label="Cerrar detalles del vino"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
          {/* Image & Terroir Badge Column */}
          <div className="md:col-span-5 bg-gradient-to-b from-orange-50/40 via-[#FAF7F2] to-[#F4EFE6] p-8 flex flex-col items-center justify-center relative min-h-[300px] border-b md:border-b-0 md:border-r border-[#EAE0D3]">
            <div className="relative w-full max-w-[220px] aspect-[3/4] rounded-xl overflow-hidden shadow-xl border border-[#EAE0D3]">
              <img
                src={wine.imageUrl}
                alt={wine.name}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="mt-4 text-center">
              <span className="inline-block text-[10px] uppercase tracking-widest text-[#E96615] font-semibold bg-white px-3 py-1 rounded-full border border-orange-200/90 shadow-sm">
                {wine.isPatagonian ? 'Terruño Patagónico' : 'Selección Nacional'}
              </span>
              <p className="text-xs text-[#6E6259] mt-2">{wine.region}, {wine.province}</p>
            </div>
          </div>

          {/* Tasting Sheet & Actions Column */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Winery & Category */}
              <div className="flex items-center justify-between text-xs tracking-wider uppercase text-[#E96615] font-semibold mb-1">
                <span>{wine.winery}</span>
                {wine.vintage && <span className="text-[#96887D]">Cosecha {wine.vintage}</span>}
              </div>

              {/* Title */}
              <h2 id="wine-modal-title" className="font-editorial text-3xl sm:text-4xl text-[#261C20] font-semibold leading-tight">
                {wine.name}
              </h2>

              <p className="text-sm text-[#6E6259] font-medium mt-1 mb-4">
                Varietal: <span className="text-[#261C20] font-semibold">{wine.varietal}</span>
              </p>

              {/* Tasting Notes */}
              <div className="space-y-4 my-6 bg-[#FAF7F2] p-4 rounded-xl border border-[#EAE0D3]">
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-[#E96615] font-semibold flex items-center gap-1.5 mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    En Nariz (Aromas)
                  </h3>
                  <p className="text-xs sm:text-sm text-[#261C20]/90 leading-relaxed font-normal">
                    {wine.tastingNotes.aroma}
                  </p>
                </div>

                <div>
                  <h3 className="text-xs uppercase tracking-wider text-[#E96615] font-semibold flex items-center gap-1.5 mb-1">
                    <WineIcon className="w-3.5 h-3.5" />
                    En Boca (Estructura)
                  </h3>
                  <p className="text-xs sm:text-sm text-[#261C20]/90 leading-relaxed font-normal">
                    {wine.tastingNotes.palate}
                  </p>
                </div>

                <div>
                  <h3 className="text-xs uppercase tracking-wider text-[#E96615] font-semibold flex items-center gap-1.5 mb-1">
                    🍽️ Maridaje Recomendado
                  </h3>
                  <p className="text-xs sm:text-sm text-[#261C20]/90 leading-relaxed font-normal">
                    {wine.tastingNotes.foodPairing}
                  </p>
                </div>
              </div>

              {/* Technical badges */}
              <div className="flex flex-wrap items-center gap-3 text-xs text-[#6E6259] mb-6">
                {wine.servingTemp && (
                  <span className="flex items-center gap-1 bg-white px-3 py-1 rounded-md border border-[#EAE0D3] text-[#261C20]">
                    <Thermometer className="w-3.5 h-3.5 text-[#E96615]" />
                    Temp: {wine.servingTemp}
                  </span>
                )}
                {wine.alcoholContent && (
                  <span className="bg-white px-3 py-1 rounded-md border border-[#EAE0D3] text-[#261C20]">
                    Graduación: {wine.alcoholContent}
                  </span>
                )}
                {wine.priceDisplay && (
                  <span className="font-editorial text-2xl text-[#E96615] font-semibold">
                    {wine.priceDisplay}
                  </span>
                )}
              </div>

              {/* Transparency Notice */}
              <div className="flex items-start gap-2 bg-orange-50/60 p-3 rounded-lg border border-orange-200/70 text-[11px] text-[#6E6259] mb-6">
                <Info className="w-4 h-4 text-[#E96615] flex-shrink-0 mt-0.5" />
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
                className="w-full sm:flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider py-3 rounded-full transition-all duration-200 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Consultar WhatsApp</span>
              </a>

              <a
                href={BUSINESS_CONFIG.uberEatsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 flex items-center justify-center gap-2 bg-[#E96615] hover:bg-[#D4550C] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider py-3 rounded-full transition-all duration-200 shadow-md shadow-[#E96615]/20 hover:-translate-y-0.5"
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
