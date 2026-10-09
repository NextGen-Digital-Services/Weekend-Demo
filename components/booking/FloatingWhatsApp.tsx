'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href="https://wa.me/917030697820"
      target="_blank"
      rel="noopener noreferrer"
      className="hidden lg:flex fixed bottom-8 right-8 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-2xl items-center gap-3 hover:scale-105 transition-all duration-300 group border-2 border-white/40"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 animate-pulse" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap text-xs font-semibold">
        Chat with Stay Expert
      </span>
    </a>
  );
};
