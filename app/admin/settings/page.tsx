'use client';

import React, { useState } from 'react';
import { useApp } from '@/hooks/useApp';
import { Button } from '@/components/ui/Button';
import { Save, Check } from 'lucide-react';

export default function AdminSettingsPage() {
  const { settings, updateSettings } = useApp();
  const [formData, setFormData] = useState(settings);
  const [saved, setSaved] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings(formData);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="font-serif text-3xl font-light text-espresso">Site Settings</h1>
        <p className="text-xs text-espresso/70">Global configurations for phone, WhatsApp deep-link, hero titles, announcement banner & GST info.</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-cream p-6 rounded-2xl border border-gold/30 shadow-card space-y-6 text-xs font-sans">
        {saved && (
          <div className="p-3 bg-cypress/20 text-cypress rounded-xl border border-cypress/40 flex items-center gap-2 font-semibold">
            <Check className="w-4 h-4" /> Global Site Settings Updated Successfully!
          </div>
        )}

        <div className="space-y-4">
          <h3 className="font-serif text-xl font-normal text-espresso border-b border-gold/20 pb-2">Brand Info</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1">Brand Name</label>
              <input
                type="text"
                value={formData.brandName}
                onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                className="w-full p-2.5 bg-sand/30 border border-gold/40 rounded-xl"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Tagline</label>
              <input
                type="text"
                value={formData.tagline}
                onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                className="w-full p-2.5 bg-sand/30 border border-gold/40 rounded-xl"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-serif text-xl font-normal text-espresso border-b border-gold/20 pb-2">Contact & WhatsApp Deep Link</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block font-semibold mb-1">Public Phone</label>
              <input
                type="text"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full p-2.5 bg-sand/30 border border-gold/40 rounded-xl"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">WhatsApp Number (digits only)</label>
              <input
                type="text"
                value={formData.whatsappNumber}
                onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                className="w-full p-2.5 bg-sand/30 border border-gold/40 rounded-xl"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Public Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-2.5 bg-sand/30 border border-gold/40 rounded-xl"
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-serif text-xl font-normal text-espresso border-b border-gold/20 pb-2">Banners & Business Credentials</h3>
          <div>
            <label className="block font-semibold mb-1">Announcement Bar Text</label>
            <input
              type="text"
              value={formData.announcementText}
              onChange={(e) => setFormData({ ...formData, announcementText: e.target.value })}
              className="w-full p-2.5 bg-sand/30 border border-gold/40 rounded-xl"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1">GST Number</label>
              <input
                type="text"
                value={formData.gstNumber}
                onChange={(e) => setFormData({ ...formData, gstNumber: e.target.value })}
                className="w-full p-2.5 bg-sand/30 border border-gold/40 rounded-xl font-mono"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">HQ Address</label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full p-2.5 bg-sand/30 border border-gold/40 rounded-xl"
              />
            </div>
          </div>
        </div>

        <Button type="submit" variant="terracotta" size="lg" className="w-full">
          <Save className="w-4 h-4" /> Save All Site Settings
        </Button>
      </form>
    </div>
  );
}
