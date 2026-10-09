'use client';

import React from 'react';
import { useApp } from '@/hooks/useApp';
import { PropertyDetailView } from '@/components/sections/PropertyDetailView';

export default function AlibaugResortDetailPage() {
  const { properties } = useApp();
  const property = properties.find((p) => p.slug === 'alibaug-resorts') || properties[5];

  return <PropertyDetailView property={property} />;
}
