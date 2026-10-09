import React from 'react';
import { Review } from '@/types';
import { Star, CheckCircle } from 'lucide-react';

export const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
  return (
    <div className="bg-cream p-6 rounded-2xl border border-gold/30 shadow-card flex flex-col justify-between h-full relative">
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1">
            {Array.from({ length: review.rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-gold text-gold" />
            ))}
          </div>
          <span className="text-[10px] font-medium text-espresso/60 bg-sand/40 px-2.5 py-1 rounded-full border border-gold/30 flex items-center gap-1">
            <CheckCircle className="w-3 h-3 text-cypress" /> Powered by Google
          </span>
        </div>

        <p className="font-serif italic text-espresso/90 text-sm leading-relaxed mb-6">
          &ldquo;{review.comment}&rdquo;
        </p>
      </div>

      <div className="pt-4 border-t border-gold/20 flex items-center justify-between text-xs">
        <div>
          <h4 className="font-sans font-semibold text-espresso">{review.name}</h4>
          <span className="text-espresso/60">{review.location}</span>
        </div>
        <span className="text-[10px] text-gold-dark font-medium">{review.date}</span>
      </div>
    </div>
  );
};
