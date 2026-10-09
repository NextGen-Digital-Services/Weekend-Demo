import React from 'react';
import Image from 'next/image';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { IMAGES } from '@/data/images';
import { ShieldCheck, HeartHandshake, Sparkles, MapPin } from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const points = [
    { title: 'Handpicked Quality', desc: 'Every tent, villa, resort and cottage is personally verified for cleanliness & safety.', icon: ShieldCheck },
    { title: 'Seamless Booking', desc: 'Instant WhatsApp reservation confirmation without tedious paperwork.', icon: HeartHandshake },
    { title: 'Memorable Experiences', desc: 'BBQ night, live bonfires, stargazing, private pools & home-cooked Konkani thalis.', icon: Sparkles },
    { title: 'Prime Maharashtra Spots', desc: 'Exclusive locations in Alibaug, Lonavala, Pawna Lake & Matheran.', icon: MapPin },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div className="space-y-6">
          <SectionHeading
            numeral="III"
            eyebrow="WHY WEEKEND THRILLS"
            title="Hospitality Defined By"
            italicWord="Elegance"
            align="left"
          />

          <p className="font-serif italic text-lg text-espresso/90 leading-relaxed border-l-2 border-gold pl-4">
            &ldquo;We craft easy, memorable escapes for travellers who desire serene weekend sanctuaries without the stress of planning.&rdquo;
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            {points.map((pt, i) => {
              const Icon = pt.icon;
              return (
                <div key={i} className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-sand/60 border border-gold/40 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-terracotta" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-espresso font-normal">{pt.title}</h4>
                    <p className="text-xs text-espresso/70 mt-1 leading-relaxed">{pt.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-4 border-t border-gold/30">
            <p className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-gold-dark">
              Simple bookings, scenic locations, and memorable weekends, all in one place.
            </p>
          </div>
        </div>

        <div className="relative aspect-[4/5] rounded-t-[140px] rounded-b-3xl overflow-hidden shadow-espresso border border-gold/30">
          <Image
            src={IMAGES.italianArchTexture.url}
            alt="Warm Tuscan architectural arches and olive light"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 text-cream p-6 bg-espresso/80 backdrop-blur-md rounded-2xl border border-gold/30">
            <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold block">Crafted Experiences</span>
            <h4 className="font-serif text-2xl font-light text-cream mt-1">10,000+ Happy Guests Hosted</h4>
          </div>
        </div>

      </div>
    </section>
  );
};
