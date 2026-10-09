import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-cream max-w-4xl mx-auto space-y-8">
      <SectionHeading
        numeral="LEGAL"
        eyebrow="PRIVACY POLICY"
        title="Privacy Policy & Data Protection"
        subtitle="Last updated: October 2026. Weekend Thrills respects your personal privacy."
      />

      <div className="space-y-6 font-sans text-sm text-espresso/80 leading-relaxed border-t border-gold/20 pt-6">
        <h3 className="font-serif text-xl text-espresso font-normal">1. Information Collection</h3>
        <p>We collect basic contact details (name, phone number, check-in preferences) solely to facilitate your stay reservations with host properties in Maharashtra.</p>

        <h3 className="font-serif text-xl text-espresso font-normal">2. Communication & WhatsApp</h3>
        <p>By submitting a booking enquiry on Weekend Thrills, you agree to receive reservation details and voucher confirmations on your provided phone number via WhatsApp.</p>

        <h3 className="font-serif text-xl text-espresso font-normal">3. Data Security</h3>
        <p>Your details are never sold to third-party advertisers. All data is used strictly for host coordination and customer support.</p>
      </div>
    </div>
  );
}
