import type { BusinessConfig } from '../types';

export const BUSINESS_CONFIG: BusinessConfig = {
  name: 'Vinarte Vinoteca',
  tagline: 'El arte del vino en cada copa!',
  slogan: 'Tenemos el mejor vino del mundo, EL QUE TE GUSTA A VOS!!!',
  address: 'Morales 438',
  city: 'San Carlos de Bariloche',
  province: 'Río Negro',
  country: 'Argentina',
  coordinates: {
    lat: -41.1345,
    lng: -71.3105,
  },
  phoneDisplay: '+54 9 294 425-1925',
  whatsappNumber: '5492944251925',
  whatsappUrl: 'https://wa.me/5492944251925?text=Hola%2C%20Vinarte.%20Quier%C3%ADa%20consultar%20por%20sus%20vinos.',
  instagramUrl: 'https://www.instagram.com/vinartevinoteca/',
  instagramHandle: '@vinartevinoteca',
  uberEatsUrl: 'https://www.ubereats.com/ar/store/vinarte-vinoteca/_ZkQN76sUDCaG0BTbHEvGw?diningMode=DELIVERY&sc=SEARCH_SUGGESTION',
  googleMapsUrl: 'https://maps.app.goo.gl/kXwPYjfkWMUsZ9RP7',
  googleReviewsUrl: 'https://search.google.com/local/writereview?placeid=ChIJPaeP-Ah7GpYRG02h9MK0llg&utm_source=chatgpt.com',
  hoursNote: 'Abierto de tarde/noche (17:00 a 22:00 hs) y degustaciones con reserva previa.',
  legalAlcoholWarning: 'Beber con moderación. Prohibida su venta a menores de 18 años. Ley Nacional 24.788.',
};

export const getWineWhatsAppUrl = (wineName: string, winery: string): string => {
  const message = `Hola Vinarte! Estuve viendo su web y me interesa consultar disponibilidad de "${wineName}" (${winery}). ¿Tienen stock disponible?`;
  return `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

export const getCustomConsultationWhatsAppUrl = (topic: string): string => {
  const message = `Hola Vinarte! Quería hacerles una consulta personalizada sobre ${topic}.`;
  return `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

export const SISTER_STORES = [
  {
    name: 'Pollería Belgrano',
    subtitle: 'Bariloche',
    uberEatsUrl: 'https://www.ubereats.com/ar/store/polleria-belgrano-bariloche/sfcrBjpYXWKCcMb91CNb-w?diningMode=DELIVERY&surfaceName=',
    instagramUrl: 'https://www.instagram.com/polleriabelgrano/',
    googleReviewsUrl: 'https://search.google.com/local/writereview?placeid=ChIJe1ol9pJ7GpYRjt_-75QMCp4',
    whatsappUrl: 'https://wa.me/5492944512020',
    phoneDisplay: '+54 9 294 451-2020',
  },
  {
    name: 'Fiambrería Belgrano',
    subtitle: 'Tentaciones Belgrano',
    whatsappUrl: 'https://wa.me/5492944509410',
    instagramUrl: 'https://www.instagram.com/tentacionesbelgrano?igsi=MWczeHk1MmN2M21teQ==',
    phoneDisplay: '+54 9 294 450-9410',
  },
] as const;
