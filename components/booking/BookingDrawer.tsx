'use client';

import React, { useState } from 'react';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { Property } from '@/types';
import { useApp } from '@/hooks/useApp';
import { generateWhatsAppLink } from '@/lib/utils';
import { Calendar, Users, Home, Phone, User, CheckCircle2 } from 'lucide-react';

interface BookingDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProperty?: Property | null;
}

export const BookingDrawer: React.FC<BookingDrawerProps> = ({
  isOpen,
  onClose,
  selectedProperty,
}) => {
  const { addBooking, settings } = useApp();
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [guestsCount, setGuestsCount] = useState(2);
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [customProperty, setCustomProperty] = useState<string | null>(null);

  const activePropertyName = customProperty || selectedProperty?.name || 'Alibaug Revdanda Beach Camping';
  const activeStayType = selectedProperty?.stayType || 'camping';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !guestPhone || !checkInDate) return;

    addBooking({
      guestName,
      guestPhone,
      checkInDate,
      guestsCount,
      stayType: activeStayType,
      propertyName: activePropertyName,
      notes,
    });

    const waLink = generateWhatsAppLink(
      settings.whatsappNumber || '917030697820',
      guestName,
      activePropertyName,
      checkInDate,
      guestsCount,
      notes
    );

    setSubmitted(true);
    setTimeout(() => {
      window.open(waLink, '_blank');
      setSubmitted(false);
      onClose();
    }, 800);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Reserve Your Getaway" maxWidth="lg">
      {submitted ? (
        <div className="text-center py-8 space-y-4">
          <CheckCircle2 className="w-16 h-16 text-cypress mx-auto animate-bounce" />
          <h4 className="font-serif text-2xl text-espresso font-light">Enquiry Received!</h4>
          <p className="text-sm text-espresso/70">Redirecting to WhatsApp to finalize your booking with our team...</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-espresso/80 mb-1">
              Select Destination / Stay
            </label>
            <div className="relative">
              <Home className="w-4 h-4 absolute left-3 top-3 text-gold" />
              <select
                value={activePropertyName}
                onChange={(e) => setCustomProperty(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-sand/30 border border-gold/40 rounded-xl text-sm font-sans text-espresso focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <option value="Alibaug Revdanda Beach Camping">Alibaug Beach Camping (₹849/person)</option>
                <option value="Pawna Lake Lakeside Camping">Pawna Lake Camping (₹999/person)</option>
                <option value="Matheran Eco Jungle Camping">Matheran Jungle Camping (₹1,699/person)</option>
                <option value="Alibaug Casa Amalfi Private Pool Villa">Alibaug Luxury Villa (₹8,999/night)</option>
                <option value="Lonavala Mist & Cloud Luxury Villa">Lonavala Villa (₹4,999/night)</option>
                <option value="Alibaug Palms Boutique Beach Resort">Alibaug Resort (₹1,999/room)</option>
                <option value="Alibaug Coconut Grove Heritage Cottage">Alibaug Cottage (₹1,499/room)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-espresso/80 mb-1">Your Full Name</label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3 top-3 text-gold" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 bg-sand/30 border border-gold/40 rounded-xl text-sm text-espresso focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-espresso/80 mb-1">WhatsApp Phone</label>
              <div className="relative">
                <Phone className="w-4 h-4 absolute left-3 top-3 text-gold" />
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={guestPhone}
                  onChange={(e) => setGuestPhone(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 bg-sand/30 border border-gold/40 rounded-xl text-sm text-espresso focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-espresso/80 mb-1">Check-in Date</label>
              <div className="relative">
                <Calendar className="w-4 h-4 absolute left-3 top-3 text-gold" />
                <input
                  type="date"
                  required
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 bg-sand/30 border border-gold/40 rounded-xl text-sm text-espresso focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-espresso/80 mb-1">Number of Guests</label>
              <div className="relative">
                <Users className="w-4 h-4 absolute left-3 top-3 text-gold" />
                <input
                  type="number"
                  min={1}
                  max={50}
                  value={guestsCount}
                  onChange={(e) => setGuestsCount(parseInt(e.target.value) || 1)}
                  className="w-full pl-9 pr-4 py-2.5 bg-sand/30 border border-gold/40 rounded-xl text-sm text-espresso focus:outline-none focus:ring-2 focus:ring-gold"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-espresso/80 mb-1">Special Requests / Notes (Optional)</label>
            <textarea
              rows={2}
              placeholder="e.g. Birthday decoration, non-veg meal preference, extra mattress..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full p-3 bg-sand/30 border border-gold/40 rounded-xl text-sm text-espresso focus:outline-none focus:ring-2 focus:ring-gold"
            />
          </div>

          <Button type="submit" variant="terracotta" size="lg" className="w-full mt-2">
            Confirm & Open WhatsApp
          </Button>
        </form>
      )}
    </Modal>
  );
};
