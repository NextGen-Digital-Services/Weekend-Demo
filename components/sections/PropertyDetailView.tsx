'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Property } from '@/types';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { formatCurrency } from '@/lib/utils';
import { MapPin, Star, CheckCircle, Clock, ShieldCheck, Flame } from 'lucide-react';
import { BookingDrawer } from '@/components/booking/BookingDrawer';

export const PropertyDetailView: React.FC<{ property: Property }> = ({ property }) => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(property.gallery[0] || property.heroImage);

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-cream max-w-7xl mx-auto space-y-12">
      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-gold/30">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <Badge variant="gold">{property.location}</Badge>
            <Badge variant="terracotta">{property.stayType.toUpperCase()}</Badge>
            <span className="text-xs text-espresso/60 flex items-center gap-1 font-semibold">
              <Star className="w-3.5 h-3.5 fill-gold text-gold" /> {property.rating} ({property.reviewsCount} reviews)
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-light text-espresso leading-tight">
            {property.name}
          </h1>
          <p className="text-xs sm:text-sm text-espresso/70 mt-2 flex items-center gap-1">
            <MapPin className="w-4 h-4 text-terracotta" /> Verified Location in {property.location}, Maharashtra
          </p>
        </div>

        <div className="bg-sand/40 p-4 rounded-2xl border border-gold/30 flex items-center justify-between md:justify-end gap-6">
          <div>
            <span className="block text-[10px] uppercase tracking-wider font-semibold text-espresso/60">Starting Price</span>
            <span className="font-serif text-3xl text-terracotta font-normal">{formatCurrency(property.startingPrice)}</span>
            <span className="text-xs text-espresso/60"> /{property.unit}</span>
          </div>
          <Button variant="terracotta" size="lg" onClick={() => setBookingOpen(true)}>
            Book Stay Now
          </Button>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="space-y-4">
        <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden shadow-card border border-gold/30">
          <Image src={activeImage} alt={property.name} fill sizes="100vw" className="object-cover" priority />
        </div>
        <div className="grid grid-cols-6 gap-3">
          {property.gallery.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImage(img)}
              className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                activeImage === img ? 'border-terracotta scale-95' : 'border-transparent opacity-75 hover:opacity-100'
              }`}
            >
              <Image src={img} alt={`Gallery ${i + 1}`} fill sizes="15vw" className="object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h3 className="font-serif text-2xl font-light text-espresso mb-3">Overview & Experience</h3>
            <p className="font-sans text-sm sm:text-base text-espresso/80 leading-relaxed">{property.overview}</p>
          </div>

          <div>
            <h3 className="font-serif text-2xl font-light text-espresso mb-4">Package Inclusions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {property.inclusions.map((inc, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 bg-sand/30 rounded-xl border border-gold/20 text-xs sm:text-sm text-espresso font-medium">
                  <CheckCircle className="w-4 h-4 text-cypress shrink-0 mt-0.5" />
                  <span>{inc}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-serif text-2xl font-light text-espresso mb-4">Activities & Highlights</h3>
            <div className="flex flex-wrap gap-2">
              {property.activities.map((act, i) => (
                <span key={i} className="px-4 py-2 bg-cream border border-gold/40 rounded-full text-xs font-semibold text-espresso flex items-center gap-1.5 shadow-sm">
                  <Flame className="w-3.5 h-3.5 text-terracotta" /> {act}
                </span>
              ))}
            </div>
          </div>

          <div className="p-6 bg-sand/30 rounded-2xl border border-gold/30 grid grid-cols-2 gap-4">
            <div>
              <span className="block text-xs uppercase tracking-wider text-espresso/60 font-semibold mb-1">Check-in Time</span>
              <span className="font-serif text-xl text-espresso flex items-center gap-2"><Clock className="w-4 h-4 text-terracotta" /> {property.timings.checkIn}</span>
            </div>
            <div>
              <span className="block text-xs uppercase tracking-wider text-espresso/60 font-semibold mb-1">Check-out Time</span>
              <span className="font-serif text-xl text-espresso flex items-center gap-2"><Clock className="w-4 h-4 text-terracotta" /> {property.timings.checkOut}</span>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-2xl font-light text-espresso mb-4">House Rules & Guidelines</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-espresso/75 font-sans">
              {property.houseRules.map((rule, i) => (
                <li key={i} className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-gold shrink-0 mt-0.5" /> {rule}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-espresso text-cream p-6 rounded-2xl border border-gold/40 shadow-espresso sticky top-28 space-y-6">
            <h3 className="font-serif text-2xl font-light text-gold-light border-b border-gold/20 pb-3">Quick Reservation</h3>
            <div className="space-y-2 text-sm text-cream/80">
              <div className="flex justify-between"><span>Base Rate:</span><span className="font-semibold">{formatCurrency(property.startingPrice)} /{property.unit}</span></div>
              <div className="flex justify-between"><span>Capacity:</span><span>{property.capacity}</span></div>
              <div className="flex justify-between text-gold"><span>Instant Confirmation:</span><span>WhatsApp Deep-link</span></div>
            </div>
            <Button variant="terracotta" size="lg" className="w-full" onClick={() => setBookingOpen(true)}>
              Book This Stay
            </Button>
            <p className="text-[11px] text-cream/60 text-center">No upfront payment required. Enquire directly on WhatsApp.</p>
          </div>
        </div>
      </div>

      <BookingDrawer isOpen={bookingOpen} onClose={() => setBookingOpen(false)} selectedProperty={property} />
    </div>
  );
};
