// src/components/hero/HeroVisual.tsx
import React from 'react';

export interface HeroVisualProps {
  className?: string;
}

const ringLayers = [
  {
    id: 0,
    src: '/assets/images/hero/ring-master.png',
    alt: 'FACETTE & CO Master Emerald-Cut Gold Ring — Complete Composition',
    className: 'ring-layer-0',
    initialOpacity: 'opacity-100',
  },
  {
    id: 1,
    src: '/assets/images/hero/ring-three-quarter.png',
    alt: 'FACETTE & CO Ring — Three-Quarter Perspective Orbit',
    className: 'ring-layer-1',
    initialOpacity: 'opacity-0',
  },
  {
    id: 2,
    src: '/assets/images/hero/ring-front.png',
    alt: 'FACETTE & CO Ring — Frontal Gemstone Approach',
    className: 'ring-layer-2',
    initialOpacity: 'opacity-0',
  },
  {
    id: 3,
    src: '/assets/images/hero/ring-detail.png',
    alt: 'FACETTE & CO Ring — Macro Detail of Emerald Cut and Pavé Diamonds',
    className: 'ring-layer-3',
    initialOpacity: 'opacity-0',
  },
  {
    id: 4,
    src: '/assets/images/hero/ring-side.png',
    alt: 'FACETTE & CO Ring — Architectural Side Profile',
    className: 'ring-layer-4',
    initialOpacity: 'opacity-0',
  },
  {
    id: 5,
    src: '/assets/images/hero/ring-top.png',
    alt: 'FACETTE & CO Ring — Top Orthogonal Facet Geometry',
    className: 'ring-layer-5',
    initialOpacity: 'opacity-0',
  },
  {
    id: 6,
    src: '/assets/images/hero/ring-rear.png',
    alt: 'FACETTE & CO Ring — Rear Under-Gallery & Pavilion Engineering',
    className: 'ring-layer-6',
    initialOpacity: 'opacity-0',
  },
  {
    id: 7,
    src: '/assets/images/hero/ring-three-quarter.png',
    alt: 'FACETTE & CO Ring — Return to Complete Architectural Piece',
    className: 'ring-layer-7',
    initialOpacity: 'opacity-0',
  },
];

/**
 * HeroVisual: Renders the 7-stage cinematic ring visual stack.
 * Features organic perimeter feathering and refined studio lighting.
 */
const HeroVisual: React.FC<HeroVisualProps> = ({ className = '' }) => {
  return (
    <div
      className={`hero-visual-stage relative flex items-center justify-center pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {/* Studio Ambient Depth Backdrop */}
      <div
        className="absolute -inset-24 rounded-full pointer-events-none blur-3xl opacity-40"
        style={{
          background:
            'radial-gradient(circle, rgba(34, 61, 48, 0.6) 0%, rgba(25, 45, 35, 0.3) 60%, transparent 90%)',
        }}
      />

      {/* Subtle Warm Gold Caustic Highlight */}
      <div
        className="absolute -inset-16 rounded-full pointer-events-none blur-2xl opacity-20"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(213, 181, 129, 0.5) 0%, transparent 68%)',
        }}
      />

      {/* Container framing the square ring photography with commanding luxury scale */}
      <div
        className="relative w-full h-auto aspect-square isolation-auto"
        style={{
          WebkitMaskImage:
            'radial-gradient(ellipse 65% 65% at 50% 50%, black 50%, transparent 95%)',
          maskImage:
            'radial-gradient(ellipse 65% 65% at 50% 50%, black 50%, transparent 95%)',
        }}
      >
        {ringLayers.map((layer, index) => (
          <img
            key={layer.id}
            src={layer.src}
            alt={layer.alt}
            draggable={false}
            loading={index === 0 ? 'eager' : 'lazy'}
            fetchPriority={index === 0 ? 'high' : 'auto'}
            className={`${layer.className} absolute inset-0 w-full h-full object-contain ${layer.initialOpacity} transition-none transform-gpu will-change-transform will-change-opacity`}
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroVisual;
