import React, { useState, useMemo, useEffect, useRef } from 'react';
import type { Wine, WineCategory } from '../../types';
import { DEMO_WINES } from '../../data/wines';
import { Search, Filter, RotateCcw, ShoppingBag, Sparkles, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../data/config';

interface WineCatalogProps {
  onSelectWine: (wine: Wine) => void;
  selectedCategoryFromParent?: WineCategory;
  wines?: Wine[];
}

export const WineCatalog: React.FC<WineCatalogProps> = ({
  onSelectWine,
  selectedCategoryFromParent,
  wines = DEMO_WINES,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<WineCategory>(selectedCategoryFromParent || 'todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProvince, setSelectedProvince] = useState<string>('todas');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories: { id: WineCategory; label: string }[] = [
    { id: 'todos', label: 'Todos' },
    { id: 'tintos', label: 'Tintos' },
    { id: 'blancos', label: 'Blancos' },
    { id: 'rosados', label: 'Rosados' },
    { id: 'espumantes', label: 'Espumantes' },
    { id: 'estuches', label: 'Estuches & Colección' },
    { id: 'patagonia', label: 'Terruño Patagónico' },
  ];

  // Filtered wines
  const filteredWines = useMemo(() => {
    return wines.filter((wine) => {
      // Category filter
      if (selectedCategory === 'tintos' && wine.category !== 'tintos') return false;
      if (selectedCategory === 'blancos' && wine.category !== 'blancos') return false;
      if (selectedCategory === 'rosados' && wine.category !== 'rosados') return false;
      if (selectedCategory === 'espumantes' && wine.category !== 'espumantes') return false;
      if (selectedCategory === 'estuches' && wine.category !== 'estuches') return false;
      if (selectedCategory === 'patagonia' && !wine.isPatagonian) return false;

      // Province filter
      if (selectedProvince !== 'todas' && wine.province !== selectedProvince) return false;

      // Search query (name, winery, varietal, region)
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = wine.name.toLowerCase().includes(query);
        const matchesWinery = wine.winery.toLowerCase().includes(query);
        const matchesVarietal = wine.varietal.toLowerCase().includes(query);
        const matchesRegion = wine.region.toLowerCase().includes(query);
        if (!matchesName && !matchesWinery && !matchesVarietal && !matchesRegion) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, selectedProvince, searchQuery, wines]);

  const handleResetFilters = () => {
    setSelectedCategory('todos');
    setSearchQuery('');
    setSelectedProvince('todas');
  };

  return (
    <section
      id="catalogo"
      ref={sectionRef}
      className="py-20 sm:py-28 bg-[#201c1a] border-t border-b border-[#B79A68]/15 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B79A68] font-semibold mb-2">
              <Filter className="w-3.5 h-3.5" />
              <span>Explorador Interactivo</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#FCFAF6] font-normal tracking-tight">
              Catálogo de Vinos
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#F4EFE5]/70 max-w-xl">
              Explorá nuestra curaduría por estilo, origen geográfico o varietal. Todas las etiquetas cuentan con ficha técnica y opción de consulta directa.
            </p>
          </div>

          {/* Quick Counter */}
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-wider text-[#A3988F]">
              Mostrando <strong className="text-[#B79A68]">{filteredWines.length}</strong> de {DEMO_WINES.length} etiquetas
            </span>
            {(selectedCategory !== 'todos' || selectedProvince !== 'todas' || searchQuery !== '') && (
              <button
                onClick={handleResetFilters}
                className="flex items-center gap-1.5 text-xs text-[#B79A68] hover:text-[#FCFAF6] transition-colors underline underline-offset-4"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Restablecer</span>
              </button>
            )}
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-[#171513] p-4 sm:p-5 rounded-2xl border border-white/10 mb-10 shadow-xl space-y-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Search Input */}
            <div className="relative w-full md:flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C827A]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por vino, bodega, varietal (ej: Pinot, Malbec, Semillón)..."
                className="w-full pl-11 pr-4 py-3 bg-[#201c1a] border border-white/10 focus:border-[#B79A68] rounded-xl text-sm text-[#FCFAF6] placeholder-[#8C827A] focus:outline-none focus:ring-1 focus:ring-[#B79A68] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8C827A] hover:text-[#FCFAF6] px-2 py-1"
                >
                  Limpiar
                </button>
              )}
            </div>

            {/* Region / Province dropdown */}
            <div className="w-full md:w-56">
              <select
                value={selectedProvince}
                onChange={(e) => setSelectedProvince(e.target.value)}
                className="w-full py-3 px-4 bg-[#201c1a] border border-white/10 focus:border-[#B79A68] rounded-xl text-sm text-[#FCFAF6] focus:outline-none focus:ring-1 focus:ring-[#B79A68]"
                aria-label="Filtrar por provincia o región"
              >
                <option value="todas">Todas las regiones</option>
                <option value="Río Negro">Patagonia: Río Negro</option>
                <option value="Neuquén">Patagonia: Neuquén</option>
                <option value="Mendoza">Mendoza (Valle de Uco)</option>
                <option value="Salta">Salta (Cafayate)</option>
              </select>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-2">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                    active
                      ? 'bg-[#B79A68] text-[#171513] shadow-md shadow-[#B79A68]/20'
                      : 'bg-[#201c1a] text-[#F4EFE5]/70 hover:text-[#FCFAF6] hover:bg-[#29151C] border border-white/5'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Catalog Grid */}
        {filteredWines.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredWines.map((wine, index) => (
              <div
                key={`${wine.id}-${selectedCategory}-${selectedProvince}-${searchQuery}`}
                style={{ animationDelay: `${Math.min(index * 110, 850)}ms` }}
                className={`bg-[#171513] rounded-2xl border border-white/10 overflow-hidden flex flex-col justify-between hover:border-[#B79A68]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#481B28]/30 group hover:-translate-y-1.5 ${
                  isVisible ? 'wine-appear' : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Large Bottle Showcase Image */}
                <div
                  onClick={() => onSelectWine(wine)}
                  className="relative aspect-[4/5] bg-gradient-to-b from-[#29151C]/60 via-[#171513]/40 to-[#171513] overflow-hidden flex items-center justify-center p-6 cursor-pointer"
                >
                  <img
                    src={wine.imageUrl}
                    alt={wine.name}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171513] via-transparent to-transparent opacity-75 pointer-events-none" />

                  {/* Badge: Category & Vintage */}
                  <div className="absolute top-4 left-4 pointer-events-none">
                    <span className="text-[10px] uppercase tracking-widest font-semibold text-[#B79A68] bg-[#171513]/90 border border-[#B79A68]/30 px-3 py-1 rounded-full backdrop-blur-md">
                      {wine.category.toUpperCase()} {wine.vintage && `• ${wine.vintage}`}
                    </span>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-6 pt-3 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-widest text-[#A3988F] font-medium block mb-1">
                      {wine.winery}
                    </span>
                    <h3
                      onClick={() => onSelectWine(wine)}
                      className="font-editorial text-2xl sm:text-3xl text-[#FCFAF6] font-semibold leading-tight hover:text-[#B79A68] transition-colors cursor-pointer"
                    >
                      {wine.name}
                    </h3>
                    <p className="mt-2 text-xs text-[#F4EFE5]/70 line-clamp-2 leading-relaxed font-light">
                      {wine.tastingNotes.aroma}
                    </p>
                  </div>

                  {/* Price & Actions */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                    <span className="font-editorial text-2xl text-[#B79A68] font-semibold">
                      {wine.priceDisplay || 'Consultar'}
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onSelectWine(wine)}
                        className="px-4 py-2 rounded-full border border-[#B79A68]/40 hover:border-[#B79A68] bg-[#201c1a] hover:bg-[#29151C] text-xs font-semibold uppercase tracking-wider text-[#FCFAF6] hover:text-[#B79A68] transition-all"
                        aria-label={`Ver detalles de ${wine.name}`}
                      >
                        VER
                      </button>

                      <a
                        href={BUSINESS_CONFIG.uberEatsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 bg-[#B79A68] hover:bg-[#c9af7e] text-[#171513] text-xs font-semibold px-4 py-2 rounded-full transition-all shadow-md hover:-translate-y-0.5"
                        title={`Pedir ${wine.name} en Uber Eats`}
                        aria-label={`Pedir ${wine.name} en Uber Eats`}
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Pedir</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16 px-4 bg-[#171513] rounded-2xl border border-white/10 max-w-lg mx-auto">
            <Sparkles className="w-8 h-8 text-[#B79A68] mx-auto mb-3" />
            <h3 className="font-editorial text-2xl text-[#FCFAF6] font-semibold">
              No encontramos etiquetas con esos filtros
            </h3>
            <p className="text-xs sm:text-sm text-[#A3988F] mt-2 mb-6">
              Probá restableciendo los criterios o consultanos por WhatsApp; podemos asesorarte de inmediato con el catálogo completo del local.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleResetFilters}
                className="px-5 py-2.5 rounded-full bg-[#B79A68] text-[#171513] text-xs font-semibold uppercase tracking-wider"
              >
                Restablecer Filtros
              </button>
              <a
                href={BUSINESS_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-[#29151C] border border-[#B79A68]/40 text-[#FCFAF6] text-xs font-semibold uppercase tracking-wider flex items-center gap-2"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Consultar Sommelier</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
