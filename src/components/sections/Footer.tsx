import { MapPin, MessageCircle, ShoppingBag, ShieldCheck, Star } from 'lucide-react';
import { InstagramIcon } from '../common/InstagramIcon';
import { BUSINESS_CONFIG, SISTER_STORES } from '../../data/config';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC = () => {

  return (
    <footer id="contacto" className="bg-[#0e0d0c] text-[#F4EFE5] border-t border-[#B79A68]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/vinarte-logo.png"
                alt="Vinarte Vinoteca"
                className="h-10 w-auto object-contain"
              />
            </div>

            <p className="text-xs text-[#B79A68] italic font-editorial tracking-wide">
              “{BUSINESS_CONFIG.slogan}”
            </p>

            <p className="text-xs sm:text-sm text-[#A3988F] leading-relaxed max-w-sm">
              El vino como experiencia, descubrimiento y cultura. Selección cuidada de etiquetas patagónicas y nacionales en San Carlos de Bariloche.
            </p>

            {/* Social & Channel Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#171513] border border-white/10 hover:border-[#B79A68] flex items-center justify-center text-[#F4EFE5] hover:text-[#B79A68] transition-colors"
                aria-label="Perfil oficial de Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#171513] border border-white/10 hover:border-[#25D366] flex items-center justify-center text-[#F4EFE5] hover:text-[#25D366] transition-colors"
                aria-label="Contacto por WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#171513] border border-white/10 hover:border-[#B79A68] flex items-center justify-center text-[#F4EFE5] hover:text-[#B79A68] transition-colors"
                aria-label="Ubicación en Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_CONFIG.uberEatsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#171513] border border-white/10 hover:border-[#B79A68] flex items-center justify-center text-[#F4EFE5] hover:text-[#B79A68] transition-colors"
                aria-label="Tienda oficial de Uber Eats"
              >
                <ShoppingBag className="w-4 h-4" />
              </a>
            </div>

            {/* Otros Locales de la Familia */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B79A68]" />
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#B79A68] font-semibold">
                  Nuestros Otros Locales
                </span>
              </div>

              {SISTER_STORES.map((store) => (
                <div key={store.name} className="bg-[#171513] p-3.5 rounded-xl border border-white/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <h5 className="text-xs font-semibold text-[#FCFAF6] tracking-wide">
                      {store.name}
                    </h5>
                    <span className="text-[10px] text-[#A3988F] uppercase tracking-wider">{store.subtitle}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                    {store.whatsappUrl && (
                      <a
                        href={store.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#201c1a] hover:bg-[#25D366] text-[#FCFAF6] hover:text-white border border-white/10 hover:border-[#25D366] text-[11px] font-medium transition-colors"
                        title={`WhatsApp ${store.name}`}
                      >
                        <MessageCircle className="w-3 h-3 text-[#25D366]" />
                        <span>WhatsApp</span>
                      </a>
                    )}
                    {store.instagramUrl && (
                      <a
                        href={store.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#201c1a] hover:bg-[#29151C] text-[#FCFAF6] hover:text-[#B79A68] border border-white/10 hover:border-[#B79A68] text-[11px] font-medium transition-colors"
                        title={`Instagram ${store.name}`}
                      >
                        <InstagramIcon className="w-3 h-3 text-[#B79A68]" />
                        <span>Instagram</span>
                      </a>
                    )}
                    {'uberEatsUrl' in store && store.uberEatsUrl && (
                      <a
                        href={store.uberEatsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#201c1a] hover:bg-[#29151C] text-[#FCFAF6] hover:text-[#B79A68] border border-white/10 hover:border-[#B79A68] text-[11px] font-medium transition-colors"
                        title={`Uber Eats ${store.name}`}
                      >
                        <ShoppingBag className="w-3 h-3 text-[#B79A68]" />
                        <span>Uber Eats</span>
                      </a>
                    )}
                    {'googleMapsUrl' in store && store.googleMapsUrl && (
                      <a
                        href={store.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#201c1a] hover:bg-[#29151C] text-[#FCFAF6] hover:text-[#B79A68] border border-white/10 hover:border-[#B79A68] text-[11px] font-medium transition-colors"
                        title={`Cómo llegar a ${store.name}`}
                      >
                        <MapPin className="w-3 h-3 text-[#B79A68]" />
                        <span>Maps</span>
                      </a>
                    )}
                    {'googleReviewsUrl' in store && store.googleReviewsUrl && (
                      <a
                        href={store.googleReviewsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#201c1a] hover:bg-[#29151C] text-[#FCFAF6] hover:text-[#B79A68] border border-white/10 hover:border-[#B79A68] text-[11px] font-medium transition-colors"
                        title={`Dejar opinión para ${store.name}`}
                      >
                        <Star className="w-3 h-3 text-[#B79A68]" />
                        <span>Opiniones</span>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#B79A68] font-semibold mb-4">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs text-[#A3988F]">
              <li><a href="#inicio" className="hover:text-[#FCFAF6] transition-colors">Inicio</a></li>
              <li><a href="#catalogo" className="hover:text-[#FCFAF6] transition-colors">Catálogo de Vinos</a></li>
              <li><a href="#destacados" className="hover:text-[#FCFAF6] transition-colors">Vinos Destacados</a></li>
              <li><a href="#nosotros" className="hover:text-[#FCFAF6] transition-colors">Nosotros</a></li>
              <li><a href="#ubicacion" className="hover:text-[#FCFAF6] transition-colors">Ubicación</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#B79A68] font-semibold mb-4">
              Estilos & Terruños
            </h4>
            <ul className="space-y-2 text-xs text-[#A3988F]">
              <li><a href="#catalogo" className="hover:text-[#FCFAF6] transition-colors">Vinos Patagónicos</a></li>
              <li><a href="#catalogo" className="hover:text-[#FCFAF6] transition-colors">Pinot Noir & Malbec</a></li>
              <li><a href="#catalogo" className="hover:text-[#FCFAF6] transition-colors">Blancos & Semillón</a></li>
              <li><a href="#catalogo" className="hover:text-[#FCFAF6] transition-colors">Rosados & Espumantes</a></li>
              <li><a href="#catalogo" className="hover:text-[#FCFAF6] transition-colors">Vinos para Regalar</a></li>
            </ul>
          </div>

          {/* Visit & Channels */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#B79A68] font-semibold mb-4">
              Visitanos
            </h4>
            <div className="space-y-2.5 text-xs text-[#A3988F]">
              <p className="text-[#FCFAF6] font-medium">{BUSINESS_CONFIG.address}</p>
              <p>{BUSINESS_CONFIG.city}, {BUSINESS_CONFIG.province}</p>
              <p className="text-[11px] text-[#B79A68] pt-1">Tarde / Noche (17 a 22 hs)</p>
              <div className="pt-2">
                <a
                  href={BUSINESS_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#B79A68] hover:underline"
                >
                  WhatsApp: {BUSINESS_CONFIG.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Responsible Drinking Banner */}
        <div className="bg-[#171513] border border-[#B79A68]/20 rounded-xl p-4 mb-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#8C827A]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#B79A68] flex-shrink-0" />
            <span>
              <strong className="text-[#F4EFE5] mr-1">Consumo Responsable:</strong>
              {BUSINESS_CONFIG.legalAlcoholWarning}
            </span>
          </div>
          <span className="text-[11px] uppercase tracking-wider text-[#B79A68] font-semibold whitespace-nowrap">
            +18 Exclusivo
          </span>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C827A]">
          <p>© {CURRENT_YEAR} {BUSINESS_CONFIG.name}. Todos los derechos reservados. San Carlos de Bariloche, Patagonia Argentina.</p>
          <p className="flex items-center gap-1">
            <span>Hecho con dedicación para los amantes del vino</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
