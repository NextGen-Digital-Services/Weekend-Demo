'use client';

import { useState } from 'react';
import { Property } from '@/types';

export function useBookingModalState() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const openBooking = (property?: Property) => {
    if (property) {
      setSelectedProperty(property);
    }
    setIsOpen(true);
  };

  const closeBooking = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    selectedProperty,
    openBooking,
    closeBooking,
  };
}
