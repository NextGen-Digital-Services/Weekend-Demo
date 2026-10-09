'use client';

import React, { useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PropertyCard } from '@/components/cards/PropertyCard';
import { useApp } from '@/hooks/useApp';
import { BookingDrawer } from '@/components/booking/BookingDrawer';
import { Property } from '@/types';

export default function CottagesPage() {
  const { properties } = useApp();
  const cottages = properties.filter((p) => p.stayType === 'cottages');
  const [selectedProp, setSelectedProp] = useState<Property | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          numeral="IV"
          eyebrow="HERITAGE COTTAGES"
          title="Rustic Orchard Heritage"
          italicWord="Cottages"
          subtitle="Charming wood & brick cottages nestled in green coconut orchards with homemade Konkani seafood and peaceful hammocks."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cottages.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onBook={(p) => {
                setSelectedProp(p);
                setModalOpen(true);
              }}
            />
          ))}
        </div>
      </div>
      <BookingDrawer isOpen={modalOpen} onClose={() => setModalOpen(false)} selectedProperty={selectedProp} />
    </div>
  );
}
