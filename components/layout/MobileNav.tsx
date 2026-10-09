'use client';

import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, X, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { name: string; href: string }[];
  onOpenBooking?: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  onClose,
  navLinks,
  onOpenBooking,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-espresso/70 backdrop-blur-sm"
          />

          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-[85%] max-w-sm bg-espresso text-cream p-6 shadow-2xl flex flex-col justify-between overflow-y-auto border-l border-gold/30"
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-gold/20">
                <span className="font-serif text-2xl font-light text-cream">
                  WEEKEND <span className="italic text-terracotta">THRILLS</span>
                </span>
                <button
                  onClick={onClose}
                  className="p-2 text-cream/70 hover:text-cream hover:bg-white/10 rounded-full"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className="font-serif text-xl font-light text-cream/90 hover:text-gold-light py-2 border-b border-white/5 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-gold/20">
              <Button
                variant="terracotta"
                size="lg"
                className="w-full"
                onClick={() => {
                  onClose();
                  if (onOpenBooking) onOpenBooking();
                }}
              >
                Book Your Stay Now
              </Button>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href="tel:+917030697820"
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-white/10 rounded-full text-xs font-semibold text-cream hover:bg-white/20 transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold-light" /> Call Us
                </a>
                <a
                  href="https://wa.me/917030697820"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/40 rounded-full text-xs font-semibold hover:bg-[#25D366]/30 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-cream/60 pt-2">
                <ShieldCheck className="w-4 h-4 text-gold" />
                100% Verified Properties & Guaranteed Booking
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
