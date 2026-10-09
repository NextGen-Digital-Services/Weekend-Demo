import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  numeral?: string;
  eyebrow?: string;
  title: string;
  italicWord?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  dark?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  numeral,
  eyebrow,
  title,
  italicWord,
  subtitle,
  align = 'center',
  dark = false,
  className,
}) => {
  return (
    <div
      className={cn(
        'max-w-3xl mb-12 md:mb-16',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {(numeral || eyebrow) && (
        <div
          className={cn(
            'inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold mb-3',
            dark ? 'text-gold-light' : 'text-gold'
          )}
        >
          {numeral && <span className="font-serif italic font-normal text-sm">{numeral} •</span>}
          {eyebrow && <span>{eyebrow}</span>}
        </div>
      )}
      
      <h2
        className={cn(
          'font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-[1.15]',
          dark ? 'text-cream' : 'text-espresso'
        )}
      >
        {title}{' '}
        {italicWord && (
          <span className="italic font-normal text-terracotta">{italicWord}</span>
        )}
      </h2>

      <div className={cn('h-px w-16 bg-gold/40 mt-4', align === 'center' ? 'mx-auto' : '')} />

      {subtitle && (
        <p
          className={cn(
            'mt-4 text-sm sm:text-base font-sans max-w-2xl leading-relaxed',
            dark ? 'text-cream/80' : 'text-espresso/75',
            align === 'center' ? 'mx-auto' : ''
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
