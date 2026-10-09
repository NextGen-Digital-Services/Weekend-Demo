import React from 'react';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ArchImage } from '@/components/ui/ArchImage';
import { IMAGES } from '@/data/images';
import { ArrowRight } from 'lucide-react';

export const CategorySection: React.FC = () => {
  const categories = [
    {
      title: 'Beach & Lake Camping',
      href: '/camping',
      price: 'From ₹849 / person',
      image: IMAGES.alibaugBeachCamp1.url,
      locations: 'Alibaug • Pawna Lake • Matheran',
      count: '3 Verified Campsites',
    },
    {
      title: 'Private Pool Villas',
      href: '/villa',
      price: 'From ₹4,999 / night',
      image: IMAGES.alibaugVilla1.url,
      locations: 'Alibaug • Lonavala',
      count: 'Luxury Private Sanctuaries',
    },
    {
      title: 'Boutique Resorts',
      href: '/resorts',
      price: 'From ₹1,999 / room',
      image: IMAGES.alibaugResort1.url,
      locations: 'Alibaug Coast',
      count: 'Pools & Palm Gardens',
    },
    {
      title: 'Heritage Cottages',
      href: '/cottages',
      price: 'From ₹1,499 / room',
      image: IMAGES.alibaugCottage1.url,
      locations: 'Alibaug Orchards',
      count: 'Rustic Nature Stays',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          numeral="I"
          eyebrow="STAY CATEGORIES"
          title="Explore Our Signature"
          italicWord="Sanctuaries"
          subtitle="Whether you crave a beachside bonfire under night stars, a private hillside pool villa, or a serene orchard cottage."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <Link key={idx} href={cat.href} className="group block">
              <div className="bg-cream rounded-t-[100px] rounded-b-2xl border border-gold/30 p-4 shadow-card hover:shadow-terracotta transition-all duration-500">
                <ArchImage
                  src={cat.image}
                  alt={cat.title}
                  aspectRatio="portrait"
                  className="w-full"
                />
                <div className="pt-5 pb-2 px-2 text-center">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-gold-dark block">
                    {cat.locations}
                  </span>
                  <h3 className="font-serif text-2xl text-espresso font-normal mt-1 group-hover:text-terracotta transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs font-semibold text-terracotta mt-2">{cat.price}</p>
                  <div className="inline-flex items-center gap-1 text-xs font-medium text-espresso/70 mt-3 group-hover:text-terracotta">
                    Browse Category <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
