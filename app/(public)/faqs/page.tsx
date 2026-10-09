'use client';

import React from 'react';
import { FAQSection } from '@/components/sections/FAQSection';
import { getFAQPageSchema } from '@/lib/jsonld';
import { INITIAL_FAQS } from '@/data/faqs';

export default function FAQsPage() {
  return (
    <div className="pt-28 pb-10 bg-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: getFAQPageSchema(INITIAL_FAQS) }}
      />
      <FAQSection />
    </div>
  );
}
