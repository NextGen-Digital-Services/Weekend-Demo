import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ArchImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  aspectRatio?: 'square' | 'portrait' | 'wide' | 'tall';
}

export const ArchImage: React.FC<ArchImageProps> = ({
  src,
  alt,
  priority = false,
  className,
  imageClassName,
  aspectRatio = 'portrait',
}) => {
  const aspectClasses = {
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
    wide: 'aspect-[16/9]',
    tall: 'aspect-[2/3]',
  };

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-t-[100px] rounded-b-2xl shadow-card transition-all duration-500 group',
        aspectClasses[aspectRatio],
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={priority}
        className={cn(
          'object-cover transition-transform duration-700 group-hover:scale-105',
          imageClassName
        )}
      />
      <div className="absolute inset-0 ring-1 ring-inset ring-gold/20 rounded-t-[100px] rounded-b-2xl pointer-events-none" />
    </div>
  );
};
