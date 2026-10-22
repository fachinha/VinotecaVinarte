import React from 'react';

export const IdentityRibbon: React.FC = () => {
  return (
    <section id="identidad" className="relative py-16 sm:py-24 bg-[#F4EFE6] border-y border-[#EAE0D3] overflow-hidden">
      {/* Subtle fine watermark line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-[#E96615]/30 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-[#E96615]/30 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Editorial Index / Serial */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-12 h-[1px] bg-[#E96615]/40" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#E96615] font-semibold">
            N° 01 • CURADURÍA & CULTURA VITIVINÍCOLA
          </span>
          <div className="w-12 h-[1px] bg-[#E96615]/40" />
        </div>

        {/* Central Quote */}
        <blockquote className="font-editorial text-2xl sm:text-4xl md:text-5xl text-[#46042E] font-normal leading-relaxed tracking-tight">
          “Cada botella tiene una <span className="italic text-[#E96615]">historia</span>.
          <br className="hidden sm:inline" />
          La próxima puede ser la <span className="italic font-light text-[#261C20]">tuya</span>.”
        </blockquote>

        {/* Editorial Sign-off */}
        <p className="mt-6 text-xs sm:text-sm uppercase tracking-[0.2em] text-[#6E6259] font-medium">
          Selección de autor • Morales 438 • San Carlos de Bariloche
        </p>
      </div>
    </section>
  );
};
