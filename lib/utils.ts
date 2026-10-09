import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatDate(dateString: string): string {
  if (!dateString) return '';
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date);
}

export function generateWhatsAppLink(
  phoneNumber: string,
  guestName: string,
  propertyName: string,
  checkInDate: string,
  guestsCount: number,
  notes?: string
): string {
  const cleanPhone = phoneNumber.replace(/[^0-9]/g, '');
  const text = `*New Booking Enquiry - Weekend Thrills* 🌟\n\n` +
    `👤 *Name:* ${guestName}\n` +
    `📍 *Stay:* ${propertyName}\n` +
    `📅 *Check-in Date:* ${checkInDate}\n` +
    `👥 *Guests:* ${guestsCount} Person(s)\n` +
    (notes ? `📝 *Notes:* ${notes}\n\n` : `\n`) +
    `Hi Weekend Thrills team! Please confirm availability and pricing.`;

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}
