'use client';

import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MobileStickyBar } from '@/components/booking/MobileStickyBar';
import { FloatingWhatsApp } from '@/components/booking/FloatingWhatsApp';
import { BookingDrawer } from '@/components/booking/BookingDrawer';
import { Property } from '@/types';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const handleOpenBooking = (property?: Property) => {
    if (property) setSelectedProperty(property);
    setIsBookingOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header onOpenBooking={() => handleOpenBooking()} />
      <main className="flex-grow">{children}</main>
      <Footer />
      <MobileStickyBar onOpenBooking={() => handleOpenBooking()} />
      <FloatingWhatsApp />
      <BookingDrawer
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedProperty={selectedProperty}
      />
    </div>
  );
}
