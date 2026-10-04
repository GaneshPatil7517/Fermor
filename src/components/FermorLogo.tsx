import React from 'react';
import logoImg from '../assets/logo.png';

interface FermorLogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  darkText?: boolean;
}

export const FermorLogo: React.FC<FermorLogoProps> = ({
  className = '',
  iconOnly = false,
  size = 'md',
  darkText = true,
}) => {
  const sizeMap = {
    sm: { imgH: 'h-6', text: 'text-lg', gap: 'gap-2' },
    md: { imgH: 'h-7', text: 'text-2xl', gap: 'gap-2.5' },
    lg: { imgH: 'h-9', text: 'text-3xl', gap: 'gap-3' },
    xl: { imgH: 'h-11', text: 'text-4xl', gap: 'gap-3.5' },
  };

  const { imgH, text, gap } = sizeMap[size];

  return (
    <div className={`inline-flex items-center ${gap} select-none ${className}`}>
      {/* Official Fermor Logo Image */}
      <img
        src={logoImg}
        alt="Fermor Logo"
        className={`${imgH} w-auto object-contain transition-transform duration-200 hover:scale-105`}
      />

      {/* Brand Typography */}
      {!iconOnly && (
        <span
          className={`font-black tracking-tight font-sans ${
            darkText ? 'text-slate-900' : 'text-white'
          } ${text}`}
        >
          FERMOR
        </span>
      )}
    </div>
  );
};
