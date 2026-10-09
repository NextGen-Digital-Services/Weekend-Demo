'use client';

import React, { useState } from 'react';
import { useApp } from '@/hooks/useApp';
import { BookingStatus, Booking } from '@/types';
import { formatDate, generateWhatsAppLink } from '@/lib/utils';
import { Search, Download, MessageCircle, Trash2, Eye } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';

export default function AdminBookingsPage() {
  const { bookings, updateBookingStatus, deleteBooking, settings } = useApp();
  const [filterStatus, setFilterStatus] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeBooking, setActiveBooking] = useState<Booking | null>(null);

  const filtered = bookings.filter((b) => {
    const matchesStatus = filterStatus === 'All' || b.status === filterStatus;
    const matchesSearch =
      b.guestName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.propertyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.guestPhone.includes(searchTerm);
    return matchesStatus && matchesSearch;
  });

  const exportCSV = () => {
    const headers = ['ID,Guest Name,Phone,Property,CheckIn,Guests,Status,TotalAmount\n'];
    const rows = filtered.map((b) => `${b.id},"${b.guestName}",${b.guestPhone},"${b.propertyName}",${b.checkInDate},${b.guestsCount},${b.status},${b.totalAmount || 0}`);
    const blob = new Blob([headers.concat(rows.join('\n')).join('')], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `weekend-thrills-bookings-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl font-light text-espresso">Bookings & Enquiries</h1>
          <p className="text-xs text-espresso/70">Manage customer reservations, change status, and send WhatsApp replies.</p>
        </div>
        <Button variant="outline" size="sm" onClick={exportCSV}>
          <Download className="w-4 h-4" /> Export CSV
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 bg-cream p-4 rounded-2xl border border-gold/30 shadow-sm">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-3 text-gold" />
          <input
            type="text"
            placeholder="Search guest name, phone, or stay..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-sand/30 border border-gold/30 rounded-xl text-xs text-espresso focus:outline-none"
          />
        </div>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="bg-sand/30 border border-gold/30 rounded-xl px-3 py-2 text-xs font-semibold text-espresso cursor-pointer"
        >
          <option value="All">All Statuses ({bookings.length})</option>
          <option value="New">New</option>
          <option value="Contacted">Contacted</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Completed">Completed</option>
          <option value="Cancelled">Cancelled</option>
        </select>
      </div>

      <div className="bg-cream rounded-2xl border border-gold/30 shadow-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-sand/30 uppercase text-[10px] tracking-wider text-espresso/70">
              <tr>
                <th className="p-4">ID</th>
                <th className="p-4">Guest</th>
                <th className="p-4">Stay</th>
                <th className="p-4">Check-in</th>
                <th className="p-4">Guests</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gold/10">
              {filtered.map((b) => (
                <tr key={b.id} className="hover:bg-sand/20">
                  <td className="p-4 font-semibold text-espresso">{b.id}</td>
                  <td className="p-4">
                    <div className="font-semibold text-espresso">{b.guestName}</div>
                    <div className="text-[10px] text-espresso/60">{b.guestPhone}</div>
                  </td>
                  <td className="p-4 font-medium max-w-[180px] truncate">{b.propertyName}</td>
                  <td className="p-4">{formatDate(b.checkInDate)}</td>
                  <td className="p-4">{b.guestsCount} Pers.</td>
                  <td className="p-4">
                    <select
                      value={b.status}
                      onChange={(e) => updateBookingStatus(b.id, e.target.value as BookingStatus)}
                      className="bg-cream border border-gold/40 rounded-lg px-2 py-1 text-[11px] font-semibold text-espresso cursor-pointer"
                    >
                      <option value="New">New</option>
                      <option value="Contacted">Contacted</option>
                      <option value="Confirmed">Confirmed</option>
                      <option value="Completed">Completed</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>
                  <td className="p-4 text-right flex items-center justify-end gap-2">
                    <a
                      href={generateWhatsAppLink(settings.whatsappNumber, b.guestName, b.propertyName, b.checkInDate, b.guestsCount, b.notes)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 bg-[#25D366]/20 text-[#25D366] rounded-lg hover:bg-[#25D366]/30"
                      title="Reply via WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                    <button onClick={() => setActiveBooking(b)} className="p-1.5 text-espresso/70 hover:text-espresso bg-sand/30 rounded-lg">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button onClick={() => deleteBooking(b.id)} className="p-1.5 text-terracotta hover:bg-terracotta/10 rounded-lg">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal isOpen={!!activeBooking} onClose={() => setActiveBooking(null)} title="Enquiry Detail">
        {activeBooking && (
          <div className="space-y-4 text-xs font-sans">
            <div className="grid grid-cols-2 gap-3 p-4 bg-sand/30 rounded-xl border border-gold/30">
              <div><span className="text-espresso/60 block">Booking ID</span><span className="font-semibold text-espresso">{activeBooking.id}</span></div>
              <div><span className="text-espresso/60 block">Guest Name</span><span className="font-semibold text-espresso">{activeBooking.guestName}</span></div>
              <div><span className="text-espresso/60 block">Phone</span><span className="font-semibold text-espresso">{activeBooking.guestPhone}</span></div>
              <div><span className="text-espresso/60 block">Check-in</span><span className="font-semibold text-espresso">{activeBooking.checkInDate}</span></div>
              <div><span className="text-espresso/60 block">Guests</span><span className="font-semibold text-espresso">{activeBooking.guestsCount} Person(s)</span></div>
              <div><span className="text-espresso/60 block">Stay</span><span className="font-semibold text-espresso">{activeBooking.propertyName}</span></div>
            </div>
            <div>
              <span className="text-espresso/60 block mb-1">Notes / Requests</span>
              <p className="p-3 bg-cream border border-gold/30 rounded-xl text-espresso/80">{activeBooking.notes || 'No special requests submitted.'}</p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
