import React from 'react';
import { Star, MessageSquareQuote, ExternalLink } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../data/config';

export const GoogleReviewsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#F8F4EE] border-t border-[#EAE0D3] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Rating Stars Illustration */}
        <div className="flex items-center justify-center gap-1.5 text-[#E96615] mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-[#E96615]" />
          ))}
        </div>

        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#E96615] font-semibold mb-3">
          <MessageSquareQuote className="w-4 h-4" />
          <span>Tu opinión importa</span>
        </div>

        <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl text-[#261C20] font-normal tracking-tight">
          ¿Viniste a Vinarte? Nos encantaría conocer tu experiencia.
        </h2>

        <p className="mt-4 text-sm sm:text-base text-[#6E6259] max-w-xl mx-auto font-normal leading-relaxed">
          Las opiniones de quienes nos visitan en Bariloche nos inspiran a seguir descubriendo etiquetas excepcionales y brindando un servicio cálido y profesional.
        </p>

        {/* Action to Write Google Review */}
        <div className="mt-8 flex justify-center">
          <a
            href={BUSINESS_CONFIG.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#E96615] hover:bg-[#D4550C] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-md shadow-[#E96615]/20 hover:-translate-y-0.5"
          >
            <span>Dejar una reseña en Google</span>
            <ExternalLink className="w-4 h-4 text-white/80" />
          </a>
        </div>
      </div>
    </section>
  );
};
