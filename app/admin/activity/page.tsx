'use client';

import React from 'react';
import { useApp } from '@/hooks/useApp';
import { Activity, RefreshCw, Clock } from 'lucide-react';

export default function AdminActivityPage() {
  const { resetDemoData, bookings } = useApp();

  const handleReset = () => {
    if (window.confirm('Reset all demo data back to original seeded state?')) {
      resetDemoData();
      window.location.reload();
    }
  };

  const logs = [
    { id: '1', time: 'Just now', action: 'System Init', user: 'Admin', details: 'Initialized local storage store with 25 bookings & properties.' },
    { id: '2', time: '10 mins ago', action: 'New Booking', user: 'Guest (Website)', details: `Received booking enquiry for ${bookings[0]?.propertyName || 'Camping'}.` },
    { id: '3', time: '1 hour ago', action: 'Price Update', user: 'Admin', details: 'Updated Revdanda Beach Camping starting rate to ₹849.' },
    { id: '4', time: '3 hours ago', action: 'Review Moderated', user: 'Admin', details: 'Featured Google Review from Rohan Sharma on Homepage.' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl font-light text-espresso">Activity Log & Notifications</h1>
          <p className="text-xs text-espresso/70">Audit history of changes, booking notifications, and demo reset controls.</p>
        </div>
        <button
          onClick={handleReset}
          className="px-4 py-2.5 bg-terracotta text-cream rounded-full text-xs font-semibold hover:bg-terracotta-hover flex items-center gap-2 shadow-terracotta"
        >
          <RefreshCw className="w-4 h-4" /> Reset All Demo Data
        </button>
      </div>

      <div className="bg-cream p-6 rounded-2xl border border-gold/30 shadow-card space-y-4">
        <h3 className="font-serif text-xl font-normal text-espresso pb-3 border-b border-gold/20">System Audit Trail</h3>
        <div className="space-y-3">
          {logs.map((log) => (
            <div key={log.id} className="p-4 bg-sand/30 rounded-xl border border-gold/20 flex items-start gap-3">
              <Activity className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
              <div className="flex-1 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-espresso">{log.action}</span>
                  <span className="text-[10px] text-espresso/60 flex items-center gap-1"><Clock className="w-3 h-3" /> {log.time}</span>
                </div>
                <p className="text-espresso/75 mt-1">{log.details}</p>
                <span className="text-[10px] text-gold-dark font-medium mt-1 block">Triggered by: {log.user}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
