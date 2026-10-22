import React, { useState } from 'react';
import { X, Sparkles, Utensils, Gift, PartyPopper, Check, ShoppingBag, ArrowRight } from 'lucide-react';
import { DEMO_WINES } from '../../data/wines';
import type { Wine } from '../../types';
import { BUSINESS_CONFIG } from '../../data/config';

interface WineSommelierAdvisorProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectWine: (wine: Wine) => void;
  wines?: Wine[];
}

type DiningOption = 'carnes' | 'pescados' | 'pastas' | 'picada' | 'celebrar';

export const WineSommelierAdvisor: React.FC<WineSommelierAdvisorProps> = ({
  isOpen,
  onClose,
  onSelectWine,
  wines = DEMO_WINES,
}) => {
  const [selectedDining, setSelectedDining] = useState<DiningOption>('carnes');

  if (!isOpen) return null;

  const diningChoices: { id: DiningOption; label: string; desc: string; icon: React.ReactNode }[] = [
    {
      id: 'carnes',
      label: 'Carnes rojas o Asado',
      desc: 'Ojo de bife, cordero patagónico o vacío a las brasas',
      icon: <Utensils className="w-4 h-4 text-[#B79A68]" />,
    },
    {
      id: 'pescados',
      label: 'Pescados & Mariscos',
      desc: 'Trucha del Nahuel Huapi, salmón o mariscos',
      icon: <Sparkles className="w-4 h-4 text-[#B79A68]" />,
    },
    {
      id: 'pastas',
      label: 'Pastas & Hongos de Pino',
      desc: 'Sorrentinos caseros, risotto o platos de bosque',
      icon: <Utensils className="w-4 h-4 text-[#B79A68]" />,
    },
    {
      id: 'picada',
      label: 'Tabla de Quesos & Ahumados',
      desc: 'Quesos de montaña, fiambres patagónicos y frutos secos',
      icon: <Gift className="w-4 h-4 text-[#B79A68]" />,
    },
    {
      id: 'celebrar',
      label: 'Brindis & Regalo Especial',
      desc: 'Aniversario, logro o momento único para celebrar',
      icon: <PartyPopper className="w-4 h-4 text-[#B79A68]" />,
    },
  ];

  // Matched wines based on selected dining
  const getMatchedWines = (): Wine[] => {
    switch (selectedDining) {
      case 'carnes':
        return wines
          .filter((w) => w.category === 'tintos' && (w.varietal.includes('Malbec') || w.varietal.includes('Cabernet') || w.varietal.includes('Gran Corte')))
          .slice(0, 4);
      case 'pescados':
        return wines
          .filter((w) => w.category === 'blancos' || (w.category === 'rosados' && w.varietal.includes('Sauvignon')))
          .slice(0, 4);
      case 'pastas':
        return wines
          .filter((w) => w.category === 'tintos' && (w.varietal.includes('Pinot') || w.varietal.includes('Blend') || w.varietal.includes('Cabernet Franc') || w.varietal.includes('Bonarda')))
          .slice(0, 4);
      case 'picada':
        return wines
          .filter((w) => w.category === 'rosados' || (w.category === 'tintos' && w.varietal.includes('Pinot')))
          .slice(0, 4);
      case 'celebrar':
        return wines
          .filter((w) => w.category === 'espumantes' || w.category === 'estuches')
          .slice(0, 4);
      default:
        return wines.slice(0, 4);
    }
  };

  const matches = getMatchedWines();

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="advisor-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-white border border-[#EAE0D3] rounded-2xl shadow-2xl z-10 p-6 sm:p-8 text-[#261C20] max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-[#EAE0D3]">
          <div>
            <span className="text-[11px] uppercase tracking-widest text-[#E96615] font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Sommelier Virtual Vinarte
            </span>
            <h2 id="advisor-title" className="font-editorial text-2xl sm:text-3xl text-[#46042E] font-semibold mt-1">
              ¿Qué vas a acompañar hoy?
            </h2>
            <p className="text-xs sm:text-sm text-[#6E6259] mt-1 font-normal">
              Seleccioná tu menú o plan y te recomendamos las etiquetas que mejor maridan.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#FAF7F2] border border-[#EAE0D3] flex items-center justify-center text-[#6E6259] hover:text-[#E96615] hover:border-[#E96615] transition-colors"
            aria-label="Cerrar recomendador"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Dining choices grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-5">
          {diningChoices.map((choice) => {
            const isSelected = selectedDining === choice.id;
            return (
              <button
                key={choice.id}
                onClick={() => setSelectedDining(choice.id)}
                className={`text-left p-3.5 rounded-xl border transition-all duration-200 flex items-start gap-3 ${
                  isSelected
                    ? 'bg-orange-50/80 border-[#E96615] shadow-sm ring-1 ring-[#E96615]'
                    : 'bg-[#FAF7F2] border-[#EAE0D3] hover:border-orange-200 hover:bg-orange-50/30'
                }`}
              >
                <div className="p-2 rounded-lg bg-white mt-0.5 shadow-xs border border-[#EAE0D3]/60">{choice.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#261C20]">{choice.label}</span>
                    {isSelected && <Check className="w-4 h-4 text-[#E96615]" />}
                  </div>
                  <p className="text-[11px] text-[#6E6259] mt-0.5 line-clamp-1">{choice.desc}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Recommended Matches */}
        <div>
          <h3 className="text-xs uppercase tracking-wider text-[#E96615] font-semibold mb-3">
            Recomendaciones Curadas para tu Selección:
          </h3>

          <div className="space-y-3">
            {matches.map((wine) => (
              <div
                key={wine.id}
                className="bg-[#FAF7F2] p-4 rounded-xl border border-[#EAE0D3] flex flex-col sm:flex-row items-center justify-between gap-4 hover:border-orange-300 transition-colors"
              >
                <div className="flex items-center gap-3.5 w-full sm:w-auto">
                  <img
                    src={wine.imageUrl}
                    alt={wine.name}
                    className="w-12 h-16 object-cover rounded-md flex-shrink-0 border border-[#EAE0D3]"
                  />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#E96615] font-semibold">
                      {wine.winery} • {wine.region}
                    </span>
                    <h4 className="font-editorial text-lg text-[#261C20] font-semibold">{wine.name}</h4>
                    <div className="flex items-center gap-2 mt-0.5">
                      <p className="text-xs text-[#6E6259]">{wine.varietal} {wine.vintage && `(${wine.vintage})`}</p>
                      {wine.priceDisplay && (
                        <span className="text-xs font-bold text-[#E96615]">
                          • {wine.priceDisplay}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                  <button
                    onClick={() => {
                      onClose();
                      onSelectWine(wine);
                    }}
                    className="px-3.5 py-2 rounded-full border border-[#EAE0D3] hover:border-[#E96615] bg-white text-[#261C20] hover:text-[#E96615] text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
                  >
                    Ver Ficha
                  </button>

                  <a
                    href={BUSINESS_CONFIG.uberEatsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 bg-[#E96615] hover:bg-[#D4550C] text-white text-xs font-semibold px-4 py-2 rounded-full transition-all shadow-md shadow-[#E96615]/20 hover:-translate-y-0.5"
                    title={`Pedir ${wine.name} en Uber Eats`}
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Pedir</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-6 pt-4 border-t border-[#EAE0D3] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-[11px] text-[#6E6259]">
            ¿Buscás algo específico o querés armar una caja personalizada?
          </p>
          <a
            href={BUSINESS_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E96615] hover:text-[#D4550C] transition-colors"
          >
            <span>Hablar con el Sommelier</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
