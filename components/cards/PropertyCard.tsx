'use client';

import React from 'react';
import Link from 'next/link';
import { Property } from '@/types';
import { ArchImage } from '@/components/ui/ArchImage';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { formatCurrency } from '@/lib/utils';
import { Star, ArrowRight } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
  onBook?: (property: Property) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, onBook }) => {
  const detailHref = `/${property.stayType}/${property.slug}`;

  return (
    <div className="bg-cream rounded-t-[100px] rounded-b-2xl border border-gold/30 p-4 shadow-card hover:shadow-terracotta transition-all duration-500 group flex flex-col justify-between">
      <div>
        <div className="relative">
          <ArchImage
            src={property.heroImage}
            alt={property.name}
            aspectRatio="portrait"
            className="w-full"
          />
          <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
            <Badge variant="gold">{property.location}</Badge>
            {property.bestSeller && <Badge variant="terracotta">Best Seller</Badge>}
          </div>

          <div className="absolute bottom-4 right-4 z-10 bg-espresso/80 backdrop-blur-md text-cream px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 border border-gold/30">
            <Star className="w-3.5 h-3.5 text-gold fill-gold" />
            {property.rating} <span className="text-cream/60">({property.reviewsCount})</span>
          </div>
        </div>

        <div className="pt-5 px-2">
          <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-gold-dark">
            {property.stayType} • {property.capacity}
          </span>
          <h3 className="font-serif text-2xl text-espresso font-normal leading-snug mt-1 group-hover:text-terracotta transition-colors">
            <Link href={detailHref}>{property.name}</Link>
          </h3>
          <p className="text-xs text-espresso/70 line-clamp-2 mt-2 font-sans leading-relaxed">
            {property.overview}
          </p>
        </div>
      </div>

      <div className="pt-6 px-2 border-t border-gold/20 mt-4 flex items-center justify-between">
        <div>
          <span className="block text-[10px] uppercase tracking-wider font-semibold text-espresso/60">Starting From</span>
          <div className="flex items-baseline gap-1">
            <span className="font-serif text-2xl font-normal text-terracotta">{formatCurrency(property.startingPrice)}</span>
            <span className="text-xs text-espresso/60">/{property.unit}</span>
          </div>
        </div>

        <div className="flex gap-2">
          <Link href={detailHref}>
            <Button variant="outline" size="sm" className="px-3">
              Details
            </Button>
          </Link>
          <Button
            variant="terracotta"
            size="sm"
            onClick={() => onBook && onBook(property)}
          >
            Book <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </div>
      </div>
    </div>
  );
};
