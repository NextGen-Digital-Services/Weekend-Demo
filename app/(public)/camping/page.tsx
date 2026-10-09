'use client';

import React, { useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PropertyCard } from '@/components/cards/PropertyCard';
import { useApp } from '@/hooks/useApp';
import { BookingDrawer } from '@/components/booking/BookingDrawer';
import { Property } from '@/types';

export default function CampingPage() {
  const { properties } = useApp();
  const campingStays = properties.filter((p) => p.stayType === 'camping');
  const [selectedProp, setSelectedProp] = useState<Property | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          numeral="I"
          eyebrow="BEACH & LAKE CAMPING"
          title="Serene Outdoor Tent"
          italicWord="Escapes"
          subtitle="Experience Revdanda Alibaug beach camping, Pawna Lake lakeside tents, and Matheran eco jungle camping with live BBQ and bonfires."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {campingStays.map((property) => (
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
