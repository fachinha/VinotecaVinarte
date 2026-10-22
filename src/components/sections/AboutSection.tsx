import React from 'react';
import { Wine, Users, HeartHandshake, MessageCircle, MapPin } from 'lucide-react';
import { getCustomConsultationWhatsAppUrl } from '../../data/config';

export const AboutSection: React.FC = () => {
  return (
    <section id="nosotros" className="py-24 sm:py-32 bg-[#F8F4EE] relative overflow-hidden border-t border-b border-[#EAE0D3]">
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-200/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-amber-100/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        

        {/* 2-Column Story & Photos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Showcase (Real Shop Photos) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Photo: The Shop Tasting Room */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#EAE0D3] group">
                <img
                  src="/vinarte-local.jpg"
                  alt="Espacio de catas y salón de Vinarte Vinoteca en Morales 438, Bariloche"
                  className="w-full h-[400px] sm:h-[480px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#EAE0D3] flex items-center justify-between shadow-lg">
                  <div>
                    <p className="text-xs font-semibold text-[#261C20] tracking-wide">Morales 438 • Bariloche</p>
                    <p className="text-[11px] text-[#E96615] font-medium">Salón de catas, selección patagónica y atención cálida</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-[#E96615]" />
                  </div>
                </div>
              </div>

              {/* Floating Accent Card: Custom Wine */}
              <div className="hidden sm:flex absolute -bottom-8 -right-6 w-52 p-3 rounded-xl bg-white border border-orange-200 shadow-xl items-center gap-3 transform hover:-translate-y-1 transition-transform">
                <img
                  src="/vinarte-botella-autor.jpg"
                  alt="Vinarte Terapeuta vino de autor"
                  className="w-12 h-16 object-cover rounded-lg border border-orange-100"
                />
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#E96615] font-bold block">Edición Especial</span>
                  <span className="text-xs text-[#261C20] font-semibold leading-snug block">Vinos de Autor & Terruño</span>
                </div>
              </div>

            </div>
          </div>

          {/* Narrative & Pillars */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-xs uppercase tracking-[0.2em] text-[#E96615] font-semibold mb-2">
              Sobre Nosotros
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl text-[#46042E] mb-6 leading-snug font-semibold">
              Una vinoteca creada para disfrutar, descubrir y compartir sin pretensiones.
            </h3>
            
            <div className="space-y-4 text-sm sm:text-base text-[#6E6259] font-normal leading-relaxed">
              <p>
                En <strong className="text-[#261C20] font-semibold">Vinarte Vinoteca</strong> entendemos el vino como un puente de encuentro. Ubicados en San Carlos de Bariloche, seleccionamos con pasión y criterio independiente etiquetas de pequeños y grandes productores de Río Negro, Neuquén y las regiones vitivinícolas más prestigiosas de Argentina.
              </p>
              <p>
                No buscamos imponerte qué tomar: nuestra vocación es escucharte, entender qué buscás para cada ocasión y encontrar esa botella exacta que te haga disfrutar al máximo.
              </p>
            </div>

            {/* 3 Pillars */}
            <div className="mt-8 space-y-4">
              <div className="p-4 rounded-xl bg-white border border-[#EAE0D3] flex items-start gap-4 hover:border-orange-300 transition-colors shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-orange-50 border border-orange-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Wine className="w-5 h-5 text-[#E96615]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#261C20]">Degustaciones & Catas Guiadas</h4>
                  <p className="text-xs text-[#6E6259] mt-1 leading-relaxed">
                    Experiencias sensoriales personalizadas en nuestro salón para grupos reducidos, turistas y amantes del buen vino.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#EAE0D3] flex items-start gap-4 hover:border-orange-300 transition-colors shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-orange-50 border border-orange-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Users className="w-5 h-5 text-[#E96615]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#261C20]">Eventos Privados & Corporativos</h4>
                  <p className="text-xs text-[#6E6259] mt-1 leading-relaxed">
                    Brindis a medida, celebraciones y regalos empresariales con packaging distinguido y asesoramiento enológico completo.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#EAE0D3] flex items-start gap-4 hover:border-orange-300 transition-colors shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-orange-50 border border-orange-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <HeartHandshake className="w-5 h-5 text-[#E96615]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#261C20]">Asesoramiento en Maridajes & Regalos</h4>
                  <p className="text-xs text-[#6E6259] mt-1 leading-relaxed">
                    Combiná etiquetas con los productos de nuestras tiendas hermanas (Pollería y Fiambrería Belgrano) para una mesa inolvidable.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={getCustomConsultationWhatsAppUrl('Degustaciones y visitas a la vinoteca')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#E96615] hover:bg-[#D4550C] text-white text-xs uppercase tracking-wider font-semibold transition-all shadow-md shadow-[#E96615]/20 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Reservar Degustación</span>
              </a>

              <a
                href="#ubicacion"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-orange-50 border border-[#EAE0D3] hover:border-[#E96615] text-[#261C20] hover:text-[#E96615] text-xs uppercase tracking-wider font-medium transition-colors shadow-sm"
              >
                <MapPin className="w-4 h-4 text-[#E96615]" />
                <span>Cómo llegar al local</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
