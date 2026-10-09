import React from 'react';
import { Compass } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center p-6 space-y-4">
      <Compass className="w-12 h-12 text-terracotta animate-spin" />
      <span className="font-serif text-xl font-light text-espresso">
        Loading Weekend <span className="italic text-terracotta">Thrills</span>...
      </span>
    </div>
  );
}
