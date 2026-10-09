import React from 'react';
import Link from 'next/link';
import { Compass, Phone, Mail, MapPin, Instagram, Youtube, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-espresso text-cream pt-16 pb-12 border-t border-gold/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gold/20">
          
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2">
              <Compass className="w-8 h-8 text-gold" />
              <div>
                <span className="font-serif text-2xl tracking-wide text-cream font-light">
                  WEEKEND <span className="italic text-terracotta">THRILLS</span>
                </span>
                <span className="block text-[9px] uppercase tracking-[0.25em] text-gold font-medium -mt-1">
                  Dive Into Divine Adventure
                </span>
              </div>
            </Link>
            <p className="font-sans text-sm text-cream/75 leading-relaxed max-w-md">
              Handpicked weekend experiences for travellers who want easy, memorable escapes without the hassle of planning. Simple bookings, scenic locations, and memorable weekends, all in one place.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.instagram.com/weekend_thrills_official/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center text-cream hover:bg-gold hover:text-espresso transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@weekendzthrillsofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center text-cream hover:bg-gold hover:text-espresso transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-normal text-gold-light mb-4">Quick Stays</h4>
            <ul className="space-y-2.5 text-sm text-cream/80 font-sans">
              <li><Link href="/camping" className="hover:text-gold transition-colors">Alibaug Beach Camping</Link></li>
              <li><Link href="/camping" className="hover:text-gold transition-colors">Pawna Lake Camping</Link></li>
              <li><Link href="/camping" className="hover:text-gold transition-colors">Matheran Jungle Camping</Link></li>
              <li><Link href="/villa" className="hover:text-gold transition-colors">Alibaug Luxury Villas</Link></li>
              <li><Link href="/villa" className="hover:text-gold transition-colors">Lonavala Hill Villas</Link></li>
              <li><Link href="/resorts" className="hover:text-gold transition-colors">Boutique Resorts</Link></li>
              <li><Link href="/cottages" className="hover:text-gold transition-colors">Heritage Cottages</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-normal text-gold-light mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-sm text-cream/80 font-sans">
              <li><Link href="/about-us" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link href="/blogs" className="hover:text-gold transition-colors">Travel Stories & Blogs</Link></li>
              <li><Link href="/faqs" className="hover:text-gold transition-colors">FAQs & Help</Link></li>
              <li><Link href="/quick-links" className="hover:text-gold transition-colors">Quick Links Directory</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-condition" className="hover:text-gold transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/admin/login" className="text-gold/70 hover:text-gold flex items-center gap-1">Admin Portal <ArrowUpRight className="w-3 h-3" /></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-normal text-gold-light mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-sm text-cream/80 font-sans">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-terracotta shrink-0 mt-1" />
                <a href="tel:+917030697820" className="hover:text-gold transition-colors">+91 70306 97820</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-terracotta shrink-0 mt-1" />
                <a href="mailto:WeekendThrillsofficial@gmail.com" className="hover:text-gold transition-colors break-all">WeekendThrillsofficial@gmail.com</a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-terracotta shrink-0 mt-1" />
                <span>Alibaug, Lonavala, Pawna Lake & Matheran, Maharashtra, India</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/60">
          <p>© {new Date().getFullYear()} Weekend Thrills. All Rights Reserved. Crafted with Italian Luxury Aesthetic.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-gold">Privacy</Link>
            <Link href="/terms-condition" className="hover:text-gold">Terms</Link>
            <Link href="/sitemap.xml" className="hover:text-gold">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
