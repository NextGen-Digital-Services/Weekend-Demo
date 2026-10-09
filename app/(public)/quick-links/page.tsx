import React from 'react';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ArrowRight, Compass } from 'lucide-react';

export default function QuickLinksPage() {
  const links = [
    { title: 'Home Page', href: '/' },
    { title: 'About Weekend Thrills', href: '/about-us' },
    { title: 'Beach & Lake Camping', href: '/camping' },
    { title: 'Alibaug Revdanda Beach Camping', href: '/camping/alibaug-beach-camping' },
    { title: 'Pawna Lake Lakeside Camping', href: '/camping/pawna-lake-camping' },
    { title: 'Matheran Eco Jungle Camping', href: '/camping/matheran-jungle-camping' },
    { title: 'Private Luxury Villas', href: '/villa' },
    { title: 'Alibaug Casa Amalfi Villa', href: '/villa/alibaug-villa' },
    { title: 'Lonavala Mist & Cloud Villa', href: '/villa/lonavala-villa' },
    { title: 'Boutique Resorts', href: '/resorts' },
    { title: 'Alibaug Palms Resort', href: '/resorts/alibaug-resorts' },
    { title: 'Heritage Cottages', href: '/cottages' },
    { title: 'Alibaug Coconut Grove Cottage', href: '/cottages/alibaug-cottage' },
    { title: 'Frequently Asked Questions', href: '/faqs' },
    { title: 'Travel Blogs & Stories', href: '/blogs' },
    { title: 'Privacy Policy', href: '/privacy-policy' },
    { title: 'Terms & Conditions', href: '/terms-condition' },
    { title: 'Admin Login', href: '/admin/login' },
  ];

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-cream max-w-4xl mx-auto space-y-8">
      <SectionHeading
        numeral="DIRECTORY"
        eyebrow="QUICK LINKS"
        title="Site Directory & Sitemap"
        subtitle="Quickly navigate to any stay listing, travel blog, or help section."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gold/20">
        {links.map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            className="p-4 bg-sand/30 rounded-xl border border-gold/30 hover:border-terracotta flex items-center justify-between text-sm font-serif text-espresso hover:text-terracotta transition-all group"
          >
            <span className="flex items-center gap-2"><Compass className="w-4 h-4 text-gold" /> {item.title}</span>
            <ArrowRight className="w-4 h-4 text-espresso/40 group-hover:text-terracotta group-hover:translate-x-1 transition-all" />
          </Link>
        ))}
      </div>
    </div>
  );
}
