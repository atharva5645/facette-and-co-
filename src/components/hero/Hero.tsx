// src/components/hero/Hero.tsx
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '../layout/Header';
import HeroContent from './HeroContent';
import HeroVisual from './HeroVisual';

const MINIMAL_LABEL = 'MATERIAL → DESIGN → CRAFT';

/**
 * Hero: Upgraded scroll-driven cinematic jewellery editorial.
 *
 * Sequence:
 * 01 — INTRO (ring-master.jpg)
 * 02 — ROTATE (ring-three-quarter.jpg)
 * 03 — APPROACH (ring-front.jpg)
 * 04 — MACRO (ring-detail.jpg)
 * 05 — CRAFTSMANSHIP (ring-side.jpg & ring-top.jpg)
 * 06 — REAR / STRUCTURE (ring-rear.jpg)
 * 07 — RETURN / HANDOFF (ring-three-quarter.jpg / ring-master.jpg)
 */
const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinnedRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const stageLabelRef = useRef<HTMLSpanElement>(null);
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current || !pinnedRef.current) return;

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set('.ring-layer-0', { opacity: 1 });
      gsap.set('.ring-layer-1', { opacity: 0 });
      gsap.set('.ring-layer-2', { opacity: 0 });
      gsap.set('.ring-layer-3', { opacity: 0 });
      gsap.set('.ring-layer-4', { opacity: 0 });
      gsap.set('.ring-layer-5', { opacity: 0 });
      gsap.set('.ring-layer-6', { opacity: 0 });
      gsap.set('.ring-layer-7', { opacity: 0 });

      gsap.set('.hero-panel-intro', { opacity: 1, y: 0 });
      gsap.set('.hero-panel-macro', { opacity: 0, y: 20 });
      gsap.set('.hero-panel-structure', { opacity: 0, y: 20 });
      gsap.set('.hero-panel-handoff', { opacity: 0, y: 20 });
      gsap.set('.scroll-prompt', { opacity: 1, y: 0 });

      // Master scrubbed timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: () => (window.innerWidth < 768 ? '+=2400' : '+=3800'),
          pin: pinnedRef.current,
          scrub: 0.9,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const p = self.progress;
            if (progressBarRef.current) {
              progressBarRef.current.style.width = `${Math.min(100, Math.max(0, p * 100))}%`;
            }

            // Determine active stage (0 to 6)
            let stage = 0;
            if (p < 0.14) stage = 0;
            else if (p < 0.28) stage = 1;
            else if (p < 0.43) stage = 2;
            else if (p < 0.57) stage = 3;
            else if (p < 0.71) stage = 4;
            else if (p < 0.85) stage = 5;
            else stage = 6;

            setActiveStageIndex(stage);
            if (stageLabelRef.current) {
              stageLabelRef.current.innerText = STAGE_LABELS[stage];
            }
          },
        },
      });

      // 0. Scroll prompt fades immediately upon scrolling
      tl.to('.scroll-prompt', { opacity: 0, y: 10, duration: 0.35, ease: 'power1.out' }, 0.05);

      // STAGE 01 -> 02: ROTATE (0.6 -> 1.6)
      // ring-master -> ring-three-quarter
      tl.to(
        '.ring-layer-0',
        {
          opacity: 0,
          duration: 1.0,
          ease: 'power1.inOut',
        },
        0.6
      );

      tl.to(
        '.ring-layer-1',
        {
          opacity: 1,
          duration: 1.0,
          ease: 'power1.inOut',
        },
        0.6
      );

      // STAGE 02 -> 03: APPROACH (1.7 -> 2.7)
      // Camera moves closer to ring, gemstone becomes dominant
      tl.to(
        '.ring-layer-1',
        {
          opacity: 0,
          duration: 1.0,
          ease: 'power1.inOut',
        },
        1.7
      );

      tl.to(
        '.ring-layer-2',
        {
          opacity: 1,
          duration: 1.0,
          ease: 'power1.inOut',
        },
        1.7
      );

      // Intro headline dims and dissolves out
      tl.to(
        '.hero-panel-intro',
        {
          opacity: 0,
          y: -20,
          duration: 0.85,
          ease: 'power1.inOut',
        },
        1.75
      );

      // STAGE 03 -> 04: MACRO (2.8 -> 3.8)
      // ring-front -> ring-detail (macro photography)
      tl.to(
        '.ring-layer-2',
        {
          opacity: 0,
          duration: 1.0,
          ease: 'power1.inOut',
        },
        2.8
      );

      tl.to(
        '.ring-layer-3',
        {
          opacity: 1,
          duration: 1.0,
          ease: 'power1.inOut',
        },
        2.8
      );

      // Macro panel emerges
      tl.to(
        '.hero-panel-macro',
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power1.inOut',
        },
        2.9
      );

      // STAGE 04 -> 05: CRAFTSMANSHIP (3.9 -> 5.0)
      // Macro fades out, side view reveals profile, then top view reveals symmetry
      tl.to(
        '.hero-panel-macro',
        {
          opacity: 0,
          y: -16,
          duration: 0.5,
          ease: 'power1.inOut',
        },
        3.9
      );

      // 4.0 -> 4.5: ring-detail -> ring-side
      tl.to(
        '.ring-layer-3',
        {
          opacity: 0,
          duration: 0.65,
          ease: 'power1.inOut',
        },
        4.0
      );

      tl.to(
        '.ring-layer-4',
        {
          opacity: 1,
          duration: 0.65,
          ease: 'power1.inOut',
        },
        4.0
      );

      // 4.5 -> 5.0: ring-side -> ring-top
      tl.to(
        '.ring-layer-4',
        {
          opacity: 0,
          duration: 0.65,
          ease: 'power1.inOut',
        },
        4.5
      );

      tl.to(
        '.ring-layer-5',
        {
          opacity: 1,
          duration: 0.65,
          ease: 'power1.inOut',
        },
        4.5
      );

      // STAGE 05 -> 06: REAR / STRUCTURE (5.1 -> 6.0)
      // ring-top -> ring-rear (under-gallery and structural engineering)
      tl.to(
        '.ring-layer-5',
        {
          opacity: 0,
          duration: 0.8,
          ease: 'power1.inOut',
        },
        5.1
      );

      tl.to(
        '.ring-layer-6',
        {
          opacity: 1,
          duration: 0.8,
          ease: 'power1.inOut',
        },
        5.1
      );

      // Structure panel emerges
      tl.to(
        '.hero-panel-structure',
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: 'power1.inOut',
        },
        5.2
      );

      // STAGE 06 -> 07: RETURN / HANDOFF (6.1 -> 7.0)
      // Structure panel fades out
      tl.to(
        '.hero-panel-structure',
        {
          opacity: 0,
          y: -16,
          duration: 0.5,
          ease: 'power1.inOut',
        },
        6.1
      );

      // ring-rear -> ring-three-quarter (Layer 7 - Return)
      tl.to(
        '.ring-layer-6',
        {
          opacity: 0,
          duration: 0.8,
          ease: 'power1.inOut',
        },
        6.1
      );

      tl.to(
        '.ring-layer-7',
        {
          opacity: 1,
          duration: 0.8,
          ease: 'power1.inOut',
        },
        6.1
      );

      // Handoff panel emerges
      tl.to(
        '.hero-panel-handoff',
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: 'power1.inOut',
        },
        6.2
      );

// Final fade-out removed to keep final ring visible.

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full bg-[#070D0D] text-ivory">
      {/* Pinned Viewport Container */}
      <div
        ref={pinnedRef}
        className="relative h-screen max-h-screen w-full overflow-hidden flex flex-col justify-between"
      >
        {/* Soft Muted Emerald & Ivory Luxury Studio Atmosphere */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 75% 65% at 58% 46%, rgba(14, 61, 61, 0.45) 0%, rgba(5, 98, 76, 0.16) 35%, rgba(7, 13, 13, 0.9) 75%, #070D0D 100%)',
          }}
        />

        {/* Soft Warm Champagne Gold Ambient Reflection */}
        <div
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            background:
              'radial-gradient(circle 520px at 62% 48%, rgba(213, 181, 129, 0.15) 0%, transparent 68%)',
          }}
        />

        {/* Subtle Luxury Atelier Vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            boxShadow: 'inset 0 0 120px 40px rgba(7, 13, 13, 0.7)',
          }}
        />

        {/* Persistent Header */}
        <div className="relative z-30 w-full shrink-0">
          <Header />
        </div>

        {/* Main Hero Scene: Two-Zone Editorial Composition */}
        <div className="relative w-full h-[calc(100vh-80px)] max-w-[1920px] mx-auto flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-[120px]">
          
          {/* Left: Typography / Editorial Content */}
          <div className="relative z-20 w-full md:w-[46vw] max-w-[760px] flex-shrink-0 flex flex-col justify-center pointer-events-auto">
            <HeroContent />
          </div>

          {/* Right: Large Hero Ring */}
          <div className="relative z-10 w-full md:w-[48vw] max-w-[850px] flex-shrink-0 flex items-center justify-center pointer-events-none mt-12 md:mt-0">
            <HeroVisual className="w-full h-full" />
          </div>
        </div>

        {/* Editorial HUD / Minimal Stage Indicator & Scroll Progress */}
        <div className="relative z-30 w-full px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-24 pb-5 pt-3 border-t border-[rgba(213,181,129,0.12)] bg-[#070D0D]/70 backdrop-blur-md shrink-0">
          <div className="max-w-[1720px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            {/* Active Stage Label */}
            <div className="flex items-center space-x-3">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" aria-hidden="true" />
              <span
                ref={stageLabelRef}
                className="font-accent text-[11px] sm:text-xs uppercase tracking-[0.24em] text-gold/90 font-medium"
              >
                {MINIMAL_LABEL}
              </span>
            </div>

            {/* Scroll Indicator Prompt */}
            <div className="scroll-prompt hidden md:flex items-center space-x-2 text-bone/60 font-accent text-[11px] tracking-widest uppercase">
              <span>SCROLL TO EXAMINE</span>
              <span className="text-gold">↓</span>
            </div>

            {/* Hairline Progress Track */}
            <div className="w-full sm:w-56 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <div
                ref={progressBarRef}
                className="h-full bg-gradient-to-r from-gold to-ivory transition-all duration-75 ease-out"
                style={{ width: '0%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
