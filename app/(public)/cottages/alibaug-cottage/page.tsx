'use client';

import React from 'react';
import { useApp } from '@/hooks/useApp';
import { PropertyDetailView } from '@/components/sections/PropertyDetailView';

export default function AlibaugCottageDetailPage() {
  const { properties } = useApp();
  const property = properties.find((p) => p.slug === 'alibaug-cottage') || properties[6];

  return <PropertyDetailView property={property} />;
}
