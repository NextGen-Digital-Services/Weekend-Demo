'use client';

import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PropertyCard } from '@/components/cards/PropertyCard';
import { useApp } from '@/hooks/useApp';
import { Property } from '@/types';

export const FeaturedStays: React.FC<{ onOpenBooking: (property: Property) => void }> = ({ onOpenBooking }) => {
  const { properties } = useApp();
  const featured = properties.filter((p) => p.featured || p.bestSeller).slice(0, 3);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-sand/30 border-y border-gold/20">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          numeral="II"
          eyebrow="FEATURED GETAWAYS"
          title="Most Loved Weekend"
          italicWord="Escapes"
          subtitle="Handpicked stays rated 4.8+ by over 10,000 satisfied travellers across Maharashtra."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onBook={(p) => onOpenBooking(p)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
