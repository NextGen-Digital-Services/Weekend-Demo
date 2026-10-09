'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'terracotta' | 'espresso' | 'cypress' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'terracotta',
  size = 'md',
  className,
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-sans font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gold/50 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none';

  const variants = {
    terracotta: 'bg-terracotta text-cream hover:bg-terracotta-hover shadow-terracotta',
    espresso: 'bg-espresso text-cream hover:bg-espresso-light shadow-espresso',
    cypress: 'bg-cypress text-cream hover:bg-cypress-hover',
    outline: 'border border-gold text-espresso hover:bg-sand/40',
    ghost: 'text-espresso hover:bg-sand/30',
  };

  const sizes = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-6 py-3 gap-2',
    lg: 'text-base px-8 py-4 gap-2.5 font-semibold tracking-wide',
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};
