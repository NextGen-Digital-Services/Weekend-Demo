'use client';

import React, { useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useApp } from '@/hooks/useApp';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export const FAQSection: React.FC = () => {
  const { faqs } = useApp();
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          numeral="V"
          eyebrow="FREQUENTLY ASKED"
          title="Everything You Need"
          italicWord="To Know"
          subtitle="Answers to common questions about stay packages, food inclusions, safety, and booking policies."
        />

        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-cream rounded-2xl border border-gold/30 overflow-hidden shadow-card transition-all"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-serif text-xl text-espresso font-normal"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={cn('w-5 h-5 text-terracotta shrink-0 transition-transform duration-300', isOpen ? 'rotate-180' : '')}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-xs sm:text-sm font-sans text-espresso/75 leading-relaxed border-t border-gold/20 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
