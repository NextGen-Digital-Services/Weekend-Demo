import { FAQItem } from '@/types';

export const INITIAL_FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How do I confirm my booking with Weekend Thrills?',
    answer: 'Simply click "Book Now" on any property, select your travel dates and guest count, and submit. You will instantly be directed to WhatsApp with a prefilled voucher summary to complete your reservation with our team.',
    category: 'Booking & Payments',
    order: 1,
  },
  {
    id: 'faq-2',
    question: 'What is included in camping packages?',
    answer: 'Our beach and lake camping packages include tent accommodation with foam mattress, pillows & blankets, welcome tea/snacks, unlimited dinner (veg/non-veg), live BBQ starters, morning breakfast, and evening bonfire with acoustic music.',
    category: 'Stays & Amenities',
    order: 2,
  },
  {
    id: 'faq-3',
    question: 'Are the campsites safe for solo female travellers & families?',
    answer: 'Absolutely. All Weekend Thrills campsites and villas undergo strict quality and safety verifications. We maintain 24/7 security staff on-site and separate family/couple zones.',
    category: 'Safety & Guidelines',
    order: 3,
  },
  {
    id: 'faq-4',
    question: 'What are the check-in and check-out timings?',
    answer: 'For camping: Check-in at 4:00 PM and Check-out at 11:00 AM next morning. For villas and resorts: Check-in at 1:00 PM and Check-out at 11:00 AM.',
    category: 'Timings & Policies',
    order: 4,
  },
  {
    id: 'faq-5',
    question: 'Can we bring our pets along?',
    answer: 'Most of our private villas and select campsites are pet-friendly! Please check individual property rules or inform our team on WhatsApp prior to booking.',
    category: 'Policies',
    order: 5,
  },
  {
    id: 'faq-6',
    question: 'What is the cancellation policy?',
    answer: 'Free rescheduling up to 72 hours before check-in date. Cancellations made 7 days prior receive a 100% refund voucher valid for 6 months.',
    category: 'Booking & Payments',
    order: 6,
  }
];
