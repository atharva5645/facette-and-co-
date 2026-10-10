import React from 'react';

interface LogoProps {
  variant: 'dark' | 'light';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ variant, className = '' }) => {
  const src = variant === 'dark' ? '/logo/logo-dark.svg' : '/logo/logo-horizontal-original.svg';
  const alt = 'FACETTE & CO.';

  return (
    <img
      src={src}
      alt={alt}
      className={`block h-[52px] lg:h-[68px] w-auto ${className}`}
    />
  );
};

export default Logo;
