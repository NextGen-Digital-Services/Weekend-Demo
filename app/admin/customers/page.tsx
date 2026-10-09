'use client';

import React, { useState } from 'react';
import { useApp } from '@/hooks/useApp';
import { formatCurrency } from '@/lib/utils';
import { Search, Phone, Mail } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

export default function AdminCustomersPage() {
  const { customers } = useApp();
  const [search, setSearch] = useState('');

  const filtered = customers.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.phone.includes(search) ||
      (c.email && c.email.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl font-light text-espresso">Customers CRM</h1>
          <p className="text-xs text-espresso/70">Track repeat travellers, booking history, and customer tags.</p>
        </div>
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 absolute left-3 top-3 text-gold" />
          <input
            type="text"
            placeholder="Search customer name or phone..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-cream border border-gold/40 rounded-xl text-xs text-espresso focus:outline-none"
          />
        </div>
      </div>

      <div className="bg-cream rounded-2xl border border-gold/30 shadow-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-sand/30 uppercase text-[10px] tracking-wider text-espresso/70">
              <tr>
                <th className="p-4">Customer</th>
                <th className="p-4">Contact</th>
                <th className="p-4">Bookings</th>
                <th className="p-4">Total Spent</th>
                <th className="p-4">Tags</th>
                <th className="p-4">Last Stay</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gold/10">
              {filtered.map((c) => (
                <tr key={c.id} className="hover:bg-sand/20">
                  <td className="p-4 font-semibold text-espresso">{c.name}</td>
                  <td className="p-4 space-y-0.5">
                    <div className="flex items-center gap-1 text-espresso/80"><Phone className="w-3 h-3 text-terracotta" /> {c.phone}</div>
                    {c.email && <div className="flex items-center gap-1 text-[10px] text-espresso/60"><Mail className="w-3 h-3 text-gold" /> {c.email}</div>}
                  </td>
                  <td className="p-4 font-semibold">{c.totalBookings} Stays</td>
                  <td className="p-4 font-serif text-sm text-terracotta font-normal">{formatCurrency(c.totalSpent)}</td>
                  <td className="p-4 flex flex-wrap gap-1">
                    {c.tags.map((t, idx) => (
                      <Badge key={idx} variant="gold">{t}</Badge>
                    ))}
                  </td>
                  <td className="p-4 text-espresso/70">{c.lastBookingDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
