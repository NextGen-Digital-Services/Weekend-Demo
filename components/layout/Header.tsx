'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Menu, X, Compass } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { MobileNav } from './MobileNav';

export const Header: React.FC<{ onOpenBooking?: () => void }> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Camping', href: '/camping' },
    { name: 'Villas', href: '/villa' },
    { name: 'Resorts', href: '/resorts' },
    { name: 'Cottages', href: '/cottages' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'FAQs', href: '/faqs' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-cream/95 backdrop-blur-md shadow-card border-b border-gold/20 py-3'
            : 'bg-gradient-to-b from-espresso/80 via-espresso/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <Compass className={`w-7 h-7 transition-transform group-hover:rotate-45 ${scrolled ? 'text-terracotta' : 'text-gold-light'}`} />
            <div>
              <span className={`font-serif text-2xl tracking-wide font-light ${scrolled ? 'text-espresso' : 'text-cream'}`}>
                WEEKEND <span className="italic font-normal text-terracotta">THRILLS</span>
              </span>
              <span className="block text-[9px] uppercase tracking-[0.25em] text-gold font-medium -mt-1">
                Dive Into Divine Adventure
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  scrolled
                    ? 'text-espresso/90 hover:text-terracotta'
                    : 'text-cream/90 hover:text-gold-light'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+917030697820"
              className={`flex items-center gap-2 text-xs font-semibold tracking-wider transition-colors ${
                scrolled ? 'text-espresso hover:text-terracotta' : 'text-cream hover:text-gold-light'
              }`}
            >
              <Phone className="w-4 h-4 text-terracotta" />
              +91 70306 97820
            </a>

            <Button variant="terracotta" size="sm" onClick={onOpenBooking}>
              Book Your Stay
            </Button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-espresso hover:bg-sand/40' : 'text-cream hover:bg-white/10'
            }`}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
        onOpenBooking={onOpenBooking}
      />
    </>
  );
};
