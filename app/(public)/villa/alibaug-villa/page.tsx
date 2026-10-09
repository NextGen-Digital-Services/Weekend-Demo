'use client';

import React from 'react';
import { useApp } from '@/hooks/useApp';
import { PropertyDetailView } from '@/components/sections/PropertyDetailView';

export default function AlibaugVillaPage() {
  const { properties } = useApp();
  const property = properties.find((p) => p.slug === 'alibaug-villa') || properties[3];

  return <PropertyDetailView property={property} />;
}
