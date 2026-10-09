'use client';

import React from 'react';
import { useApp } from '@/hooks/useApp';
import { PropertyDetailView } from '@/components/sections/PropertyDetailView';

export default function AlibaugBeachCampingPage() {
  const { properties } = useApp();
  const property = properties.find((p) => p.slug === 'alibaug-beach-camping') || properties[0];

  return <PropertyDetailView property={property} />;
}
