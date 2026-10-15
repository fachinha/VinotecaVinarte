import React from 'react';

export const IdentityRibbon: React.FC = () => {
  return (
    <section id="identidad" className="relative py-16 sm:py-24 bg-[#201c1a] border-y border-[#B79A68]/15 overflow-hidden">
      {/* Subtle fine watermark line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-[#B79A68]/40 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-[#B79A68]/40 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Editorial Index / Serial */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-12 h-[1px] bg-[#B79A68]/40" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#B79A68] font-semibold">
            N° 01 • CURADURÍA & CULTURA VITIVINÍCOLA
          </span>
          <div className="w-12 h-[1px] bg-[#B79A68]/40" />
        </div>

        {/* Central Quote */}
        <blockquote className="font-editorial text-2xl sm:text-4xl md:text-5xl text-[#FCFAF6] font-normal leading-relaxed tracking-tight">
          “Cada botella tiene una <span className="italic text-[#B79A68]">historia</span>.
          <br className="hidden sm:inline" />
          La próxima puede ser la <span className="italic font-light">tuya</span>.”
        </blockquote>

        {/* Editorial Sign-off */}
        <p className="mt-6 text-xs sm:text-sm uppercase tracking-[0.2em] text-[#8C827A] font-medium">
          Selección de autor • Morales 438 • San Carlos de Bariloche
        </p>
      </div>
    </section>
  );
};
