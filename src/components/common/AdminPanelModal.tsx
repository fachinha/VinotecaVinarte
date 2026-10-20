import React, { useState, useId } from 'react';
import type { Wine } from '../../types';
import { 
  X, Lock, Unlock, Plus, Trash2, RotateCcw, 
  Search, Image as ImageIcon, Check, AlertCircle 
} from 'lucide-react';

interface AdminPanelModalProps {
  isOpen: boolean;
  onClose: () => void;
  wines: Wine[];
  onUpdateWines: (updatedWines: Wine[]) => void;
  onResetWines: () => void;
}

export const AdminPanelModal: React.FC<AdminPanelModalProps> = ({
  isOpen,
  onClose,
  wines,
  onUpdateWines,
  onResetWines,
}) => {
  const pinInputId = useId();
  // PIN Protection State
  const [pin, setPin] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinError, setPinError] = useState(false);

  // Active Tab: 'edit' | 'add' | 'settings'
  const [activeTab, setActiveTab] = useState<'edit' | 'add' | 'settings'>('edit');
  const [searchQuery, setSearchQuery] = useState('');
  const [notification, setNotification] = useState<string | null>(null);

  // Form state for adding new wine
  const [newWine, setNewWine] = useState<Partial<Wine>>({
    name: '',
    winery: '',
    varietal: 'Malbec',
    category: 'tintos',
    region: 'Alto Valle de Río Negro',
    province: 'Río Negro',
    vintage: '2024',
    price: 18000,
    imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80',
    tastingNotes: {
      aroma: 'Frutos rojos maduros, especias y notas sutiles de madera.',
      palate: 'Entrada fresca, taninos sedosos y final persistente.',
      foodPairing: 'Carnes rojas asadas, tablas de quesos y pastas rellenas.',
    },
    occasions: ['compartir', 'descubrir'],
    isFeatured: false,
    isPatagonian: true,
  });

  if (!isOpen) return null;

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === '1234' || pin === 'vinarte' || pin === 'admin') {
      setIsAuthenticated(true);
      setPinError(false);
    } else {
      setPinError(true);
    }
  };

  const handlePriceChange = (id: string, newPrice: number) => {
    const updated = wines.map((w) => {
      if (w.id === id) {
        return {
          ...w,
          price: newPrice,
          priceDisplay: newPrice > 0 ? `$${newPrice.toLocaleString('es-AR')}` : 'Consultar',
        };
      }
      return w;
    });
    onUpdateWines(updated);
    showNotification('Precio actualizado');
  };

  const handleImageChange = (id: string, newImageUrl: string) => {
    const updated = wines.map((w) => {
      if (w.id === id) {
        return {
          ...w,
          imageUrl: newImageUrl,
        };
      }
      return w;
    });
    onUpdateWines(updated);
    showNotification('Foto actualizada');
  };

  const handleDeleteWine = (id: string, name: string) => {
    if (window.confirm(`¿Estás seguro de eliminar "${name}" del catálogo?`)) {
      const updated = wines.filter((w) => w.id !== id);
      onUpdateWines(updated);
      showNotification(`"${name}" eliminado`);
    }
  };

  const handleAddWineSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newWine.name || !newWine.winery) {
      alert('Por favor completá al menos el nombre del vino y la bodega.');
      return;
    }

    const priceNum = Number(newWine.price) || 0;
    const wineToAdd: Wine = {
      id: `custom-${Date.now()}`,
      name: newWine.name || 'Nuevo Vino',
      winery: newWine.winery || 'Bodega',
      varietal: newWine.varietal || 'Malbec',
      category: (newWine.category as Wine['category']) || 'tintos',
      region: newWine.region || 'Patagonia',
      province: (newWine.province as Wine['province']) || 'Río Negro',
      vintage: newWine.vintage || '2024',
      price: priceNum,
      priceDisplay: priceNum > 0 ? `$${priceNum.toLocaleString('es-AR')}` : 'Consultar',
      imageUrl: newWine.imageUrl || 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80',
      tastingNotes: {
        aroma: newWine.tastingNotes?.aroma || 'Aromas frutados y notas especiadas.',
        palate: newWine.tastingNotes?.palate || 'Equilibrado con taninos amables.',
        foodPairing: newWine.tastingNotes?.foodPairing || 'Ideal para acompañar carnes o pastas.',
      },
      occasions: newWine.occasions || ['compartir'],
      isFeatured: !!newWine.isFeatured,
      isPatagonian: !!newWine.isPatagonian,
    };

    const updated = [wineToAdd, ...wines];
    onUpdateWines(updated);
    showNotification(`¡"${wineToAdd.name}" agregado con éxito!`);
    setActiveTab('edit');
  };

  const filteredLocalWines = wines.filter(
    (w) =>
      w.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      w.winery.toLowerCase().includes(searchQuery.toLowerCase()) ||
      w.varietal.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#0E0C0A]/85 backdrop-blur-md" 
        onClick={onClose} 
      />

      {/* Modal Dialog Container */}
      <div className="relative w-full max-w-4xl bg-[#1C1816] border border-[#B79A68]/40 rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden z-10 text-[#FCFAF6]">
        
        {/* Top Header */}
        <div className="px-6 py-4 bg-[#29151C] border-b border-[#B79A68]/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#B79A68]/20 border border-[#B79A68]/40 flex items-center justify-center text-[#B79A68]">
              {isAuthenticated ? <Unlock className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
            </div>
            <div>
              <h3 className="font-editorial text-lg sm:text-xl font-bold tracking-wide text-[#FCFAF6]">
                Panel de Administración
              </h3>
              <p className="text-[11px] text-[#B79A68]/90">
                Gestión de catálogo, precios y fotos • Vinarte Vinoteca
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#F4EFE5]/70 hover:text-[#FCFAF6] hover:bg-white/10 transition-colors"
            title="Cerrar panel"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Notification Toast */}
        {notification && (
          <div className="bg-[#B79A68] text-[#171513] text-xs font-semibold px-4 py-2 flex items-center justify-center gap-2 animate-fade-in">
            <Check className="w-4 h-4" />
            <span>{notification}</span>
          </div>
        )}

        {/* Content Body */}
        {!isAuthenticated ? (
          /* PIN Gate */
          <div className="p-8 sm:p-12 flex flex-col items-center text-center max-w-md mx-auto my-auto">
            <div className="w-16 h-16 rounded-full bg-[#29151C] border border-[#B79A68]/50 flex items-center justify-center mb-6 shadow-xl">
              <Lock className="w-8 h-8 text-[#B79A68]" />
            </div>
            
            <h4 className="font-editorial text-2xl font-bold text-[#FCFAF6] mb-2">
              Acceso Exclusivo Administración
            </h4>
            <p className="text-sm text-[#A3988F] mb-6">
              Ingresá el PIN de seguridad para modificar precios, cambiar imágenes o dar de alta nuevos vinos.
            </p>

            <form onSubmit={handlePinSubmit} className="w-full space-y-4">
              <div>
                <label htmlFor={pinInputId} className="sr-only">
                  PIN de seguridad
                </label>
                <input
                  id={pinInputId}
                  type="password"
                  maxLength={10}
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  placeholder="Ingresá el PIN (ej: 1234)"
                  className="w-full text-center tracking-widest text-lg font-mono px-4 py-3 bg-[#131110] border border-[#B79A68]/40 rounded-xl focus:outline-none focus:border-[#B79A68] text-[#FCFAF6]"
                  autoFocus
                />
              </div>

              {pinError && (
                <div className="flex items-center justify-center gap-1.5 text-xs text-red-400">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>PIN incorrecto. Probá con 1234.</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-[#B79A68] hover:bg-[#c9af7e] text-[#171513] font-semibold text-sm uppercase tracking-wider transition-all shadow-lg"
              >
                Ingresar al Panel
              </button>
            </form>

            <p className="text-[11px] text-[#A3988F]/70 mt-6">
              💡 <em>PIN de demostración: <strong>1234</strong></em>
            </p>
          </div>
        ) : (
          /* Authenticated Dashboard */
          <div className="flex flex-col flex-1 overflow-hidden">
            {/* Tabs Bar */}
            <div className="px-6 py-2.5 bg-[#141211] border-b border-white/10 flex items-center justify-between gap-4 overflow-x-auto">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('edit')}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors ${
                    activeTab === 'edit'
                      ? 'bg-[#B79A68] text-[#171513]'
                      : 'text-[#F4EFE5]/70 hover:text-[#FCFAF6] hover:bg-white/5'
                  }`}
                >
                  Modificar Precios y Fotos ({wines.length})
                </button>
                <button
                  onClick={() => setActiveTab('add')}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-1.5 ${
                    activeTab === 'add'
                      ? 'bg-[#B79A68] text-[#171513]'
                      : 'text-[#F4EFE5]/70 hover:text-[#FCFAF6] hover:bg-white/5'
                  }`}
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Agregar Vino</span>
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors ${
                    activeTab === 'settings'
                      ? 'bg-[#B79A68] text-[#171513]'
                      : 'text-[#F4EFE5]/70 hover:text-[#FCFAF6] hover:bg-white/5'
                  }`}
                >
                  Ajustes & Respaldo
                </button>
              </div>

              <div className="text-xs text-[#B79A68] flex items-center gap-2 flex-shrink-0">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Cambios guardados en vivo</span>
              </div>
            </div>

            {/* Tab 1: Edit Prices & Photos */}
            {activeTab === 'edit' && (
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
                {/* Search in admin */}
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#A3988F]" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar vino por nombre, bodega o varietal para editar..."
                    className="w-full pl-10 pr-4 py-2.5 bg-[#141211] border border-[#B79A68]/30 rounded-xl text-sm text-[#FCFAF6] placeholder-[#A3988F] focus:outline-none focus:border-[#B79A68]"
                  />
                </div>

                <div className="space-y-3">
                  {filteredLocalWines.map((wine) => (
                    <div
                      key={wine.id}
                      className="p-4 rounded-xl bg-[#231F1C] border border-[#B79A68]/20 hover:border-[#B79A68]/40 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
                    >
                      {/* Wine Info & Preview */}
                      <div className="flex items-center gap-3.5 min-w-[240px]">
                        <div className="w-14 h-16 rounded-lg overflow-hidden bg-[#141211] border border-[#B79A68]/30 flex-shrink-0 relative group">
                          <img
                            src={wine.imageUrl}
                            alt={wine.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              // Fallback on broken image
                              (e.currentTarget as HTMLImageElement).src =
                                'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=300&q=80';
                            }}
                          />
                        </div>

                        <div>
                          <p className="text-[11px] uppercase tracking-wider text-[#B79A68] font-medium">
                            {wine.winery} • {wine.varietal}
                          </p>
                          <h4 className="font-editorial text-base text-[#FCFAF6] font-bold leading-tight">
                            {wine.name}
                          </h4>
                          <p className="text-xs text-[#A3988F]">
                            {wine.region} {wine.vintage ? `(${wine.vintage})` : ''}
                          </p>
                        </div>
                      </div>

                      {/* Edit Inputs */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1 max-w-xl">
                        {/* Price Input */}
                        <div>
                          <label className="block text-[10px] uppercase tracking-wider text-[#A3988F] mb-1">
                            Precio en ARS ($)
                          </label>
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-[#B79A68] font-bold">
                              $
                            </span>
                            <input
                              type="number"
                              defaultValue={wine.price || 0}
                              onBlur={(e) => handlePriceChange(wine.id, Number(e.target.value))}
                              className="w-full pl-7 pr-3 py-1.5 bg-[#141211] border border-white/15 rounded-lg text-sm font-semibold text-[#FCFAF6] focus:border-[#B79A68] focus:outline-none"
                            />
                          </div>
                        </div>

                        {/* Image URL Input */}
                        <div>
                          <label className="block text-[10px] uppercase tracking-wider text-[#A3988F] mb-1">
                            URL de la Foto / Imagen
                          </label>
                          <div className="relative">
                            <ImageIcon className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#A3988F]" />
                            <input
                              type="text"
                              defaultValue={wine.imageUrl}
                              onBlur={(e) => handleImageChange(wine.id, e.target.value)}
                              className="w-full pl-8 pr-3 py-1.5 bg-[#141211] border border-white/15 rounded-lg text-xs text-[#FCFAF6] focus:border-[#B79A68] focus:outline-none truncate"
                              title={wine.imageUrl}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Delete Action */}
                      <div className="flex items-center justify-end">
                        <button
                          onClick={() => handleDeleteWine(wine.id, wine.name)}
                          className="p-2 rounded-lg text-red-400 hover:text-red-300 hover:bg-red-950/40 transition-colors"
                          title="Eliminar vino del catálogo"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}

                  {filteredLocalWines.length === 0 && (
                    <div className="text-center py-12 text-[#A3988F] text-sm">
                      No se encontraron vinos que coincidan con la búsqueda.
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Tab 2: Add New Wine Form */}
            {activeTab === 'add' && (
              <form onSubmit={handleAddWineSubmit} className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#B79A68] mb-1">
                      Nombre del Vino *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej: Gran Reserva Malbec"
                      value={newWine.name || ''}
                      onChange={(e) => setNewWine({ ...newWine, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#141211] border border-white/20 rounded-xl text-sm text-[#FCFAF6] focus:border-[#B79A68] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#B79A68] mb-1">
                      Bodega / Productor *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej: Bodega Noemía"
                      value={newWine.winery || ''}
                      onChange={(e) => setNewWine({ ...newWine, winery: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#141211] border border-white/20 rounded-xl text-sm text-[#FCFAF6] focus:border-[#B79A68] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#B79A68] mb-1">
                      Varietal (Cepa)
                    </label>
                    <input
                      type="text"
                      placeholder="Ej: Pinot Noir, Malbec, Cabernet Franc"
                      value={newWine.varietal || ''}
                      onChange={(e) => setNewWine({ ...newWine, varietal: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#141211] border border-white/20 rounded-xl text-sm text-[#FCFAF6] focus:border-[#B79A68] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#B79A68] mb-1">
                      Categoría
                    </label>
                    <select
                      value={newWine.category || 'tintos'}
                      onChange={(e) => setNewWine({ ...newWine, category: e.target.value as any })}
                      className="w-full px-3.5 py-2.5 bg-[#141211] border border-white/20 rounded-xl text-sm text-[#FCFAF6] focus:border-[#B79A68] focus:outline-none"
                    >
                      <option value="tintos">Tintos</option>
                      <option value="blancos">Blancos</option>
                      <option value="rosados">Rosados</option>
                      <option value="espumantes">Espumantes</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#B79A68] mb-1">
                      Región / Valle
                    </label>
                    <input
                      type="text"
                      placeholder="Ej: Alto Valle de Río Negro"
                      value={newWine.region || ''}
                      onChange={(e) => setNewWine({ ...newWine, region: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#141211] border border-white/20 rounded-xl text-sm text-[#FCFAF6] focus:border-[#B79A68] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#B79A68] mb-1">
                      Provincia
                    </label>
                    <select
                      value={newWine.province || 'Río Negro'}
                      onChange={(e) => setNewWine({ ...newWine, province: e.target.value as any })}
                      className="w-full px-3.5 py-2.5 bg-[#141211] border border-white/20 rounded-xl text-sm text-[#FCFAF6] focus:border-[#B79A68] focus:outline-none"
                    >
                      <option value="Río Negro">Río Negro</option>
                      <option value="Neuquén">Neuquén</option>
                      <option value="Mendoza">Mendoza</option>
                      <option value="Salta">Salta</option>
                      <option value="San Juan">San Juan</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#B79A68] mb-1">
                      Precio ($ ARS)
                    </label>
                    <input
                      type="number"
                      placeholder="Ej: 22000"
                      value={newWine.price || ''}
                      onChange={(e) => setNewWine({ ...newWine, price: Number(e.target.value) })}
                      className="w-full px-3.5 py-2.5 bg-[#141211] border border-white/20 rounded-xl text-sm text-[#FCFAF6] focus:border-[#B79A68] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#B79A68] mb-1">
                      Añada (Año)
                    </label>
                    <input
                      type="text"
                      placeholder="Ej: 2022"
                      value={newWine.vintage || ''}
                      onChange={(e) => setNewWine({ ...newWine, vintage: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#141211] border border-white/20 rounded-xl text-sm text-[#FCFAF6] focus:border-[#B79A68] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Image URL & Preview */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#B79A68] mb-1">
                    URL de la Foto
                  </label>
                  <div className="flex gap-3 items-center">
                    <input
                      type="text"
                      placeholder="https://... o ruta de imagen"
                      value={newWine.imageUrl || ''}
                      onChange={(e) => setNewWine({ ...newWine, imageUrl: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#141211] border border-white/20 rounded-xl text-sm text-[#FCFAF6] focus:border-[#B79A68] focus:outline-none"
                    />
                    {newWine.imageUrl && (
                      <div className="w-10 h-10 rounded-lg overflow-hidden border border-[#B79A68]/40 flex-shrink-0">
                        <img
                          src={newWine.imageUrl}
                          alt="Previsualización"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Tasting notes */}
                <div className="space-y-3 pt-2 border-t border-white/10">
                  <h5 className="text-xs uppercase tracking-wider text-[#FCFAF6] font-semibold">
                    Notas de Cata y Maridaje
                  </h5>
                  <div>
                    <label className="block text-[11px] text-[#A3988F] mb-1">Aroma y Nariz</label>
                    <input
                      type="text"
                      placeholder="Ej: Frutos rojos silvestres, pimienta negra y sutil toque de roble"
                      value={newWine.tastingNotes?.aroma || ''}
                      onChange={(e) =>
                        setNewWine({
                          ...newWine,
                          tastingNotes: { ...newWine.tastingNotes!, aroma: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 bg-[#141211] border border-white/15 rounded-lg text-xs text-[#FCFAF6]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-[#A3988F] mb-1">Boca y Estilo</label>
                    <input
                      type="text"
                      placeholder="Ej: Entrada amable, buena frescura y final prolongado"
                      value={newWine.tastingNotes?.palate || ''}
                      onChange={(e) =>
                        setNewWine({
                          ...newWine,
                          tastingNotes: { ...newWine.tastingNotes!, palate: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 bg-[#141211] border border-white/15 rounded-lg text-xs text-[#FCFAF6]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-[#A3988F] mb-1">Maridaje Recomendado</label>
                    <input
                      type="text"
                      placeholder="Ej: Cordero patagónico, pastas con salsas cremosas"
                      value={newWine.tastingNotes?.foodPairing || ''}
                      onChange={(e) =>
                        setNewWine({
                          ...newWine,
                          tastingNotes: { ...newWine.tastingNotes!, foodPairing: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 bg-[#141211] border border-white/15 rounded-lg text-xs text-[#FCFAF6]"
                    />
                  </div>
                </div>

                {/* Checkboxes */}
                <div className="flex flex-wrap gap-6 pt-2">
                  <label className="flex items-center gap-2 cursor-pointer text-xs text-[#FCFAF6]">
                    <input
                      type="checkbox"
                      checked={!!newWine.isPatagonian}
                      onChange={(e) => setNewWine({ ...newWine, isPatagonian: e.target.checked })}
                      className="w-4 h-4 rounded border-gray-600 accent-[#B79A68]"
                    />
                    <span>¿Es Vino Patagónico?</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-xs text-[#FCFAF6]">
                    <input
                      type="checkbox"
                      checked={!!newWine.isFeatured}
                      onChange={(e) => setNewWine({ ...newWine, isFeatured: e.target.checked })}
                      className="w-4 h-4 rounded border-gray-600 accent-[#B79A68]"
                    />
                    <span>¿Mostrar en Vinos Destacados?</span>
                  </label>
                </div>

                <div className="pt-4 border-t border-white/10 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveTab('edit')}
                    className="px-5 py-2.5 rounded-xl border border-white/20 text-xs font-semibold text-[#FCFAF6] hover:bg-white/5 transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-[#B79A68] hover:bg-[#c9af7e] text-[#171513] text-xs font-bold uppercase tracking-wider transition-all shadow-lg"
                  >
                    Guardar y Agregar al Catálogo
                  </button>
                </div>
              </form>
            )}

            {/* Tab 3: Settings & Backup */}
            {activeTab === 'settings' && (
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                <div className="p-5 rounded-xl bg-[#231F1C] border border-[#B79A68]/20">
                  <h4 className="font-editorial text-lg text-[#FCFAF6] font-bold mb-2">
                    Restablecer Catálogo Original
                  </h4>
                  <p className="text-xs text-[#A3988F] mb-4 leading-relaxed">
                    Si deseás volver al estado inicial con todas las botellas y precios oficiales de muestra, podés reiniciar el catálogo con este botón.
                  </p>
                  <button
                    onClick={() => {
                      if (window.confirm('¿Confirmás restablecer todo el catálogo a los valores iniciales?')) {
                        onResetWines();
                        showNotification('Catálogo restablecido al original');
                      }
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-red-500/40 text-red-400 hover:bg-red-950/30 text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Restablecer a valores de fábrica</span>
                  </button>
                </div>

                <div className="p-5 rounded-xl bg-[#231F1C] border border-[#B79A68]/20">
                  <h4 className="font-editorial text-lg text-[#FCFAF6] font-bold mb-2">
                    Respaldo de Datos (JSON)
                  </h4>
                  <p className="text-xs text-[#A3988F] mb-4 leading-relaxed">
                    Copiá el contenido actual del catálogo para guardarlo como archivo o compartirlo.
                  </p>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(JSON.stringify(wines, null, 2));
                      showNotification('JSON copiado al portapapeles');
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#B79A68] hover:bg-[#c9af7e] text-[#171513] text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <span>Copiar Catálogo Completo (JSON)</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
