'use client';

import React, { useState } from 'react';
import { Coupon } from '@/types';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { Plus } from 'lucide-react';

export default function AdminCouponsPage() {
  const [coupons, setCoupons] = useState<Coupon[]>([
    { id: 'c1', code: 'WEEKEND15', discountPercent: 15, validUntil: '2026-11-30', usageCount: 42, active: true },
    { id: 'c2', code: 'ALIBAUG500', discountAmount: 500, validUntil: '2026-12-31', usageCount: 19, active: true },
    { id: 'c3', code: 'PAWNA100', discountAmount: 100, validUntil: '2026-10-20', usageCount: 8, active: false },
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  const [newCode, setNewCode] = useState('');
  const [discountVal, setDiscountVal] = useState(10);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCode) return;
    setCoupons([
      ...coupons,
      {
        id: `c-${Date.now()}`,
        code: newCode.toUpperCase(),
        discountPercent: discountVal,
        validUntil: '2026-12-31',
        usageCount: 0,
        active: true,
      },
    ]);
    setNewCode('');
    setModalOpen(false);
  };

  const toggleActive = (id: string) => {
    setCoupons(coupons.map((c) => (c.id === id ? { ...c, active: !c.active } : c)));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-3xl font-light text-espresso">Coupons & Promo Offers</h1>
          <p className="text-xs text-espresso/70">Create promotional codes, discount percentages, and validity limits.</p>
        </div>
        <Button variant="terracotta" size="sm" onClick={() => setModalOpen(true)}>
          <Plus className="w-4 h-4" /> Create Coupon
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {coupons.map((c) => (
          <div key={c.id} className="bg-cream p-5 rounded-2xl border border-gold/30 shadow-card space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-base font-bold text-terracotta border border-terracotta/30 px-3 py-1 rounded-lg bg-terracotta/10">
                {c.code}
              </span>
              <button
                onClick={() => toggleActive(c.id)}
                className={`px-3 py-1 rounded-full text-[10px] font-semibold ${
                  c.active ? 'bg-cypress/20 text-cypress' : 'bg-espresso/20 text-espresso'
                }`}
              >
                {c.active ? 'Active' : 'Expired'}
              </button>
            </div>
            <div className="text-xs text-espresso/80 space-y-1">
              <p className="font-serif text-lg text-espresso font-normal">
                {c.discountPercent ? `${c.discountPercent}% Discount` : `₹${c.discountAmount} Flat OFF`}
              </p>
              <p className="text-espresso/60">Valid until {c.validUntil} • {c.usageCount} redemption(s)</p>
            </div>
          </div>
        ))}
      </div>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Create Coupon Code">
        <form onSubmit={handleAdd} className="space-y-4 text-xs">
          <div>
            <label className="block font-semibold mb-1">Coupon Code</label>
            <input
              type="text"
              required
              placeholder="e.g. DIWALI20"
              value={newCode}
              onChange={(e) => setNewCode(e.target.value)}
              className="w-full p-2 bg-sand/30 border border-gold/40 rounded-xl font-mono uppercase"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Discount Percentage (%)</label>
            <input
              type="number"
              min={1}
              max={100}
              value={discountVal}
              onChange={(e) => setDiscountVal(parseInt(e.target.value) || 10)}
              className="w-full p-2 bg-sand/30 border border-gold/40 rounded-xl"
            />
          </div>
          <Button type="submit" variant="terracotta" size="lg" className="w-full">
            Save Coupon Code
          </Button>
        </form>
      </Modal>
    </div>
  );
}
