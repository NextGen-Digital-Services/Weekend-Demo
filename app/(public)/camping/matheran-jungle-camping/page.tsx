'use client';

import React from 'react';
import { useApp } from '@/hooks/useApp';
import { PropertyDetailView } from '@/components/sections/PropertyDetailView';

export default function MatheranJungleCampingPage() {
  const { properties } = useApp();
  const property = properties.find((p) => p.slug === 'matheran-jungle-camping') || properties[2];

  return <PropertyDetailView property={property} />;
}
