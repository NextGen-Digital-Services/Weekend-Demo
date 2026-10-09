'use client';

import React from 'react';
import { useApp } from '@/hooks/useApp';
import { formatCurrency, formatDate } from '@/lib/utils';
import { CalendarCheck, DollarSign, Clock, CheckCircle2, TrendingUp, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboardPage() {
  const { bookings, properties } = useApp();

  const totalBookings = bookings.length;
  const pendingCount = bookings.filter((b) => b.status === 'New' || b.status === 'Contacted').length;
  const confirmedCount = bookings.filter((b) => b.status === 'Confirmed' || b.status === 'Completed').length;
  const totalEstRevenue = bookings.reduce((sum, b) => sum + (b.totalAmount || 2500), 0);

  const recentBookings = bookings.slice(0, 5);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-serif text-3xl font-light text-espresso">Dashboard Overview</h1>
        <p className="text-xs text-espresso/70">Real-time performance summary and latest reservation enquiries.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-cream p-6 rounded-2xl border border-gold/30 shadow-card flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-wider font-semibold text-espresso/60">Total Enquiries</span>
            <span className="block font-serif text-3xl text-espresso mt-1">{totalBookings}</span>
            <span className="text-[11px] text-cypress flex items-center gap-1 mt-1 font-semibold"><TrendingUp className="w-3 h-3" /> +14% this week</span>
          </div>
          <div className="w-12 h-12 bg-sand/40 border border-gold/40 rounded-full flex items-center justify-center text-terracotta">
            <CalendarCheck className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-cream p-6 rounded-2xl border border-gold/30 shadow-card flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-wider font-semibold text-espresso/60">Pending Follow-up</span>
            <span className="block font-serif text-3xl text-terracotta mt-1">{pendingCount}</span>
            <span className="text-[11px] text-terracotta flex items-center gap-1 mt-1 font-semibold"><Clock className="w-3 h-3" /> Action required</span>
          </div>
          <div className="w-12 h-12 bg-terracotta/15 border border-terracotta/30 rounded-full flex items-center justify-center text-terracotta">
            <Clock className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-cream p-6 rounded-2xl border border-gold/30 shadow-card flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-wider font-semibold text-espresso/60">Confirmed Stays</span>
            <span className="block font-serif text-3xl text-cypress mt-1">{confirmedCount}</span>
            <span className="text-[11px] text-cypress flex items-center gap-1 mt-1 font-semibold"><CheckCircle2 className="w-3 h-3" /> Verified vouchers</span>
          </div>
          <div className="w-12 h-12 bg-cypress/15 border border-cypress/30 rounded-full flex items-center justify-center text-cypress">
            <CheckCircle2 className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-cream p-6 rounded-2xl border border-gold/30 shadow-card flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-wider font-semibold text-espresso/60">Estimated Revenue</span>
            <span className="block font-serif text-3xl text-espresso mt-1">{formatCurrency(totalEstRevenue)}</span>
            <span className="text-[11px] text-gold-dark flex items-center gap-1 mt-1 font-semibold">100% Client-side store</span>
          </div>
          <div className="w-12 h-12 bg-gold/15 border border-gold/40 rounded-full flex items-center justify-center text-gold-dark">
            <DollarSign className="w-6 h-6" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-cream p-6 rounded-2xl border border-gold/30 shadow-card space-y-4">
          <div className="flex items-center justify-between pb-4 border-b border-gold/20">
            <h3 className="font-serif text-xl font-normal text-espresso">Recent Reservation Enquiries</h3>
            <Link href="/admin/bookings" className="text-xs font-semibold text-terracotta hover:underline flex items-center gap-1">
              View All <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-sand/30 text-espresso/70 uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="p-3">ID</th>
                  <th className="p-3">Guest Name</th>
                  <th className="p-3">Stay</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gold/10">
                {recentBookings.map((b) => (
                  <tr key={b.id} className="hover:bg-sand/20">
                    <td className="p-3 font-semibold text-espresso">{b.id}</td>
                    <td className="p-3 font-medium">{b.guestName}</td>
                    <td className="p-3 text-espresso/80 truncate max-w-[150px]">{b.propertyName}</td>
                    <td className="p-3">{formatDate(b.checkInDate)}</td>
                    <td className="p-3">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold ${
                        b.status === 'New' ? 'bg-terracotta/15 text-terracotta' :
                        b.status === 'Confirmed' ? 'bg-cypress/15 text-cypress' : 'bg-gold/15 text-gold-dark'
                      }`}>
                        {b.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-cream p-6 rounded-2xl border border-gold/30 shadow-card space-y-4">
          <h3 className="font-serif text-xl font-normal text-espresso pb-4 border-b border-gold/20">Top Stays</h3>
          <div className="space-y-4">
            {properties.slice(0, 4).map((p) => (
              <div key={p.id} className="flex items-center justify-between text-xs pb-3 border-b border-gold/10 last:border-0">
                <div>
                  <h4 className="font-semibold text-espresso">{p.name}</h4>
                  <span className="text-[10px] text-espresso/60">{p.location} • {p.stayType}</span>
                </div>
                <span className="font-serif text-sm text-terracotta font-normal">{formatCurrency(p.startingPrice)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
