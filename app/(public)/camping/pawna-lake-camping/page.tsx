'use client';

import React from 'react';
import { useApp } from '@/hooks/useApp';
import { PropertyDetailView } from '@/components/sections/PropertyDetailView';

export default function PawnaLakeCampingPage() {
  const { properties } = useApp();
  const property = properties.find((p) => p.slug === 'pawna-lake-camping') || properties[1];

  return <PropertyDetailView property={property} />;
}
