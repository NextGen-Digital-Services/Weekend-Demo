'use client';

import React from 'react';
import { useApp } from '@/hooks/useApp';
import { PropertyDetailView } from '@/components/sections/PropertyDetailView';

export default function LonavalaVillaPage() {
  const { properties } = useApp();
  const property = properties.find((p) => p.slug === 'lonavala-villa') || properties[4];

  return <PropertyDetailView property={property} />;
}
