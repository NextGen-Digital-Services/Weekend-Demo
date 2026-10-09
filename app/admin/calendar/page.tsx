'use client';

import React, { useState } from 'react';
import { useApp } from '@/hooks/useApp';
import { Calendar as CalendarIcon, Lock, Unlock } from 'lucide-react';

export default function AdminCalendarPage() {
  const { properties } = useApp();
  const [selectedPropertyId, setSelectedPropertyId] = useState(properties[0]?.id || '');
  const [blockedDates, setBlockedDates] = useState<string[]>(['2026-10-15', '2026-10-24']);

  const daysInMonth = Array.from({ length: 31 }, (_, i) => {
    const day = i + 1;
    const dateStr = `2026-10-${day < 10 ? '0' + day : day}`;
    return { day, dateStr, isBlocked: blockedDates.includes(dateStr) };
  });

  const toggleBlock = (dateStr: string) => {
    if (blockedDates.includes(dateStr)) {
      setBlockedDates(blockedDates.filter((d) => d !== dateStr));
    } else {
      setBlockedDates([...blockedDates, dateStr]);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl font-light text-espresso">Availability Calendar</h1>
          <p className="text-xs text-espresso/70">Block out maintenance or private booking dates across properties.</p>
        </div>
        <select
          value={selectedPropertyId}
          onChange={(e) => setSelectedPropertyId(e.target.value)}
          className="bg-cream border border-gold/40 rounded-xl px-4 py-2.5 text-xs font-semibold text-espresso cursor-pointer"
        >
          {properties.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name} ({p.location})
            </option>
          ))}
        </select>
      </div>

      <div className="bg-cream p-6 rounded-2xl border border-gold/30 shadow-card space-y-6">
        <div className="flex items-center justify-between border-b border-gold/20 pb-4">
          <div className="flex items-center gap-2">
            <CalendarIcon className="w-5 h-5 text-terracotta" />
            <h3 className="font-serif text-xl font-normal text-espresso">October 2026</h3>
          </div>
          <div className="flex gap-2">
            <span className="text-xs flex items-center gap-1 font-medium text-espresso/70"><span className="w-3 h-3 bg-cypress rounded-full" /> Available</span>
            <span className="text-xs flex items-center gap-1 font-medium text-espresso/70"><span className="w-3 h-3 bg-terracotta rounded-full" /> Blocked</span>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-2 text-center text-xs font-semibold text-espresso/60 mb-2 uppercase tracking-wider">
          <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
        </div>

        <div className="grid grid-cols-7 gap-2">
          {daysInMonth.map((item) => (
            <button
              key={item.day}
              onClick={() => toggleBlock(item.dateStr)}
              className={`aspect-square rounded-xl p-2 flex flex-col items-center justify-between border transition-all text-xs ${
                item.isBlocked
                  ? 'bg-terracotta/15 border-terracotta text-terracotta font-bold'
                  : 'bg-sand/30 border-gold/20 text-espresso hover:bg-sand/60'
              }`}
            >
              <span>{item.day}</span>
              {item.isBlocked ? <Lock className="w-3 h-3" /> : <Unlock className="w-3 h-3 opacity-40" />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
