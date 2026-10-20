import React from 'react';
import { ArrowDown, ShoppingBag, Sparkles, MapPin, Compass, Wine } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../data/config';

interface HeroProps {
  onOpenAdvisor?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAdvisor }) => {
  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 bg-[#171513]"
    >
      {/* Background Cinematic Atmosphere */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=2000&q=85"
          alt="Copa de vino tinto con reflejos luminosos en Vinarte"
          className="w-full h-full object-cover object-center opacity-30 scale-105 transform animate-fade-in transition-transform duration-1000 ease-out"
          loading="eager"
        />
        {/* Editorial Gradients & Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#171513] via-[#171513]/70 to-[#29151C]/80" />
        <div className="absolute inset-0 bg-radial-vignette opacity-80 pointer-events-none" />
      </div>

      {/* Decorative Subtle Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#481B28]/25 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#B79A68]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Eyebrow / Curaduría */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#B79A68]/30 bg-[#29151C]/70 text-[#B79A68] text-xs uppercase tracking-[0.22em] font-medium mb-6">
          <Wine className="w-3.5 h-3.5" />
          <span>Morales 438 • Bariloche</span>
        </div>

        {/* Headline Editorial */}
        <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#FCFAF6] tracking-tight leading-[1.08] max-w-4xl">
          El arte del vino <span className="italic font-light text-[#B79A68]">en cada copa!</span>
        </h1>

        {/* Slogan */}
        <p className="mt-6 text-lg sm:text-2xl text-[#B79A68] font-editorial italic tracking-wide max-w-2xl">
          “Tenemos el mejor vino del mundo, ¡EL QUE TE GUSTA A VOS!”
        </p>

        {/* Complementary Text */}
        <p className="mt-3 text-sm sm:text-base text-[#F4EFE5]/80 max-w-2xl font-light leading-relaxed">
          Un espacio en Morales 438 para explorar nuevos sabores, encontrar tus favoritos y disfrutar el vino a tu manera. Curaduría exclusiva en el corazón de Bariloche.
        </p>

        {/* Buttons / CTAs */}
        <div className="mt-9 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#catalogo"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#B79A68] hover:bg-[#c9af7e] text-[#171513] font-semibold text-sm uppercase tracking-wider transition-all duration-300 shadow-xl hover:shadow-[#B79A68]/25 hover:-translate-y-0.5"
          >
            <Compass className="w-4 h-4" />
            <span>Explorar vinos</span>
          </a>

          <a
            href={BUSINESS_CONFIG.uberEatsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#29151C] hover:bg-[#381923] text-[#FCFAF6] border border-[#B79A68]/40 hover:border-[#B79A68] font-semibold text-sm uppercase tracking-wider transition-all duration-300 shadow-lg hover:-translate-y-0.5"
          >
            <ShoppingBag className="w-4 h-4 text-[#B79A68]" />
            <span>Hacer un pedido</span>
          </a>

          {onOpenAdvisor && (
            <button
              onClick={onOpenAdvisor}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-transparent hover:bg-white/5 text-[#F4EFE5]/90 border border-white/15 hover:border-[#B79A68]/50 text-xs uppercase tracking-wider transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#B79A68]" />
              <span>Sommelier Virtual</span>
            </button>
          )}
        </div>

        {/* Credibility / Local Pillars */}
        <div className="mt-14 pt-8 border-t border-white/10 w-full grid grid-cols-1 sm:grid-cols-3 gap-6 text-left sm:text-center text-xs text-[#A3988F]">
          <div className="flex items-center sm:justify-center gap-2.5">
            <MapPin className="w-4 h-4 text-[#B79A68] flex-shrink-0" />
            <span>Morales 438, Bariloche</span>
          </div>
          <div className="flex items-center sm:justify-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#B79A68] flex-shrink-0" />
            <span>Catas Guiadas & Maridajes</span>
          </div>
          <div className="flex items-center sm:justify-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#B79A68] flex-shrink-0" />
            <span>Envíos Uber Eats & WhatsApp</span>
          </div>
        </div>

        {/* Scroll Cue */}
        <a
          href="#catalogo"
          className="mt-10 inline-flex flex-col items-center text-[#B79A68]/70 hover:text-[#B79A68] transition-colors group"
          aria-label="Desplazarse al catálogo de vinos"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] mb-1 font-medium">Catálogo</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
