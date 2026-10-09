'use client';

import React, { useState } from 'react';
import { Hero } from '@/components/sections/Hero';
import { StatsStrip } from '@/components/sections/StatsStrip';
import { CategorySection } from '@/components/sections/CategorySection';
import { FeaturedStays } from '@/components/sections/FeaturedStays';
import { WhyUsSection } from '@/components/sections/WhyUsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { getLodgingBusinessSchema } from '@/lib/jsonld';
import { BookingDrawer } from '@/components/booking/BookingDrawer';
import { Property } from '@/types';

export default function HomePage() {
  const [selectedProp, setSelectedProp] = useState<Property | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenBooking = (property?: Property) => {
    if (property) setSelectedProp(property);
    setModalOpen(true);
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: getLodgingBusinessSchema() }}
      />
      <Hero onOpenBooking={() => handleOpenBooking()} />
      <StatsStrip />
      <CategorySection />
      <FeaturedStays onOpenBooking={(p) => handleOpenBooking(p)} />
      <WhyUsSection />
      <TestimonialsSection />
      <FAQSection />
      <BookingDrawer
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedProperty={selectedProp}
      />
    </>
  );
}
