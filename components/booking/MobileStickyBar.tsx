'use client';

import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

export const MobileStickyBar: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-espresso/95 backdrop-blur-md border-t border-gold/30 p-2.5 px-4 flex items-center justify-between gap-3 shadow-2xl">
      <a
        href="tel:+917030697820"
        className="flex-1 py-2.5 px-3 bg-white/10 text-cream rounded-full flex items-center justify-center gap-1.5 text-xs font-semibold hover:bg-white/20 transition-colors"
      >
        <Phone className="w-3.5 h-3.5 text-gold-light" /> Call Now
      </a>

      <button
        onClick={onOpenBooking}
        className="flex-1 py-2.5 px-3 bg-terracotta text-cream rounded-full flex items-center justify-center gap-1.5 text-xs font-semibold hover:bg-terracotta-hover transition-colors shadow-terracotta"
      >
        <Calendar className="w-3.5 h-3.5" /> Book Stay
      </button>

      <a
        href="https://wa.me/917030697820"
        target="_blank"
        rel="noopener noreferrer"
        className="py-2.5 px-3 bg-[#25D366] text-white rounded-full flex items-center justify-center gap-1 text-xs font-semibold hover:bg-[#20ba5a] transition-colors"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-4 h-4" />
      </a>
    </div>
  );
};
