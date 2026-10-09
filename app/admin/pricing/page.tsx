'use client';

import React, { useState } from 'react';
import { useApp } from '@/hooks/useApp';
import { formatCurrency } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { Plus, Edit } from 'lucide-react';

export default function AdminPricingPage() {
  const { properties } = useApp();
  const [seasonalDiscounts] = useState([
    { id: '1', title: 'Monsoon Special Discount', code: 'MONSOON15', discount: '15% OFF', applyTo: 'Camping & Cottages' },
    { id: '2', title: 'Weekend Group Booking Surge', code: 'GROUP10', discount: '10% OFF 6+ Guests', applyTo: 'All Stays' },
  ]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-serif text-3xl font-light text-espresso">Pricing & Packages</h1>
        <p className="text-xs text-espresso/70">Configure base rates, weekend surcharges, seasonal rules, and group add-ons.</p>
      </div>

      <div className="bg-cream p-6 rounded-2xl border border-gold/30 shadow-card space-y-4">
        <h3 className="font-serif text-xl text-espresso font-normal pb-3 border-b border-gold/20 flex items-center justify-between">
          <span>Active Seasonal Rules & Discounts</span>
          <Button variant="outline" size="sm"><Plus className="w-3.5 h-3.5" /> Add Rule</Button>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {seasonalDiscounts.map((rule) => (
            <div key={rule.id} className="p-4 bg-sand/30 rounded-xl border border-gold/30 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-semibold text-terracotta">{rule.code}</span>
                <h4 className="font-serif text-lg font-normal text-espresso">{rule.title}</h4>
                <p className="text-xs text-espresso/70 mt-1">{rule.discount} • Applies to {rule.applyTo}</p>
              </div>
              <div className="flex gap-2">
                <button className="p-1.5 text-espresso/70 hover:text-espresso bg-cream rounded-lg border border-gold/30"><Edit className="w-3.5 h-3.5" /></button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-cream p-6 rounded-2xl border border-gold/30 shadow-card space-y-4">
        <h3 className="font-serif text-xl text-espresso font-normal pb-3 border-b border-gold/20">Base Rate Matrix</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-sand/30 uppercase text-[10px] tracking-wider text-espresso/70">
              <tr>
                <th className="p-3">Property Stay</th>
                <th className="p-3">Category</th>
                <th className="p-3">Weekday Rate</th>
                <th className="p-3">Weekend Rate</th>
                <th className="p-3">Peak Season</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gold/10">
              {properties.map((p) => (
                <tr key={p.id} className="hover:bg-sand/20">
                  <td className="p-3 font-semibold text-espresso">{p.name}</td>
                  <td className="p-3 text-espresso/70 uppercase text-[10px] font-semibold">{p.stayType}</td>
                  <td className="p-3 font-serif text-sm text-espresso">{formatCurrency(p.startingPrice)}</td>
                  <td className="p-3 font-serif text-sm text-terracotta">{formatCurrency(Math.round(p.startingPrice * 1.25))}</td>
                  <td className="p-3 font-serif text-sm text-cypress">{formatCurrency(Math.round(p.startingPrice * 1.5))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
