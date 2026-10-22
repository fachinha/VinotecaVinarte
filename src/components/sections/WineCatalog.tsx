import React, { useState, useMemo, useRef } from 'react';
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
  const sectionRef = useRef<HTMLElement>(null);

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
      className="py-20 sm:py-28 bg-[#F4EFE6] border-t border-b border-[#EAE0D3] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#E96615] font-semibold mb-2">
              <Filter className="w-3.5 h-3.5" />
              <span>Explorador Interactivo</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl text-[#261C20] font-normal tracking-tight">
              Catálogo de Vinos
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#6E6259] max-w-xl">
              Explorá nuestra curaduría por estilo, origen geográfico o varietal. Todas las etiquetas cuentan con ficha técnica y opción de consulta directa.
            </p>
          </div>

          {/* Quick Counter */}
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-wider text-[#6E6259]">
              Mostrando <strong className="text-[#E96615]">{filteredWines.length}</strong> de {wines.length} etiquetas
            </span>
            {(selectedCategory !== 'todos' || selectedProvince !== 'todas' || searchQuery !== '') && (
              <button
                onClick={handleResetFilters}
                className="flex items-center gap-1.5 text-xs text-[#E96615] hover:text-[#D4550C] transition-colors underline underline-offset-4 font-medium"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Restablecer</span>
              </button>
            )}
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#EAE0D3] mb-10 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            {/* Search Input */}
            <div className="relative w-full md:flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#96887D]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por vino, bodega, varietal (ej: Pinot, Malbec, Semillón)..."
                className="w-full pl-11 pr-4 py-3 bg-[#FAF7F2] border border-[#EAE0D3] focus:border-[#E96615] rounded-xl text-sm text-[#261C20] placeholder-[#96887D] focus:outline-none focus:ring-1 focus:ring-[#E96615] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#96887D] hover:text-[#261C20] px-2 py-1 font-medium"
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
                className="w-full py-3 px-4 bg-[#FAF7F2] border border-[#EAE0D3] focus:border-[#E96615] rounded-xl text-sm text-[#261C20] focus:outline-none focus:ring-1 focus:ring-[#E96615]"
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
                      ? 'bg-[#E96615] text-white shadow-md shadow-[#E96615]/20'
                      : 'bg-white text-[#6E6259] hover:text-[#E96615] hover:bg-orange-50/60 border border-[#EAE0D3]'
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
                className="bg-white rounded-2xl border border-[#EAE0D3] overflow-hidden flex flex-col justify-between hover:border-orange-300 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-[#E96615]/10 group hover:-translate-y-1.5"
              >
                {/* Large Bottle Showcase Image */}
                <div
                  onClick={() => onSelectWine(wine)}
                  className="relative aspect-[4/5] bg-gradient-to-b from-orange-50/40 via-[#FAF7F2] to-[#F4EFE6] overflow-hidden flex items-center justify-center p-6 cursor-pointer"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

                  {/* Badge: Category & Vintage */}
                  <div className="absolute top-4 left-4 pointer-events-none">
                    <span className="text-[10px] uppercase tracking-widest font-semibold text-[#E96615] bg-white/95 border border-orange-200/90 px-3 py-1 rounded-full shadow-sm">
                      {wine.category.toUpperCase()} {wine.vintage && `• ${wine.vintage}`}
                    </span>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-6 pt-4 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-widest text-[#6E6259] font-medium block mb-1">
                      {wine.winery}
                    </span>
                    <h3
                      onClick={() => onSelectWine(wine)}
                      className="font-editorial text-2xl sm:text-3xl text-[#261C20] font-semibold leading-tight hover:text-[#E96615] transition-colors cursor-pointer"
                    >
                      {wine.name}
                    </h3>
                    <p className="mt-2 text-xs text-[#6E6259] line-clamp-2 leading-relaxed font-normal">
                      {wine.tastingNotes.aroma}
                    </p>
                  </div>

                  {/* Price & Actions */}
                  <div className="mt-6 pt-4 border-t border-[#EAE0D3] flex items-center justify-between gap-3">
                    <span className="font-editorial text-2xl text-[#E96615] font-semibold">
                      {wine.priceDisplay || 'Consultar'}
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onSelectWine(wine)}
                        className="px-4 py-2 rounded-full border border-[#EAE0D3] hover:border-[#E96615] bg-white hover:bg-orange-50 text-xs font-semibold uppercase tracking-wider text-[#261C20] hover:text-[#E96615] transition-all shadow-sm"
                        aria-label={`Ver detalles de ${wine.name}`}
                      >
                        VER
                      </button>

                      <a
                        href={BUSINESS_CONFIG.uberEatsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 bg-[#E96615] hover:bg-[#D4550C] text-white text-xs font-semibold px-4 py-2 rounded-full transition-all shadow-md shadow-[#E96615]/20 hover:-translate-y-0.5"
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
          <div className="text-center py-16 px-4 bg-white rounded-2xl border border-[#EAE0D3] max-w-lg mx-auto shadow-sm">
            <Sparkles className="w-8 h-8 text-[#E96615] mx-auto mb-3" />
            <h3 className="font-editorial text-2xl text-[#261C20] font-semibold">
              No encontramos etiquetas con esos filtros
            </h3>
            <p className="text-xs sm:text-sm text-[#6E6259] mt-2 mb-6">
              Probá restableciendo los criterios o consultanos por WhatsApp; podemos asesorarte de inmediato con el catálogo completo del local.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleResetFilters}
                className="px-5 py-2.5 rounded-full bg-[#E96615] text-white text-xs font-semibold uppercase tracking-wider shadow-md hover:bg-[#D4550C]"
              >
                Restablecer Filtros
              </button>
              <a
                href={BUSINESS_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-white border border-[#EAE0D3] hover:border-[#25D366] text-[#261C20] text-xs font-semibold uppercase tracking-wider flex items-center gap-2 hover:text-[#25D366] transition-colors shadow-sm"
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
