// src/App.tsx
import React from 'react';
import Hero from './components/hero/Hero';
import Footer from './components/layout/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#070D0D] text-ivory selection:bg-gold/30 selection:text-ivory">
      <Hero />
      {/* Existing / Verticals Handoff Section */}
      <section id="verticals" className="relative z-20 bg-[#070D0D] py-32 px-6 lg:px-16 border-t border-[rgba(213,181,129,0.15)]">
        <div className="max-w-7xl mx-auto">
          {/* Anduril‑style grid: left tall tile, right top‑wide and bottom two tiles */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Gemstones (tall left) */}
            <a href="/gemstones" className="relative group flex-1 min-h-[80vh] overflow-hidden border border-[rgba(213,181,129,0.3)]">
              <img src="/assets/images/verticals/gemstones.jpg" alt="Gemstones" className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-ivory">
                <h3 className="font-head text-2xl">GEMSTONES</h3>
                <p className="font-body text-sm">Natural gemstones selected for colour, character and possibility.</p>
              </div>
              <div className="absolute bottom-4 right-4 text-ivory">↗</div>
            </a>
            {/* Right side container */}
            <div className="flex flex-col flex-1 gap-8">
              {/* Design & Manufacturing (top‑wide) */}
              <a href="/design-manufacturing" className="relative group h-[40vh] overflow-hidden border border-[rgba(213,181,129,0.3)]">
                <img src="/assets/images/verticals/design-manufacturing.jpg" alt="Design & Manufacturing" className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-ivory">
                  <h3 className="font-head text-2xl">DESIGN &amp; MANUFACTURING</h3>
                  <p className="font-body text-sm">From an idea to a precisely finished piece.</p>
                </div>
                <div className="absolute bottom-4 right-4 text-ivory">↗</div>
              </a>
              {/* Bottom two tiles */}
              <div className="flex gap-8 flex-1">
                {/* Fashion Hardware */}
                <a href="/fashion-hardware" className="relative group flex-1 overflow-hidden border border-[rgba(213,181,129,0.3)]">
                  <img src="/assets/images/verticals/fashion-hardware.jpg" alt="Fashion Hardware" className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-ivory">
                    <h3 className="font-head text-2xl">FASHION HARDWARE</h3>
                    <p className="font-body text-sm">Distinctive metal components made to define the details.</p>
                  </div>
                  <div className="absolute bottom-4 right-4 text-ivory">↗</div>
                </a>
                {/* Corporate Gifting */}
                <a href="/corporate-gifting" className="relative group flex-1 overflow-hidden border border-[rgba(213,181,129,0.3)]">
                  <img src="/assets/images/verticals/corporate-gifting.jpg" alt="Corporate Gifting" className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-ivory">
                    <h3 className="font-head text-2xl">CORPORATE GIFTING</h3>
                    <p className="font-body text-sm">Thoughtfully crafted objects made to be remembered.</p>
                  </div>
                  <div className="absolute bottom-4 right-4 text-ivory">↗</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;
