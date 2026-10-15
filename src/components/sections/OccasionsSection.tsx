import React from 'react';
import { OCCASIONS_DATA } from '../../data/wines';
import type { WineCategory } from '../../types';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../data/config';

interface OccasionsSectionProps {
  onSelectOccasionCategory?: (cat: WineCategory) => void;
}

export const OccasionsSection: React.FC<OccasionsSectionProps> = ({ onSelectOccasionCategory }) => {
  return (
    <section className="py-20 sm:py-28 bg-[#201c1a] border-y border-[#B79A68]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#B79A68] font-semibold block mb-2">
            Momentos & Ocasiones
          </span>
          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#FCFAF6] font-normal tracking-tight">
            El vino según el momento
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#F4EFE5]/75 font-light">
            Elegí tu plan y accedé directamente a recomendaciones pensadas para esa vivencia.
          </p>
        </div>

        {/* 4 Occasions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {OCCASIONS_DATA.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden bg-[#171513] border border-white/10 hover:border-[#B79A68]/50 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-xl"
            >
              {/* Image with subtle gradient */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171513] via-[#171513]/40 to-transparent" />
                <span className="absolute top-3 left-3 text-[10px] uppercase tracking-widest text-[#B79A68] font-semibold bg-[#29151C]/90 px-2.5 py-1 rounded-full border border-[#B79A68]/30">
                  {item.subtitle}
                </span>
              </div>

              {/* Text */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-editorial text-2xl text-[#FCFAF6] font-semibold group-hover:text-[#B79A68] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-[#A3988F] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Actions */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  {item.targetCategory && onSelectOccasionCategory ? (
                    <a
                      href="#catalogo"
                      onClick={() => onSelectOccasionCategory(item.targetCategory!)}
                      className="text-xs font-semibold text-[#B79A68] hover:text-[#FCFAF6] flex items-center gap-1 transition-colors"
                    >
                      <span>Ver etiquetas</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <a
                      href="#catalogo"
                      className="text-xs font-semibold text-[#B79A68] hover:text-[#FCFAF6] flex items-center gap-1 transition-colors"
                    >
                      <span>Explorar</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <a
                    href={`https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                      `Hola Vinarte, me gustaría recibir recomendaciones de ${item.whatsappPrompt}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-[#29151C] hover:bg-[#25D366] text-[#B79A68] hover:text-white transition-colors border border-[#B79A68]/30 hover:border-[#25D366]"
                    title={`Consultar por ${item.title} por WhatsApp`}
                    aria-label={`Consultar por ${item.title} por WhatsApp`}
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
