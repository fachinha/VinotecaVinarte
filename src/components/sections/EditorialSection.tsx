import React from 'react';
import { Wine, Compass, HeartHandshake } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../data/config';

export const EditorialSection: React.FC = () => {
  return (
    <section id="experiencia" className="py-24 sm:py-32 bg-[#171513] relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#481B28]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Asymmetrical Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column: Overlapping Photos & Textures */}
          <div className="lg:col-span-6 relative">
            {/* Primary Large Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#B79A68]/20 aspect-[4/5] max-w-md mx-auto lg:max-w-none">
              <img
                src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1200&q=80"
                alt="Barricas de roble y ambiente de vinoteca"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171513] via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating Editorial Secondary Card */}
            <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-[#29151C]/95 border border-[#B79A68]/40 p-6 rounded-2xl shadow-2xl backdrop-blur-md max-w-xs hidden sm:block">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-[#171513] flex items-center justify-center text-[#B79A68]">
                  <Wine className="w-4 h-4" />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-[#B79A68] font-bold">
                  Bariloche • Patagonia
                </span>
              </div>
              <p className="font-editorial text-xl text-[#FCFAF6] italic leading-tight">
                "El vino no se impone: se comparte, se conversa y se disfruta."
              </p>
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B79A68] font-semibold mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Filosofía Vinarte</span>
            </div>

            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#FCFAF6] font-normal tracking-tight leading-[1.1]">
              El placer está en <span className="italic text-[#B79A68]">descubrir</span>.
            </h2>

            <p className="mt-6 text-lg sm:text-xl text-[#F4EFE5]/90 font-light leading-relaxed">
              Hay una botella para cada encuentro, cada sobremesa y cada momento que merece algo especial.
            </p>

            <p className="mt-4 text-sm sm:text-base text-[#A3988F] leading-relaxed">
              En Vinarte entendemos la vinoteca no como un depósito de botellas, sino como un punto de encuentro con la cultura vitivinícola argentina. Desde los terruños australes de los valles patagónicos hasta las alturas de Cuyo y el Norte, seleccionamos etiquetas que expresan una voz propia.
            </p>

            {/* Three Pillars */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/10">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#29151C] border border-[#B79A68]/30 flex items-center justify-center text-[#B79A68] flex-shrink-0 mt-0.5">
                  <Wine className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#FCFAF6] uppercase tracking-wider">
                    Curaduría Consciente
                  </h3>
                  <p className="text-xs text-[#A3988F] mt-1 leading-relaxed">
                    Priorizamos bodegas y proyectos con identidad clara, equilibrio y respeto por el terruño.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-[#29151C] border border-[#B79A68]/30 flex items-center justify-center text-[#B79A68] flex-shrink-0 mt-0.5">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#FCFAF6] uppercase tracking-wider">
                    Cercanía & Asesoramiento
                  </h3>
                  <p className="text-xs text-[#A3988F] mt-1 leading-relaxed">
                    Sin tecnicismos innecesarios: te ayudamos a elegir la botella precisa para tu mesa o regalo.
                  </p>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="mt-10 flex items-center gap-4">
              <a
                href={BUSINESS_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#B79A68] hover:bg-[#c9af7e] text-[#171513] text-xs font-semibold uppercase tracking-wider transition-all duration-200"
              >
                <span>Conversar con Vinarte</span>
              </a>
              <a
                href="#ubicacion"
                className="text-xs text-[#F4EFE5]/80 hover:text-[#B79A68] uppercase tracking-wider font-medium transition-colors"
              >
                Visitar el local en Morales 438 &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
