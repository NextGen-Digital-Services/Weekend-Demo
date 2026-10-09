'use client';

import React, { useState } from 'react';
import { MapPin, Home, Calendar, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';

export const QuickSearch: React.FC<{ onSearch?: () => void }> = ({ onSearch }) => {
  const router = useRouter();
  const [location, setLocation] = useState('All');
  const [stayType, setStayType] = useState('camping');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/${stayType}`);
    if (onSearch) onSearch();
  };

  return (
    <form
      onSubmit={handleSearch}
      className="w-full max-w-4xl bg-cream/95 backdrop-blur-md p-4 sm:p-6 rounded-2xl sm:rounded-full shadow-espresso border border-gold/40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center"
    >
      <div className="flex items-center gap-3 px-3 py-2 border-b sm:border-b-0 sm:border-r border-gold/30">
        <MapPin className="w-5 h-5 text-terracotta shrink-0" />
        <div className="w-full">
          <label className="block text-[10px] uppercase tracking-wider font-semibold text-espresso/60">Location</label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full bg-transparent text-sm font-semibold text-espresso focus:outline-none cursor-pointer"
          >
            <option value="All">All Locations</option>
            <option value="Alibaug">Alibaug</option>
            <option value="Pawna Lake">Pawna Lake</option>
            <option value="Lonavala">Lonavala</option>
            <option value="Matheran">Matheran</option>
          </select>
        </div>
      </div>

      <div className="flex items-center gap-3 px-3 py-2 border-b sm:border-b-0 lg:border-r border-gold/30">
        <Home className="w-5 h-5 text-terracotta shrink-0" />
        <div className="w-full">
          <label className="block text-[10px] uppercase tracking-wider font-semibold text-espresso/60">Stay Experience</label>
          <select
            value={stayType}
            onChange={(e) => setStayType(e.target.value)}
            className="w-full bg-transparent text-sm font-semibold text-espresso focus:outline-none cursor-pointer"
          >
            <option value="camping">Beach & Lake Camping</option>
            <option value="villa">Private Pool Villas</option>
            <option value="resorts">Boutique Resorts</option>
            <option value="cottages">Heritage Cottages</option>
          </select>
        </div>
      </div>

      <div className="flex items-center gap-3 px-3 py-2">
        <Calendar className="w-5 h-5 text-terracotta shrink-0" />
        <div className="w-full">
          <label className="block text-[10px] uppercase tracking-wider font-semibold text-espresso/60">Check-in</label>
          <input
            type="date"
            className="w-full bg-transparent text-xs font-semibold text-espresso focus:outline-none cursor-pointer"
          />
        </div>
      </div>

      <Button type="submit" variant="terracotta" size="lg" className="w-full h-full py-3">
        <Search className="w-4 h-4" /> Find Your Stay
      </Button>
    </form>
  );
};
