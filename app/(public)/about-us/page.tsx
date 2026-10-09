import React from 'react';
import Image from 'next/image';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { IMAGES } from '@/data/images';
import { ShieldCheck, Heart, MapPin, Award } from 'lucide-react';

export default function AboutUsPage() {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-cream">
      <div className="max-w-7xl mx-auto space-y-16">
        <SectionHeading
          numeral="ABOUT US"
          eyebrow="OUR STORY"
          title="Handpicked Weekend Experiences"
          italicWord="Without The Hassle"
          subtitle="Weekend Thrills was born out of a simple belief: travellers deserve easy, memorable weekend getaways without spending hours planning."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-t-[100px] rounded-b-2xl overflow-hidden shadow-card border border-gold/30">
            <Image
              src={IMAGES.italianArchTexture.url}
              alt="Weekend Thrills editorial imagery"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="space-y-6 font-sans text-espresso/80 leading-relaxed text-sm sm:text-base">
            <h3 className="font-serif text-3xl text-espresso font-normal">
              Dive Into <span className="italic text-terracotta">Divine</span> Adventure
            </h3>
            <p>
              Whether you want to sleep in beachfront tents on Revdanda shore, pitch a tent beside Pawna Lake waters, relax in a private Lonavala pool villa, or explore Matheran jungle trails, Weekend Thrills curates authentic stays with verified hosts.
            </p>
            <p>
              We handle every detail—from welcome snacks and marinated barbecue to evening bonfires and clean amenities—so you can focus entirely on creating memories with loved ones.
            </p>
            <div className="p-4 bg-sand/40 rounded-xl border border-gold/30 font-serif italic text-espresso text-base">
              &ldquo;Simple bookings, scenic locations, and memorable weekends, all in one place.&rdquo;
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
          {[
            { title: '10,000+ Travellers', desc: 'Hosted across Maharashtra coastal and hill getaways.', icon: ShieldCheck },
            { title: '4.8 Google Rating', desc: 'Verified 5-star reviews from real travellers.', icon: Award },
            { title: '100% Satisfaction', desc: 'Direct WhatsApp booking with host assistance.', icon: Heart },
            { title: '4 Destination Hubs', desc: 'Alibaug, Lonavala, Pawna Lake, Matheran.', icon: MapPin },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-sand/20 p-6 rounded-2xl border border-gold/30 text-center space-y-2">
                <Icon className="w-6 h-6 text-terracotta mx-auto" />
                <h4 className="font-serif text-xl font-normal text-espresso">{item.title}</h4>
                <p className="text-xs text-espresso/70">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
