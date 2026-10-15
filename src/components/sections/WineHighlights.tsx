import React, { useState, useEffect, useRef } from 'react';
import type { Wine as WineType } from '../../types';
import { DEMO_WINES } from '../../data/wines';
import { Sparkles, MessageCircle, ShoppingBag } from 'lucide-react';
import { getWineWhatsAppUrl, BUSINESS_CONFIG } from '../../data/config';

interface WineHighlightsProps {
  onSelectWine: (wine: WineType) => void;
  onOpenAdvisor?: () => void;
}

export const WineHighlights: React.FC<WineHighlightsProps> = ({ onSelectWine, onOpenAdvisor }) => {
  const featuredWines = DEMO_WINES.filter((w) => w.isFeatured).slice(0, 4);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="destacados"
      ref={sectionRef}
      className="py-20 sm:py-28 bg-[#171513] relative overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#481B28]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#B79A68]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B79A68] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Selección del Sommelier</span>
          </div>
          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#FCFAF6] font-normal tracking-tight">
            Una invitación a descubrir
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#F4EFE5]/75 font-light">
            Encontrá el vino ideal para cada ocasión. Etiquetas con identidad, terroir patagónico y carácter singular.
          </p>
        </div>

        {/* Featured Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {featuredWines.map((wine, index) => (
            <div
              key={wine.id}
              style={{ animationDelay: `${index * 200}ms` }}
              className={`card-luxury rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5 ${
                isVisible ? 'wine-appear' : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Bottle Showcase Image */}
              <div
                onClick={() => onSelectWine(wine)}
                className="relative aspect-[4/5] bg-gradient-to-b from-[#29151C]/60 via-[#171513]/40 to-[#171513] overflow-hidden flex items-center justify-center p-6 cursor-pointer"
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#171513] via-transparent to-transparent opacity-75 pointer-events-none" />

                {/* Badge: Category & Vintage */}
                <div className="absolute top-4 left-4 pointer-events-none">
                  <span className="text-[10px] uppercase tracking-widest font-semibold text-[#B79A68] bg-[#171513]/90 border border-[#B79A68]/30 px-3 py-1 rounded-full backdrop-blur-md">
                    {wine.category.toUpperCase()} {wine.vintage && `• ${wine.vintage}`}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 pt-3 flex flex-col flex-1 justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-[#A3988F] font-medium block mb-1">
                    {wine.winery}
                  </span>
                  <h3
                    onClick={() => onSelectWine(wine)}
                    className="font-editorial text-2xl text-[#FCFAF6] font-semibold hover:text-[#B79A68] transition-colors cursor-pointer leading-tight"
                  >
                    {wine.name}
                  </h3>
                  <p className="mt-2 text-xs text-[#F4EFE5]/70 line-clamp-2 leading-relaxed font-light">
                    {wine.tastingNotes.aroma}
                  </p>
                </div>

                {/* Price & Action */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <span className="font-editorial text-2xl text-[#B79A68] font-semibold">
                    {wine.priceDisplay || 'Consultar'}
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectWine(wine)}
                      className="px-4 py-2 rounded-full border border-[#B79A68]/40 hover:border-[#B79A68] bg-[#201c1a] hover:bg-[#29151C] text-xs font-semibold uppercase tracking-wider text-[#FCFAF6] hover:text-[#B79A68] transition-all"
                      aria-label={`Ver detalles de ${wine.name}`}
                    >
                      VER
                    </button>

                    <a
                      href={getWineWhatsAppUrl(wine.name, wine.winery)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 bg-[#25D366] hover:bg-[#22c35e] text-white text-xs font-semibold px-3.5 py-2 rounded-full transition-colors shadow-md"
                      title={`Consultar por ${wine.name} por WhatsApp`}
                      aria-label={`Consultar disponibilidad de ${wine.name} por WhatsApp`}
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Pedir</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sommelier Virtual Feature Card */}
        {onOpenAdvisor && (
          <div
            className={`mt-16 bg-gradient-to-r from-[#29151C] via-[#201c1a] to-[#29151C] p-8 sm:p-10 rounded-3xl border border-[#B79A68]/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="max-w-xl text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B79A68] font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Asesoramiento Personalizado</span>
              </div>
              <h3 className="font-editorial text-3xl sm:text-4xl text-[#FCFAF6] font-normal tracking-tight">
                ¿Buscás una recomendación para tu mesa?
              </h3>
              <p className="mt-2 text-sm text-[#F4EFE5]/75 leading-relaxed">
                Utilizá nuestro Sommelier Virtual para encontrar la etiqueta perfecta según tu plato (asado, trucha patagónica, pastas, picada o celebración).
              </p>
            </div>

            <button
              onClick={onOpenAdvisor}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#B79A68] hover:bg-[#c9af7e] text-[#171513] font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-xl hover:shadow-[#B79A68]/30 hover:-translate-y-0.5 whitespace-nowrap"
            >
              <Sparkles className="w-4 h-4" />
              <span>Consultar Sommelier Virtual</span>
            </button>
          </div>
        )}

        {/* Uber Eats Quick Access */}
        <div className="mt-12 text-center flex items-center justify-center">
          <a
            href={BUSINESS_CONFIG.uberEatsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider bg-[#29151C] hover:bg-[#381923] text-[#FCFAF6] border border-[#B79A68]/40 hover:border-[#B79A68] px-7 py-3 rounded-full transition-all duration-300 shadow-md"
          >
            <ShoppingBag className="w-4 h-4 text-[#B79A68]" />
            <span>Pedir etiquetas en Uber Eats</span>
          </a>
        </div>
      </div>
    </section>
  );
};
