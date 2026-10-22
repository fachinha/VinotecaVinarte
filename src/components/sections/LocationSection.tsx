import React from 'react';
import { MapPin, Navigation, Clock, Phone, ExternalLink } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../data/config';

export const LocationSection: React.FC = () => {
  return (
    <section id="ubicacion" className="py-20 sm:py-28 bg-[#FAF7F2] border-t border-b border-[#EAE0D3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#E96615] font-semibold block mb-2">
            San Carlos de Bariloche
          </span>
          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#261C20] font-normal tracking-tight">
            Encontranos.
          </h2>
          <p className="mt-3 text-base text-[#6E6259] font-normal">
            Un espacio cálido e íntimo para descubrir vinos de autor, catar nuevas etiquetas y llevarte la botella perfecta.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Info Card Column */}
          <div className="lg:col-span-5 bg-white p-8 sm:p-10 rounded-2xl border border-[#EAE0D3] shadow-md flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center text-[#E96615] flex-shrink-0 mt-1 shadow-xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-[#E96615] font-semibold">Dirección</h3>
                  <p className="font-editorial text-2xl text-[#261C20] font-medium mt-1">
                    {BUSINESS_CONFIG.address}
                  </p>
                  <p className="text-xs text-[#6E6259]">
                    {BUSINESS_CONFIG.city}, {BUSINESS_CONFIG.province}, Argentina
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center text-[#E96615] flex-shrink-0 mt-1 shadow-xs">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-[#E96615] font-semibold">Horarios Habituales</h3>
                  <p className="text-sm text-[#261C20] mt-1 font-semibold">
                    17:00 a 22:00 hs
                  </p>
                  <p className="text-xs text-[#6E6259] mt-0.5">
                    Catas y degustaciones guiadas con reserva previa vía WhatsApp.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center text-[#E96615] flex-shrink-0 mt-1 shadow-xs">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-[#E96615] font-semibold">Contacto & Reservas</h3>
                  <p className="text-sm text-[#261C20] mt-1 font-semibold">
                    {BUSINESS_CONFIG.phoneDisplay}
                  </p>
                  <p className="text-xs text-[#6E6259] mt-0.5">
                    Consultas directas por WhatsApp disponibles todos los días.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Google Maps Action */}
            <div className="pt-8 mt-8 border-t border-[#EAE0D3]">
              <a
                href={BUSINESS_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-[#E96615] hover:bg-[#D4550C] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-md shadow-[#E96615]/20 hover:-translate-y-0.5"
              >
                <Navigation className="w-4 h-4" />
                <span>Cómo llegar (Google Maps)</span>
                <ExternalLink className="w-3.5 h-3.5 text-white/80" />
              </a>
            </div>
          </div>

          {/* Map Visual Frame */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#EAE0D3] overflow-hidden relative min-h-[350px] sm:min-h-[420px] shadow-md flex flex-col">
            {/* Embedded OpenStreetMap clean natural view for Bariloche / Morales */}
            <iframe
              title="Ubicación Vinarte Vinoteca Morales 438 Bariloche"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-71.3160%2C-41.1385%2C-71.3050%2C-41.1305&amp;layer=mapnik&amp;marker=-41.1345%2C-71.3105"
              className="w-full h-full min-h-[350px] border-0"
              loading="lazy"
            />
            {/* Floating location card overlay */}
            <div className="absolute top-4 left-4 bg-white/95 border border-[#EAE0D3] px-4 py-2.5 rounded-xl backdrop-blur-md shadow-lg flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center">
                <MapPin className="w-3.5 h-3.5 text-[#E96615]" />
              </div>
              <div className="text-left">
                <span className="text-[10px] uppercase tracking-wider text-[#6E6259] font-medium block">Local Vinarte</span>
                <span className="text-xs font-semibold text-[#261C20]">Morales 438 • Bariloche</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
