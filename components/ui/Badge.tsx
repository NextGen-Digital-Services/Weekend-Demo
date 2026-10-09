import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  variant?: 'gold' | 'terracotta' | 'cypress' | 'espresso' | 'sand';
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'gold',
  children,
  className,
}) => {
  const variants = {
    gold: 'bg-gold/15 text-gold-dark border border-gold/40',
    terracotta: 'bg-terracotta/15 text-terracotta border border-terracotta/30',
    cypress: 'bg-cypress/15 text-cypress border border-cypress/30',
    espresso: 'bg-espresso text-cream border border-espresso',
    sand: 'bg-sand text-espresso border border-sand-dark/20',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.15em] px-3 py-1 rounded-full',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
