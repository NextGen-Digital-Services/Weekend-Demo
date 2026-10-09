'use client';

import React, { useState } from 'react';
import { useApp } from '@/hooks/useApp';
import { Star, CheckCircle } from 'lucide-react';

export default function AdminTestimonialsPage() {
  const { reviews } = useApp();
  const [reviewsList, setReviewsList] = useState(reviews);

  const toggleFeatured = (id: string) => {
    setReviewsList(reviewsList.map((r) => (r.id === id ? { ...r, featured: !r.featured } : r)));
  };

  const toggleApproved = (id: string) => {
    setReviewsList(reviewsList.map((r) => (r.id === id ? { ...r, approved: !r.approved } : r)));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-3xl font-light text-espresso">Testimonials & Reviews</h1>
          <p className="text-xs text-espresso/70">Moderate Google reviews and toggle homepage features.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviewsList.map((rev) => (
          <div key={rev.id} className="bg-cream p-5 rounded-2xl border border-gold/30 shadow-card space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex text-gold">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold" />
                  ))}
                </div>
                <span className="text-[10px] text-cypress font-semibold flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" /> Powered by Google
                </span>
              </div>
              <p className="font-serif italic text-xs text-espresso/90">&ldquo;{rev.comment}&rdquo;</p>
              <div className="text-xs font-semibold text-espresso">{rev.name} ({rev.location})</div>
            </div>

            <div className="pt-3 border-t border-gold/20 flex items-center justify-between text-xs">
              <button
                onClick={() => toggleFeatured(rev.id)}
                className={`px-3 py-1 rounded-full text-[10px] font-semibold ${
                  rev.featured ? 'bg-terracotta text-cream' : 'bg-sand/40 text-espresso/70'
                }`}
              >
                {rev.featured ? 'Featured on Home' : 'Show on Home'}
              </button>

              <button
                onClick={() => toggleApproved(rev.id)}
                className={`px-3 py-1 rounded-full text-[10px] font-semibold ${
                  rev.approved ? 'bg-cypress/20 text-cypress' : 'bg-espresso/20 text-espresso'
                }`}
              >
                {rev.approved ? 'Approved' : 'Hidden'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
