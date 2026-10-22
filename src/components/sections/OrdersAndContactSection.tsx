import React from 'react';
import { ShoppingBag, MessageCircle, ArrowRight, ShieldCheck, Truck, Clock } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../data/config';

export const OrdersAndContactSection: React.FC = () => {
  return (
    <section id="contacto" className="py-20 sm:py-28 bg-[#F4EFE6] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-orange-200/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#E96615] font-semibold block mb-2">
            Canales Oficiales
          </span>
          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#261C20] font-normal tracking-tight">
            Pedidos & Contacto
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#6E6259] font-normal">
            Elegí cómo querés recibir tus vinos: hacé tu pedido online con delivery inmediato o escribinos para asesoramiento personalizado.
          </p>
        </div>

        {/* Dual Conversion Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1: Uber Eats Delivery */}
          <div className="bg-white border border-[#EAE0D3] hover:border-orange-300 p-8 sm:p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#E96615]">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#E96615] bg-white px-3 py-1 rounded-full border border-orange-200 shadow-xs">
                  Delivery Rápido
                </span>
              </div>

              <h3 className="font-editorial text-3xl text-[#46042E] font-semibold">
                Pedir por Uber Eats
              </h3>
              <p className="text-sm text-[#6E6259] mt-3 leading-relaxed">
                Accedé a la tienda oficial de Vinarte en Uber Eats para envíos en Bariloche con seguimiento en vivo.
              </p>

              <ul className="mt-6 space-y-2.5 text-xs text-[#261C20]">
                <li className="flex items-center gap-2">
                  <Truck className="w-3.5 h-3.5 text-[#E96615]" />
                  <span>Envíos a domicilio en San Carlos de Bariloche</span>
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#E96615]" />
                  <span>Horarios de despacho activos de tarde/noche</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-[#EAE0D3]">
              <a
                href={BUSINESS_CONFIG.uberEatsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-[#E96615] hover:bg-[#D4550C] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-md shadow-[#E96615]/20"
              >
                <span>Ir a la tienda de Uber Eats</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 2: Direct WhatsApp Sommelier */}
          <div className="bg-white border border-[#EAE0D3] hover:border-[#25D366] p-8 sm:p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366]">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#25D366] bg-white px-3 py-1 rounded-full border border-[#25D366]/30 shadow-xs">
                  Atención Directa
                </span>
              </div>

              <h3 className="font-editorial text-3xl text-[#261C20] font-semibold">
                Consultar por WhatsApp
              </h3>
              <p className="text-sm text-[#6E6259] mt-3 leading-relaxed">
                Comunicate de forma directa con nosotros para armar cajas a medida, consultar etiquetas especiales, reservar catas o coordinar retiros.
              </p>

              <ul className="mt-6 space-y-2.5 text-xs text-[#261C20]">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Asesoramiento sommelier sin compromiso</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
                  <span>Teléfono: {BUSINESS_CONFIG.phoneDisplay}</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-[#EAE0D3]">
              <a
                href={BUSINESS_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Escribir por WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
