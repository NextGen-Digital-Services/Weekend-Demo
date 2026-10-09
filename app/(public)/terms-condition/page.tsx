import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';

export default function TermsConditionPage() {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-cream max-w-4xl mx-auto space-y-8">
      <SectionHeading
        numeral="TERMS"
        eyebrow="TERMS & CONDITIONS"
        title="Terms of Service & Stay Guidelines"
        subtitle="Please review our stay rules and booking policies before confirming your trip."
      />

      <div className="space-y-6 font-sans text-sm text-espresso/80 leading-relaxed border-t border-gold/20 pt-6">
        <h3 className="font-serif text-xl text-espresso font-normal">1. Check-in & Identification</h3>
        <p>A valid government ID proof (Aadhaar, Passport, Driving License) is mandatory for all adult guests at check-in.</p>

        <h3 className="font-serif text-xl text-espresso font-normal">2. Property Rules & Noise Levels</h3>
        <p>Loud outdoor speakers must be turned down post 10:00 PM as per Maharashtra coastal and local authority guidelines.</p>

        <h3 className="font-serif text-xl text-espresso font-normal">3. Safety & Lake/Beach Access</h3>
        <p>Guests must follow safety instructions. Swimming in lake or deep sea without life jackets is prohibited.</p>
      </div>
    </div>
  );
}
