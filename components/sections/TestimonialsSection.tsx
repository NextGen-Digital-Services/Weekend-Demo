'use client';

import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ReviewCard } from '@/components/cards/ReviewCard';
import { useApp } from '@/hooks/useApp';
import { Star } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const { reviews } = useApp();
  const featuredReviews = reviews.filter((r) => r.featured).slice(0, 6);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-sand/20 border-t border-gold/20">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          numeral="IV"
          eyebrow="GUEST REVIEWS"
          title="Stories From Our"
          italicWord="Travellers"
          subtitle="Real experiences shared by guests who spent their weekends with Weekend Thrills. Powered by Google Reviews."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredReviews.map((rev) => (
            <ReviewCard key={rev.id} review={rev} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-cream px-6 py-3 rounded-full border border-gold/40 shadow-card text-xs font-semibold text-espresso">
            <Star className="w-4 h-4 text-gold fill-gold" />
            4.8 Rating Based on 1,200+ Verified Google Reviews
          </div>
        </div>
      </div>
    </section>
  );
};
