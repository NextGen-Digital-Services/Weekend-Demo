'use client';

import React, { useState } from 'react';
import { useApp } from '@/hooks/useApp';
import { Property, StayCategory } from '@/types';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { formatCurrency } from '@/lib/utils';
import { Plus, Edit2, Trash2, Star } from 'lucide-react';
import { IMAGES } from '@/data/images';

export default function AdminPropertiesPage() {
  const { properties, updateProperty, deleteProperty, addProperty } = useApp();
  const [modalOpen, setModalOpen] = useState(false);
  const [editingProp, setEditingProp] = useState<Partial<Property>>({
    name: '',
    slug: '',
    location: 'Alibaug',
    stayType: 'camping',
    startingPrice: 999,
    unit: 'person',
    capacity: '2 - 10 Guests',
    published: true,
    heroImage: IMAGES.alibaugBeachCamp1.url,
    overview: 'Beautiful weekend getaway stay with authentic hospitality.',
    inclusions: ['Breakfast Included', 'Bonfire', 'Clean Washrooms'],
    activities: ['Sightseeing', 'Bonfire', 'Barbecue'],
    timings: { checkIn: '04:00 PM', checkOut: '11:00 AM' },
    houseRules: ['ID mandatory at check-in.'],
    faqs: [],
    rating: 4.8,
    reviewsCount: 150,
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProp.name) return;

    if (editingProp.id) {
      updateProperty(editingProp as Property);
    } else {
      addProperty({
        ...(editingProp as Property),
        id: `prop-${Date.now()}`,
        slug: editingProp.name.toLowerCase().replace(/\s+/g, '-'),
        gallery: [IMAGES.alibaugBeachCamp1.url, IMAGES.pawnaLakeCamp1.url, IMAGES.alibaugVilla1.url],
      });
    }
    setModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-3xl font-light text-espresso">Properties & Stays</h1>
          <p className="text-xs text-espresso/70">Manage camping, villa, resort, and cottage listings and pricing.</p>
        </div>
        <Button
          variant="terracotta"
          size="sm"
          onClick={() => {
            setEditingProp({
              name: '',
              slug: '',
              location: 'Alibaug',
              stayType: 'camping',
              startingPrice: 999,
              unit: 'person',
              capacity: '2 - 10 Guests',
              published: true,
              heroImage: IMAGES.alibaugBeachCamp1.url,
              overview: 'Beautiful weekend stay with hospitality.',
              inclusions: ['Breakfast Included', 'Bonfire'],
              activities: ['Bonfire', 'Barbecue'],
              timings: { checkIn: '04:00 PM', checkOut: '11:00 AM' },
              houseRules: ['ID mandatory.'],
              faqs: [],
              rating: 4.8,
              reviewsCount: 100,
            });
            setModalOpen(true);
          }}
        >
          <Plus className="w-4 h-4" /> Add New Property
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((p) => (
          <div key={p.id} className="bg-cream rounded-2xl border border-gold/30 p-4 shadow-card space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase font-semibold text-gold-dark">{p.location} • {p.stayType}</span>
              <div className="flex gap-1">
                <button
                  onClick={() => updateProperty({ ...p, featured: !p.featured })}
                  className={`px-2 py-0.5 rounded text-[10px] font-semibold ${p.featured ? 'bg-terracotta text-cream' : 'bg-sand/40 text-espresso/60'}`}
                >
                  Featured
                </button>
              </div>
            </div>

            <h3 className="font-serif text-xl text-espresso font-normal leading-snug">{p.name}</h3>

            <div className="flex items-center justify-between text-xs pt-2 border-t border-gold/20">
              <span className="font-serif text-lg text-terracotta">{formatCurrency(p.startingPrice)} /{p.unit}</span>
              <span className="flex items-center gap-1 text-espresso/70"><Star className="w-3.5 h-3.5 fill-gold text-gold" /> {p.rating}</span>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2 border-t border-gold/20">
              <button
                onClick={() => {
                  setEditingProp(p);
                  setModalOpen(true);
                }}
                className="p-1.5 bg-sand/30 hover:bg-sand text-espresso rounded-lg text-xs font-semibold flex items-center gap-1"
              >
                <Edit2 className="w-3.5 h-3.5" /> Edit
              </button>
              <button
                onClick={() => deleteProperty(p.id)}
                className="p-1.5 bg-terracotta/15 text-terracotta hover:bg-terracotta/20 rounded-lg text-xs font-semibold"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={editingProp.id ? 'Edit Property' : 'Add Property'}>
        <form onSubmit={handleSave} className="space-y-4 text-xs">
          <div>
            <label className="block font-semibold mb-1">Property Title</label>
            <input
              type="text"
              required
              value={editingProp.name || ''}
              onChange={(e) => setEditingProp({ ...editingProp, name: e.target.value })}
              className="w-full p-2 bg-sand/30 border border-gold/40 rounded-xl"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold mb-1">Location</label>
              <select
                value={editingProp.location || 'Alibaug'}
                onChange={(e) => setEditingProp({ ...editingProp, location: e.target.value as Property['location'] })}
                className="w-full p-2 bg-sand/30 border border-gold/40 rounded-xl"
              >
                <option value="Alibaug">Alibaug</option>
                <option value="Pawna Lake">Pawna Lake</option>
                <option value="Lonavala">Lonavala</option>
                <option value="Matheran">Matheran</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold mb-1">Stay Category</label>
              <select
                value={editingProp.stayType || 'camping'}
                onChange={(e) => setEditingProp({ ...editingProp, stayType: e.target.value as StayCategory })}
                className="w-full p-2 bg-sand/30 border border-gold/40 rounded-xl"
              >
                <option value="camping">Camping</option>
                <option value="villa">Villa</option>
                <option value="resorts">Resort</option>
                <option value="cottages">Cottage</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold mb-1">Starting Price (₹)</label>
              <input
                type="number"
                value={editingProp.startingPrice || 999}
                onChange={(e) => setEditingProp({ ...editingProp, startingPrice: parseInt(e.target.value) || 0 })}
                className="w-full p-2 bg-sand/30 border border-gold/40 rounded-xl"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Unit</label>
              <select
                value={editingProp.unit || 'person'}
                onChange={(e) => setEditingProp({ ...editingProp, unit: e.target.value as Property['unit'] })}
                className="w-full p-2 bg-sand/30 border border-gold/40 rounded-xl"
              >
                <option value="person">person</option>
                <option value="night">night</option>
                <option value="room">room</option>
              </select>
            </div>
          </div>
          <Button type="submit" variant="terracotta" size="lg" className="w-full mt-2">
            Save Property Details
          </Button>
        </form>
      </Modal>
    </div>
  );
}
