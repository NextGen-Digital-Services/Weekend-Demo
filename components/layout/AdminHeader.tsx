'use client';

import React from 'react';
import Link from 'next/link';
import { Menu, ExternalLink, RefreshCw } from 'lucide-react';
import { useApp } from '@/hooks/useApp';

export const AdminHeader: React.FC<{ onToggleSidebar: () => void }> = ({ onToggleSidebar }) => {
  const { resetDemoData } = useApp();

  const handleReset = () => {
    if (window.confirm('Reset all admin bookings, properties, blogs, and settings to original seed state?')) {
      resetDemoData();
      window.location.reload();
    }
  };

  return (
    <header className="bg-cream border-b border-gold/30 px-4 sm:px-6 py-3.5 flex items-center justify-between sticky top-0 z-30 shadow-sm">
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleSidebar}
          className="lg:hidden p-2 rounded-lg text-espresso hover:bg-sand/40"
          aria-label="Toggle Navigation Sidebar"
        >
          <Menu className="w-5 h-5" />
        </button>
        <div>
          <h2 className="font-serif text-xl font-normal text-espresso">Management Portal</h2>
          <span className="text-[10px] uppercase tracking-wider font-semibold text-gold-dark">Weekend Thrills System</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={handleReset}
          className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-sand/40 text-espresso hover:bg-sand border border-gold/40 transition-colors"
          title="Reset demo data to initial state"
        >
          <RefreshCw className="w-3.5 h-3.5 text-terracotta" /> Reset Demo Data
        </button>

        <Link
          href="/"
          target="_blank"
          className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-cream text-espresso border border-gold/40 hover:bg-sand/30"
        >
          View Live Site <ExternalLink className="w-3.5 h-3.5 text-gold" />
        </Link>

        <div className="flex items-center gap-2 pl-3 border-l border-gold/30 text-xs text-espresso font-semibold">
          <div className="w-8 h-8 rounded-full bg-espresso text-cream flex items-center justify-center font-serif">
            A
          </div>
          <span className="hidden sm:inline">Admin User</span>
        </div>
      </div>
    </header>
  );
};
