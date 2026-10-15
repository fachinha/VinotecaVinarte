import React, { useState } from 'react';
import { X, Sparkles, Utensils, Gift, PartyPopper, Check, MessageCircle, ArrowRight } from 'lucide-react';
import { DEMO_WINES } from '../../data/wines';
import type { Wine } from '../../types';
import { getWineWhatsAppUrl, BUSINESS_CONFIG } from '../../data/config';

interface WineSommelierAdvisorProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectWine: (wine: Wine) => void;
}

type DiningOption = 'carnes' | 'pescados' | 'pastas' | 'picada' | 'celebrar';

export const WineSommelierAdvisor: React.FC<WineSommelierAdvisorProps> = ({
  isOpen,
  onClose,
  onSelectWine,
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
        return DEMO_WINES.filter((w) => w.varietal.includes('Malbec') || w.varietal.includes('Cabernet'));
      case 'pescados':
        return DEMO_WINES.filter((w) => w.varietal.includes('Chardonnay') || w.varietal.includes('Torrontés'));
      case 'pastas':
        return DEMO_WINES.filter((w) => w.varietal.includes('Pinot') || w.varietal.includes('Semillón'));
      case 'picada':
        return DEMO_WINES.filter((w) => w.category === 'rosados' || w.varietal.includes('Pinot'));
      case 'celebrar':
        return DEMO_WINES.filter((w) => w.category === 'espumantes' || w.name.includes('Ícono'));
      default:
        return DEMO_WINES.slice(0, 2);
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
      <div className="fixed inset-0 bg-[#0e0d0c]/85 backdrop-blur-md" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-[#201c1a] border border-[#B79A68]/30 rounded-2xl shadow-2xl z-10 p-6 sm:p-8 text-[#FCFAF6] max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-white/10">
          <div>
            <span className="text-[11px] uppercase tracking-widest text-[#B79A68] font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Sommelier Virtual Vinarte
            </span>
            <h2 id="advisor-title" className="font-editorial text-2xl sm:text-3xl text-[#FCFAF6] font-semibold mt-1">
              ¿Qué vas a acompañar hoy?
            </h2>
            <p className="text-xs sm:text-sm text-[#A3988F] mt-1">
              Seleccioná tu menú o plan y te recomendamos las etiquetas que mejor maridan.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#171513] border border-white/10 flex items-center justify-center text-[#F4EFE5]/70 hover:text-[#B79A68] transition-colors"
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
                    ? 'bg-[#29151C] border-[#B79A68] shadow-md ring-1 ring-[#B79A68]'
                    : 'bg-[#171513]/60 border-white/10 hover:border-[#B79A68]/40'
                }`}
              >
                <div className="p-2 rounded-lg bg-[#171513] mt-0.5">{choice.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#FCFAF6]">{choice.label}</span>
                    {isSelected && <Check className="w-4 h-4 text-[#B79A68]" />}
                  </div>
                  <p className="text-[11px] text-[#A3988F] mt-0.5 line-clamp-1">{choice.desc}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Recommended Matches */}
        <div>
          <h3 className="text-xs uppercase tracking-wider text-[#B79A68] font-semibold mb-3">
            Recomendaciones Curadas para tu Selección:
          </h3>

          <div className="space-y-3">
            {matches.map((wine) => (
              <div
                key={wine.id}
                className="bg-[#171513] p-4 rounded-xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 hover:border-[#B79A68]/40 transition-colors"
              >
                <div className="flex items-center gap-3.5 w-full sm:w-auto">
                  <img
                    src={wine.imageUrl}
                    alt={wine.name}
                    className="w-12 h-16 object-cover rounded-md flex-shrink-0 border border-white/5"
                  />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#B79A68] font-medium">
                      {wine.winery} • {wine.region}
                    </span>
                    <h4 className="font-editorial text-lg text-[#FCFAF6] font-semibold">{wine.name}</h4>
                    <p className="text-xs text-[#A3988F]">{wine.varietal} {wine.vintage && `(${wine.vintage})`}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                  <button
                    onClick={() => {
                      onClose();
                      onSelectWine(wine);
                    }}
                    className="px-3.5 py-2 rounded-full border border-[#B79A68]/40 hover:border-[#B79A68] text-[#F4EFE5] text-xs font-medium transition-colors"
                  >
                    Ver Ficha
                  </button>

                  <a
                    href={getWineWhatsAppUrl(wine.name, wine.winery)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 bg-[#25D366] hover:bg-[#22c35e] text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Consultar</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-[11px] text-[#8C827A]">
            ¿Buscás algo específico o querés armar una caja personalizada?
          </p>
          <a
            href={BUSINESS_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B79A68] hover:text-[#FCFAF6] transition-colors"
          >
            <span>Hablar con el Sommelier</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
