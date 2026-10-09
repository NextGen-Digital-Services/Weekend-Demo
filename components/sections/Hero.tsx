'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { IMAGES } from '@/data/images';
import { QuickSearch } from '@/components/booking/QuickSearch';
import { Compass, Sparkles } from 'lucide-react';

export const Hero: React.FC<{ onOpenBooking?: () => void }> = () => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGES.heroBanner.url}
          alt={IMAGES.heroBanner.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/90 via-espresso/70 to-espresso/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-transparent to-espresso/30" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cream/10 backdrop-blur-md border border-gold/40 text-gold-light text-xs uppercase tracking-[0.25em] font-semibold mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-gold" /> Weekend Thrills • Escape The Routine
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-cream font-light tracking-tight leading-[1.05]"
        >
          Dive Into <span className="italic text-terracotta font-normal">Divine</span> Adventure
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-sm sm:text-lg text-cream/85 font-sans font-light max-w-2xl leading-relaxed"
        >
          Handpicked weekend experiences for travellers who want easy, memorable escapes without the hassle of planning. Beach camping, lakeside tents, luxury villas & heritage cottages.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full mt-10"
        >
          <QuickSearch />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold/80"
        >
          <Compass className="w-4 h-4 animate-spin-slow" /> Alibaug • Lonavala • Pawna Lake • Matheran
        </motion.div>
      </div>
    </section>
  );
};
