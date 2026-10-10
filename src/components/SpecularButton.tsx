import React, { useRef, useState, useEffect } from 'react';

interface SpecularButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  tint?: string;
  tintOpacity?: number;
  textColor?: string;
  lineColor?: string;
  baseColor?: string;
  intensity?: number;
  shineSize?: number;
  shineFade?: number;
  thickness?: number;
  speed?: number;
  followMouse?: boolean;
  proximity?: number;
  autoAnimate?: boolean;
}

export const SpecularButton: React.FC<SpecularButtonProps> = ({
  tint = '#E9E4DC',
  tintOpacity = 0.08,
  textColor = '#E9E4DC',
  lineColor = '#D5B581',
  baseColor = '#E9E4DC',
  intensity = 0.5,
  shineSize = 8,
  shineFade = 35,
  thickness = 0.8,
  speed = 0.25,
  followMouse = true,
  proximity = 180,
  autoAnimate = false,
  children,
  className = '',
  ...props
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!buttonRef.current || !followMouse) return;
      const rect = buttonRef.current.getBoundingClientRect();
      
      // Calculate coordinates relative to button center/edges
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Only track if within proximity
      const distance = Math.sqrt(
        Math.pow(Math.max(0, -x, x - rect.width), 2) + 
        Math.pow(Math.max(0, -y, y - rect.height), 2)
      );

      if (distance < proximity) {
        setMousePosition({ x, y });
      } else {
        setMousePosition({ x: -1000, y: -1000 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [followMouse, proximity]);

  return (
    <button
      ref={buttonRef}
      className={`relative inline-flex items-center justify-center overflow-hidden rounded-full uppercase font-accent tracking-[0.2em] transition-colors duration-300 ${className}`}
      style={{
        color: textColor,
        height: '50px',
        padding: '0 32px',
        backgroundColor: `rgba(255, 255, 255, ${tintOpacity})`, /* Using white with low opacity for subtle tint */
        border: `${thickness}px solid rgba(255, 255, 255, 0.1)`,
      }}
      {...props}
    >
      {/* Specular Light Layer */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle ${shineSize * 10}px at ${mousePosition.x}px ${mousePosition.y}px, ${lineColor}${Math.floor(intensity * 255).toString(16).padStart(2, '0')}, transparent ${shineFade}%)`,
          opacity: mousePosition.x !== -1000 ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}
      />
      <span className="relative z-10 text-xs sm:text-sm font-medium">{children}</span>
    </button>
  );
};
