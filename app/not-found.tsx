import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Compass, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center p-6 text-center space-y-6">
      <Compass className="w-16 h-16 text-gold animate-spin-slow" />
      <span className="text-xs uppercase tracking-[0.3em] font-semibold text-gold-dark">Error 404</span>
      <h1 className="font-serif text-4xl sm:text-6xl font-light text-espresso">
        Sanctuary <span className="italic text-terracotta">Not Found</span>
      </h1>
      <p className="text-sm sm:text-base text-espresso/70 max-w-md font-sans">
        The weekend getaway page you are looking for has been moved or does not exist. Let us guide you back home.
      </p>
      <Link href="/">
        <Button variant="terracotta" size="lg">
          <Home className="w-4 h-4" /> Return To Home
        </Button>
      </Link>
    </div>
  );
}
