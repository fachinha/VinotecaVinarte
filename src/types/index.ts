export type WineCategory = 'todos' | 'tintos' | 'blancos' | 'rosados' | 'espumantes' | 'estuches' | 'patagonia';

export type OccasionTag = 'compartir' | 'regalar' | 'descubrir' | 'especial';

export interface Wine {
  id: string;
  name: string;
  winery: string; // Bodega
  varietal: string; // Ej: Malbec, Pinot Noir, Cabernet Franc
  category: 'tintos' | 'blancos' | 'rosados' | 'espumantes' | 'estuches';
  region: string; // Ej: Alto Valle de Río Negro, San Patricio del Chañar, Valle de Uco
  province: 'Río Negro' | 'Neuquén' | 'Mendoza' | 'Salta' | 'San Juan' | string;
  vintage?: string; // Añada (ej: 2021)
  tastingNotes: {
    aroma: string;
    palate: string;
    finish?: string;
    foodPairing: string; // Maridaje sugerido
  };
  servingTemp?: string; // Ej: "16° - 18° C"
  alcoholContent?: string; // Ej: "14.2%"
  price?: number; // Precio en ARS si está confirmado
  priceDisplay?: string; // Ej: "$24.500" o "Consultar añada"
  isFeatured?: boolean;
  isPatagonian?: boolean;
  occasions: OccasionTag[];
  imageUrl: string;
  isDemoItem?: boolean; // Claramente identificado para el cliente
}

export interface OccasionCard {
  id: OccasionTag;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  targetCategory?: WineCategory;
  whatsappPrompt: string;
}

export interface BusinessConfig {
  name: string;
  tagline: string;
  slogan: string;
  address: string;
  city: string;
  province: string;
  country: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  phoneDisplay: string;
  whatsappNumber: string;
  whatsappUrl: string;
  instagramUrl: string;
  instagramHandle: string;
  uberEatsUrl: string;
  googleMapsUrl: string;
  googleReviewsUrl: string;
  hoursNote: string;
  legalAlcoholWarning: string;
}

export interface SisterStore {
  name: string;
  subtitle?: string;
  uberEatsUrl?: string;
  instagramUrl?: string;
  googleReviewsUrl?: string;
  whatsappUrl?: string;
  phoneDisplay?: string;
}
