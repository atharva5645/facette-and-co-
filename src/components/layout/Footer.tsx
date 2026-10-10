import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#070D0D] py-12 flex justify-center items-center border-t border-[rgba(213,181,129,0.15)]">
      <img 
        src="/logo/logo-dark.svg" 
        alt="Facette & Co." 
        className="h-[100px] w-auto block" 
      />
    </footer>
  );
};

export default Footer;
