// src/components/layout/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../common/Logo';

const navItems = [
  { name: 'GEMSTONES', to: '/gemstones' },
  { name: 'DESIGN & MANUFACTURING', to: '/design-manufacturing' },
  { name: 'FASHION HARDWARE', to: '/fashion-hardware' },
  { name: 'CORPORATE GIFTING', to: '/corporate-gifting' },
  { name: 'ABOUT', to: '/about' },
  { name: 'ENQUIRE', to: '/enquire' },
];

const Header: React.FC = () => {
  return (
    <header className="w-full z-50 px-[clamp(20px,5vw,80px)] py-4 bg-[rgba(7,13,13,0.9)] backdrop-blur border-b border-[rgba(213,181,129,0.2)] sticky top-0">
      <div className="max-w-[1720px] mx-auto w-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <picture className="block">
            <source media="(max-width: 479px)" srcSet="/logo/logo-mark-gold.svg" />
            <img 
              src="/logo/logo-horizontal-dark.svg" 
              alt="Facette & Co." 
              className="w-auto block h-[40px] min-[480px]:h-[36px] md:h-[48px]" 
            />
          </picture>
        </Link>

        {/* Mobile Menu Button */}
        <button className="min-[1100px]:hidden text-[#D5B581] hover:text-[#E9E4DC] transition-colors p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden min-[1100px]:flex items-center gap-4 xl:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className={`font-accent text-xs tracking-[0.18em] transition-colors ${
                item.name === 'ENQUIRE'
                  ? 'border border-[#D5B581] text-[#D5B581] px-[22px] py-[10px] rounded-full hover:bg-[#D5B581] hover:text-[#0E3D3D] bg-transparent'
                  : 'text-ivory/90 hover:text-gold'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
