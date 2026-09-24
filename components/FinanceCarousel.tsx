'use client';

import { useState } from 'react';

const images = [
  { src: '/placeholders/finance-1.png', label: 'Finanzas' },
  { src: '/placeholders/finance-2.png', label: 'Hábitos' },
  { src: '/placeholders/finance-3.png', label: 'Tareas' },
  { src: '/placeholders/finance-4.png', label: 'Metas' },
];

export default function FinanceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative aspect-video bg-slate-950 rounded border border-slate-800 mb-4 overflow-hidden group">
      {/* Imagen actual */}
      <img
        src={images[currentIndex].src}
        alt={images[currentIndex].label}
        className="w-full h-full object-cover object-top transition-opacity duration-300"
      />

      {/* Etiqueta del módulo actual */}
      <div className="absolute top-2 left-2 px-2 py-0.5 bg-slate-950/80 border border-slate-800 rounded text-[10px] font-mono text-amber-400">
        {images[currentIndex].label} ({currentIndex + 1}/4)
      </div>

      {/* Flechas translúcidas que aparecen al hacer hover */}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-1.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-slate-950/60 hover:bg-slate-900 border border-slate-700/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs shadow-md"
        aria-label="Anterior"
      >
        ❮
      </button>

      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-1.5 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-slate-950/60 hover:bg-slate-900 border border-slate-700/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs shadow-md"
        aria-label="Siguiente"
      >
        ❯
      </button>

      {/* Puntos de navegación inferiores */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 bg-slate-950/70 px-2 py-1 rounded-full border border-slate-800/80">
        {images.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setCurrentIndex(idx);
            }}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              currentIndex === idx ? 'bg-amber-400 w-3' : 'bg-slate-600'
            }`}
            aria-label={`Ir a imagen ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}