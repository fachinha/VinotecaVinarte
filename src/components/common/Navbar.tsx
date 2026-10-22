import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, MessageCircle, MapPin, User } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../data/config';

interface NavbarProps {
  onOpenAdvisor?: () => void;
  onOpenAdmin?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAdvisor, onOpenAdmin }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Catálogo', href: '#catalogo' },
    { label: 'Destacados', href: '#destacados' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Ubicación', href: '#ubicacion' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 py-2.5 shadow-sm border-b border-[#EAE0D3] backdrop-blur-md'
            : 'bg-gradient-to-b from-[#FAF7F2]/95 via-[#FAF7F2]/70 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Vinarte (Official image logo - crisp on light background) */}
            <a
              href="#inicio"
              className="group flex items-center gap-2.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E96615] rounded-lg"
              aria-label="Vinarte Vinoteca - Volver al inicio"
            >
              <img
                src="/vinarte-logo.png"
                alt="Vinarte Vinoteca"
                className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-7" aria-label="Navegación principal">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium tracking-wide text-[#261C20]/80 hover:text-[#E96615] transition-colors duration-200 relative py-1 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#E96615] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Header Actions */}
            <div className="hidden lg:flex items-center gap-3">
              {onOpenAdvisor && (
                <button
                  onClick={onOpenAdvisor}
                  className="text-xs uppercase tracking-wider font-semibold text-[#E96615] hover:text-white bg-orange-50/80 hover:bg-[#E96615] border border-orange-200/90 px-3.5 py-2 rounded-full transition-all duration-300 shadow-sm"
                >
                  ✨ ¿Qué vino elegir?
                </button>
              )}

              <a
                href={BUSINESS_CONFIG.uberEatsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider bg-[#E96615] hover:bg-[#D4550C] text-white px-4 py-2 rounded-full transition-all duration-300 shadow-md shadow-[#E96615]/20 transform hover:-translate-y-0.5"
                title="Hacer pedido online en Uber Eats"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Pedir Online</span>
              </a>

              <a
                href={BUSINESS_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white border border-[#EAE0D3] text-[#261C20] hover:text-[#25D366] hover:border-[#25D366] transition-all duration-200 shadow-sm"
                title="Contactar por WhatsApp"
                aria-label="Abrir chat de WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              {/* Admin Panel User Icon */}
              {onOpenAdmin && (
                <button
                  onClick={onOpenAdmin}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white border border-[#EAE0D3] text-[#5D5246] hover:text-[#E96615] hover:border-orange-300 hover:bg-orange-50 transition-all duration-200 shadow-sm"
                  title="Panel de Administración (Modificar Precios, Fotos y Productos)"
                  aria-label="Ingresar al Panel de Administración"
                >
                  <User className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Mobile Actions & Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              {onOpenAdmin && (
                <button
                  onClick={onOpenAdmin}
                  className="p-1.5 rounded-full text-[#5D5246] hover:text-[#E96615] border border-[#EAE0D3] bg-white shadow-sm"
                  title="Panel de Administración"
                  aria-label="Abrir panel de administración"
                >
                  <User className="w-4 h-4" />
                </button>
              )}

              <a
                href={BUSINESS_CONFIG.uberEatsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider bg-[#E96615] text-white px-3 py-1.5 rounded-full shadow-sm"
              >
                <ShoppingBag className="w-3 h-3" />
                <span>Pedir</span>
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#261C20] hover:text-[#E96615] focus:outline-none focus:ring-2 focus:ring-[#E96615]"
                aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Drawer Content */}
        <div
          className={`absolute top-0 right-0 w-4/5 max-w-sm h-full bg-[#FAF7F2] border-l border-[#EAE0D3] shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-[#EAE0D3]">
              <img
                src="/vinarte-logo.png"
                alt="Vinarte Vinoteca"
                className="h-8 w-auto object-contain"
              />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#6E6259] hover:text-[#E96615]"
                aria-label="Cerrar menú"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-3 mt-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-editorial text-xl text-[#261C20] hover:text-[#E96615] transition-colors py-2 border-b border-[#EAE0D3]/60"
                >
                  {link.label}
                </a>
              ))}
              {onOpenAdvisor && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAdvisor();
                  }}
                  className="text-left font-editorial text-lg text-[#E96615] hover:text-[#D4550C] transition-colors py-2"
                >
                  ✨ Asesor de Maridaje & Vinos
                </button>
              )}
              {onOpenAdmin && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAdmin();
                  }}
                  className="text-left font-editorial text-lg text-[#6E6259] hover:text-[#E96615] transition-colors py-2 flex items-center gap-2 border-t border-[#EAE0D3] mt-2"
                >
                  <User className="w-4 h-4 text-[#E96615]" />
                  <span>Panel de Administración</span>
                </button>
              )}
            </nav>
          </div>

          <div className="pt-6 border-t border-[#EAE0D3] flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs text-[#6E6259] mb-1">
              <MapPin className="w-3.5 h-3.5 text-[#E96615]" />
              <span>Morales 438, Bariloche</span>
            </div>

            <a
              href={BUSINESS_CONFIG.uberEatsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#E96615] text-white font-semibold text-sm uppercase tracking-wider py-3 rounded-full shadow-md hover:bg-[#D4550C] transition-colors"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Pedir en Uber Eats</span>
            </a>

            <a
              href={BUSINESS_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-white border border-[#EAE0D3] text-[#261C20] font-semibold text-sm py-3 rounded-full hover:border-[#25D366] hover:text-[#25D366] transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Consultar por WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
