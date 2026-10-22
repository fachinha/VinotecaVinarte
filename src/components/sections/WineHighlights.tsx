import React, { useRef } from 'react';
import type { Wine as WineType } from '../../types';
import { DEMO_WINES } from '../../data/wines';
import { Sparkles, ShoppingBag } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../data/config';

interface WineHighlightsProps {
  onSelectWine: (wine: WineType) => void;
  onOpenAdvisor?: () => void;
  wines?: WineType[];
}

export const WineHighlights: React.FC<WineHighlightsProps> = ({
  onSelectWine,
  onOpenAdvisor,
  wines = DEMO_WINES,
}) => {
  const featuredWines = wines.filter((w) => w.isFeatured).slice(0, 4);
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="destacados"
      ref={sectionRef}
      className="py-20 sm:py-28 bg-[#FAF7F2] relative overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-orange-200/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-amber-100/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#E96615] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Selección del Sommelier</span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#261C20] font-normal tracking-tight">
            Una invitación a descubrir
          </h2>
        </div>

        {/* Sommelier Virtual Feature Card (al principio de destacados) */}
        {onOpenAdvisor && (
          <div className="mb-12 bg-gradient-to-r from-orange-50 via-white to-amber-50/60 p-7 sm:p-9 rounded-3xl border border-orange-200/90 shadow-md flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
            <div className="max-w-xl text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#E96615] font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Asesoramiento Personalizado</span>
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#46042E] font-normal tracking-tight">
                ¿Buscás una recomendación para tu mesa?
              </h3>
              <p className="mt-2 text-sm text-[#6E6259] leading-relaxed font-normal">
                Utilizá nuestro Sommelier Virtual para encontrar la etiqueta perfecta según tu plato (asado, trucha patagónica, pastas, picada o celebración).
              </p>
            </div>

            <button
              onClick={onOpenAdvisor}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#E96615] hover:bg-[#D4550C] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-xl shadow-[#E96615]/25 hover:-translate-y-0.5 whitespace-nowrap"
            >
              <Sparkles className="w-4 h-4" />
              <span>Consultar Sommelier Virtual</span>
            </button>
          </div>
        )}

        {/* Featured Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {featuredWines.map((wine, index) => (
            <div
              key={wine.id}
              style={{ animationDelay: `${index * 200}ms` }}
              className="bg-white rounded-2xl border border-[#EAE0D3] overflow-hidden flex flex-col justify-between hover:border-orange-300 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-[#E96615]/10 group hover:-translate-y-1.5"
            >
              {/* Bottle Showcase Image */}
              <div
                onClick={() => onSelectWine(wine)}
                className="relative aspect-[4/5] bg-gradient-to-b from-orange-50/40 via-[#FAF7F2] to-[#F4EFE6] overflow-hidden flex items-center justify-center p-6 cursor-pointer"
              >
                <img
                  src={wine.imageUrl}
                  alt={wine.name}
                  loading="lazy"
                  className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

                {/* Badge: Category & Vintage */}
                <div className="absolute top-4 left-4 pointer-events-none">
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-[#E96615] bg-white/95 border border-orange-200/90 px-3 py-1 rounded-full shadow-sm">
                    {wine.category.toUpperCase()} {wine.vintage && `• ${wine.vintage}`}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 pt-4 flex flex-col flex-1 justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-[#6E6259] font-medium block mb-1">
                    {wine.winery}
                  </span>
                  <h3
                    onClick={() => onSelectWine(wine)}
                    className="font-editorial text-2xl text-[#261C20] font-semibold hover:text-[#E96615] transition-colors cursor-pointer leading-tight"
                  >
                    {wine.name}
                  </h3>
                  <p className="mt-2 text-xs text-[#6E6259] line-clamp-2 leading-relaxed font-normal">
                    {wine.tastingNotes.aroma}
                  </p>
                </div>

                {/* Price & Action */}
                <div className="mt-6 pt-4 border-t border-[#EAE0D3] flex items-center justify-between gap-3">
                  <span className="font-editorial text-2xl text-[#E96615] font-semibold">
                    {wine.priceDisplay || 'Consultar'}
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectWine(wine)}
                      className="px-4 py-2 rounded-full border border-[#EAE0D3] hover:border-[#E96615] bg-white hover:bg-orange-50 text-xs font-semibold uppercase tracking-wider text-[#261C20] hover:text-[#E96615] transition-all shadow-sm"
                      aria-label={`Ver detalles de ${wine.name}`}
                    >
                      VER
                    </button>

                    <a
                      href={BUSINESS_CONFIG.uberEatsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 bg-[#E96615] hover:bg-[#D4550C] text-white text-xs font-semibold px-3.5 py-2 rounded-full transition-all shadow-md shadow-[#E96615]/20 hover:-translate-y-0.5"
                      title={`Pedir ${wine.name} en Uber Eats`}
                      aria-label={`Pedir ${wine.name} en Uber Eats`}
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Pedir</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Uber Eats Quick Access */}
        <div className="mt-12 text-center flex items-center justify-center">
          <a
            href={BUSINESS_CONFIG.uberEatsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider bg-white hover:bg-orange-50 text-[#46042E] border border-orange-200 hover:border-[#E96615] px-7 py-3 rounded-full transition-all duration-300 shadow-sm"
          >
            <ShoppingBag className="w-4 h-4 text-[#E96615]" />
            <span>Pedir etiquetas en Uber Eats</span>
          </a>
        </div>
      </div>
    </section>
  );
};
