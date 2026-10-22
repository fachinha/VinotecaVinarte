import React from 'react';
import { ArrowDown, ShoppingBag, Sparkles, MapPin, Compass } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../data/config';

interface HeroProps {
  onOpenAdvisor?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAdvisor }) => {
  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 bg-[#FAF7F2]"
    >
      {/* Background Cinematic Atmosphere - Warm & Light */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=2000&q=85"
          alt="Copa de vino con reflejos cálidos en Vinarte"
          className="w-full h-full object-cover object-center opacity-15 scale-105 transform animate-fade-in transition-transform duration-1000 ease-out"
          loading="eager"
        />
        {/* Soft Warm Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/80 to-orange-50/50" />
      </div>

      {/* Decorative Warm Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-200/30 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-100/50 rounded-full blur-[100px] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Headline Editorial */}
        <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#261C20] tracking-tight leading-[1.08] max-w-4xl pt-4">
          El arte del vino <span className="italic font-light text-[#E96615]">en cada copa!</span>
        </h1>

        {/* Slogan */}
        <p className="mt-6 text-lg sm:text-2xl text-[#46042E] font-editorial italic tracking-wide max-w-2xl font-medium">
          “Tenemos el mejor vino del mundo, ¡EL QUE TE GUSTA A VOS!”
        </p>

        {/* Complementary Text */}
        <p className="mt-4 text-sm sm:text-base text-[#6E6259] max-w-2xl font-normal leading-relaxed">
          Un espacio para explorar nuevos sabores, encontrar tus favoritos y disfrutar el vino a tu manera. Curaduría exclusiva en San Carlos de Bariloche.
        </p>

        {/* Buttons / CTAs */}
        <div className="mt-9 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#catalogo"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#E96615] hover:bg-[#D4550C] text-white font-semibold text-sm uppercase tracking-wider transition-all duration-300 shadow-xl shadow-[#E96615]/25 hover:-translate-y-0.5"
          >
            <Compass className="w-4 h-4" />
            <span>Explorar vinos</span>
          </a>

          <a
            href={BUSINESS_CONFIG.uberEatsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white hover:bg-orange-50 text-[#46042E] border border-orange-200/90 hover:border-[#E96615] font-semibold text-sm uppercase tracking-wider transition-all duration-300 shadow-md hover:-translate-y-0.5"
          >
            <ShoppingBag className="w-4 h-4 text-[#E96615]" />
            <span>Hacer un pedido</span>
          </a>

          {onOpenAdvisor && (
            <button
              onClick={onOpenAdvisor}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white/80 hover:bg-orange-50 text-[#E96615] border border-orange-200/90 hover:border-[#E96615] text-xs uppercase tracking-wider transition-colors shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#E96615]" />
              <span>Sommelier Virtual</span>
            </button>
          )}
        </div>

        {/* Credibility / Local Pillars */}
        <div className="mt-14 pt-8 border-t border-[#EAE0D3] w-full grid grid-cols-1 sm:grid-cols-3 gap-6 text-left sm:text-center text-xs text-[#6E6259]">
          <div className="flex items-center sm:justify-center gap-2.5">
            <MapPin className="w-4 h-4 text-[#E96615] flex-shrink-0" />
            <span>San Carlos de Bariloche</span>
          </div>
          <div className="flex items-center sm:justify-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#E96615] flex-shrink-0" />
            <span>Catas Guiadas & Maridajes</span>
          </div>
          <div className="flex items-center sm:justify-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#E96615] flex-shrink-0" />
            <span>Envíos Uber Eats & WhatsApp</span>
          </div>
        </div>

        {/* Scroll Cue */}
        <a
          href="#catalogo"
          className="mt-10 inline-flex flex-col items-center text-[#E96615]/80 hover:text-[#E96615] transition-colors group"
          aria-label="Desplazarse al catálogo de vinos"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] mb-1 font-semibold">Catálogo</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
