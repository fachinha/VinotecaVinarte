import React from 'react';
import { ExternalLink } from 'lucide-react';
import { InstagramIcon } from '../common/InstagramIcon';
import { BUSINESS_CONFIG } from '../../data/config';

export const InstagramSection: React.FC = () => {
  const instagramVisuals = [
    {
      id: 1,
      image: '/insta-1.jpg',
      caption: 'Nuestra cava y estanterías con más de 80 etiquetas exclusivas en Morales 438.',
      postUrl: 'https://www.instagram.com/p/DAB1B6AvAOX/',
    },
    {
      id: 2,
      image: '/insta-2.jpg',
      caption: 'Copas listas y botellas seleccionadas para catas guiadas sensoriales.',
      postUrl: 'https://www.instagram.com/p/DY4veKfAaHw/',
    },
    {
      id: 3,
      image: '/insta-3.jpg',
      caption: 'Ediciones especiales Don Juan Reserva en caja de madera y estuches de colección.',
      postUrl: 'https://www.instagram.com/p/DeiFtQqDa_6/',
    },
    {
      id: 4,
      image: '/insta-4.jpg',
      caption: 'Salón íntimo de degustación y experiencias en San Carlos de Bariloche.',
      postUrl: 'https://www.instagram.com/vinartevinoteca/',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#171513] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B79A68] font-semibold mb-2">
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>Comunidad & Novedades</span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl text-[#FCFAF6] font-normal tracking-tight">
              El universo Vinarte, también en Instagram.
            </h2>
            <p className="mt-2 text-sm text-[#F4EFE5]/70 max-w-lg">
              Seguinos en <strong className="text-[#B79A68] font-medium">{BUSINESS_CONFIG.instagramHandle}</strong> para enterarte de catas programadas, nuevos ingresos de bodegas y recomendaciones semanales.
            </p>
          </div>

          <a
            href={BUSINESS_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#29151C] hover:bg-[#381923] text-[#FCFAF6] border border-[#B79A68]/40 hover:border-[#B79A68] text-xs font-semibold uppercase tracking-wider transition-all duration-200 self-start md:self-auto"
          >
            <InstagramIcon className="w-4 h-4 text-[#B79A68]" />
            <span>Visitar @vinartevinoteca</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#8C827A]" />
          </a>
        </div>

        {/* Curated visual grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {instagramVisuals.map((post) => (
            <a
              key={post.id}
              href={post.postUrl || BUSINESS_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-xl overflow-hidden bg-[#201c1a] border border-white/10 hover:border-[#B79A68]/50 transition-all duration-300 shadow-lg block"
            >
              <img
                src={post.image}
                alt={post.caption}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171513]/90 via-[#29151C]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <InstagramIcon className="w-5 h-5 text-[#B79A68] mb-2" />
                <p className="text-[11px] text-[#FCFAF6] leading-snug line-clamp-3">
                  {post.caption}
                </p>
                <span className="text-[9px] uppercase tracking-wider text-[#B79A68] mt-2 font-semibold">
                  Ver en Instagram &rarr;
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
