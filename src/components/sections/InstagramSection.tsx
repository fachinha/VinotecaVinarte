import React from 'react';
import { ExternalLink } from 'lucide-react';
import { InstagramIcon } from '../common/InstagramIcon';
import { BUSINESS_CONFIG } from '../../data/config';

export const InstagramSection: React.FC = () => {
  const instagramVisuals = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80',
      caption: 'Copas preparadas para nuestra cata guiada en Bariloche.',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=600&q=80',
      caption: 'Barricas de roble y guarda de añadas seleccionadas.',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=600&q=80',
      caption: 'Momentos compartidos alrededor de una gran botella.',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1558001373-7b93ee48ffa0?auto=format&fit=crop&w=600&q=80',
      caption: 'Servicio y descorche a la temperatura ideal.',
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
              href={BUSINESS_CONFIG.instagramUrl}
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
