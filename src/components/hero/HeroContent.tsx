// src/components/hero/HeroContent.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SpecularButton } from '../SpecularButton';

export interface HeroContentProps {
  className?: string;
}

const HeroContent: React.FC<HeroContentProps> = ({ className = '' }) => {
  const navigate = useNavigate();

  return (
    <div className={`hero-content-container relative w-full ${className}`}>
      {/* 01 & 02: INTRO & ROTATE PANEL */}
      <div className="hero-panel-intro relative z-10 space-y-4 sm:space-y-5 w-full text-left">
        <div className="inline-flex items-center space-x-3">
          <span className="w-8 sm:w-12 h-[1px] bg-gold/70" aria-hidden="true" />
          <p className="font-accent text-xs sm:text-sm md:text-base uppercase tracking-[0.28em] text-gold font-medium">
            MATERIAL • DESIGN • CRAFT
          </p>
        </div>

        <h1 className="font-head text-[clamp(3rem,4.2vw,5rem)] text-ivory leading-[1.0] tracking-tight font-normal">
          WHERE MATERIAL <br className="hidden md:inline" />
          BECOMES <span className="italic font-light text-bone/95">POSSIBILITY.</span>
        </h1>

        <p className="font-body text-base sm:text-lg md:text-xl text-bone/90 leading-relaxed max-w-[650px] font-light">
          Exceptional materials, considered design and precise execution — created for those who imagine beyond the ordinary.
        </p>

        <div className="pt-4 border-t border-[rgba(213,181,129,0.2)] whitespace-nowrap inline-block w-full max-w-[650px]">
          <p className="font-accent text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-gold/85">
            GEMSTONES · DESIGN &amp; MANUFACTURING · FASHION HARDWARE · CORPORATE GIFTING
          </p>
        </div>

        <div className="pt-6 sm:pt-7">
          <a href="#enquire" className="inline-block border border-[#D5B581] text-[#D5B581] uppercase tracking-[0.2em] py-2 px-6 transition-colors duration-300 hover:bg-[#D5B581] hover:text-[#0E3D3D]">
            ENQUIRE
          </a>
        </div>
      </div>

      {/* 03 & 04: APPROACH & MACRO PANEL */}
      <div className="hero-panel-macro absolute inset-0 z-10 space-y-4 sm:space-y-5 w-full text-left opacity-0 pointer-events-none">
        <div className="inline-flex items-center space-x-3">
          <span className="w-8 sm:w-12 h-[1px] bg-gold/70" aria-hidden="true" />
          <p className="font-accent text-xs sm:text-sm md:text-base uppercase tracking-[0.28em] text-gold font-medium">
            04 — MACRO EXAMINATION
          </p>
        </div>

        <h2 className="font-head text-[clamp(3rem,4.2vw,5rem)] text-ivory leading-[1.0] tracking-tight font-normal">
          EMERALD-CUT GEOMETRY <br className="hidden md:inline" />
          <span className="italic font-light text-bone/95">&amp; PAVÉ INTEGRATION</span>
        </h2>

        <p className="font-body text-base sm:text-lg md:text-xl text-bone/90 leading-relaxed max-w-[650px] font-light">
          Octagonal step facets maximize concentric light return, secured by four sculpted corner prongs and integrated micro-pavé shoulders.
        </p>

        <div className="grid grid-cols-2 gap-6 pt-5 border-t border-[rgba(213,181,129,0.18)]">
          <div>
            <span className="block font-accent text-[11px] sm:text-xs uppercase tracking-widest text-gold/70 mb-1">
              GEMSTONE
            </span>
            <span className="font-head text-base sm:text-lg text-ivory">Emerald Cut Natural Emerald</span>
          </div>
          <div>
            <span className="block font-accent text-[11px] sm:text-xs uppercase tracking-widest text-gold/70 mb-1">
              SETTING
            </span>
            <span className="font-head text-base sm:text-lg text-ivory">Four Sculpted Corner Prongs</span>
          </div>
        </div>
      </div>

      {/* 05 & 06: CRAFTSMANSHIP & STRUCTURE PANEL */}
      <div className="hero-panel-structure absolute inset-0 z-10 space-y-4 sm:space-y-5 w-full text-left opacity-0 pointer-events-none">
        <div className="inline-flex items-center space-x-3">
          <span className="w-8 sm:w-12 h-[1px] bg-gold/70" aria-hidden="true" />
          <p className="font-accent text-xs sm:text-sm md:text-base uppercase tracking-[0.28em] text-gold font-medium">
            06 — STRUCTURAL HONESTY
          </p>
        </div>

        <h2 className="font-head text-[clamp(3rem,4.2vw,5rem)] text-ivory leading-[1.0] tracking-tight font-normal">
          BEAUTIFUL FROM THE OUTSIDE. <br className="hidden md:inline" />
          <span className="italic font-light text-gold/90">ENGINEERED UNDERNEATH.</span>
        </h2>

        <p className="font-body text-base sm:text-lg md:text-xl text-bone/90 leading-relaxed max-w-[650px] font-light">
          An architectural under-gallery and open pavilion frame the gemstone, engineered for structural permanence and optimal transmission of light.
        </p>

        <div className="pt-4 border-t border-[rgba(213,181,129,0.18)] whitespace-nowrap inline-block">
          <p className="font-accent text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-gold/80">
            DESIGN &amp; MANUFACTURING EXPERTISE UNITED IN A SINGLE PIECE.
          </p>
        </div>
      </div>

      {/* 07: RETURN & HANDOFF PANEL */}
      <div className="hero-panel-handoff absolute inset-0 z-10 space-y-4 sm:space-y-5 w-full text-left opacity-0 pointer-events-none">
        <div className="inline-flex items-center space-x-3">
          <span className="w-8 sm:w-12 h-[1px] bg-gold/70" aria-hidden="true" />
          <p className="font-accent text-xs sm:text-sm md:text-base uppercase tracking-[0.28em] text-gold font-medium">
            07 — RETURN / HANDOFF
          </p>
        </div>

        <h2 className="font-head text-[clamp(3rem,4.2vw,5rem)] text-ivory leading-[1.0] tracking-tight font-normal">
          WHERE MATERIAL <br className="hidden md:inline" />
          <span className="italic font-light text-bone/95">FINDS PURPOSE.</span>
        </h2>

        <p className="font-body text-base sm:text-lg md:text-xl text-bone/90 leading-relaxed max-w-[650px] font-light">
          A seamless transition from individual masterwork into our four dedicated commercial capabilities.
        </p>

        <div className="pt-4 border-t border-[rgba(213,181,129,0.22)] whitespace-nowrap inline-block">
          <p className="font-accent text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-gold font-medium">
            EXPLORE THE FOUR VERTICALS BELOW ↓
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
