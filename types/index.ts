export type StayCategory = 'camping' | 'villa' | 'resorts' | 'cottages';

export type BookingStatus = 'New' | 'Contacted' | 'Confirmed' | 'Cancelled' | 'Completed';

export interface Property {
  id: string;
  slug: string;
  name: string;
  location: 'Alibaug' | 'Pawna Lake' | 'Matheran' | 'Lonavala';
  stayType: StayCategory;
  startingPrice: number;
  unit: 'person' | 'night' | 'room';
  capacity: string;
  heroImage: string;
  gallery: string[];
  overview: string;
  inclusions: string[];
  activities: string[];
  timings: { checkIn: string; checkOut: string };
  houseRules: string[];
  faqs: { question: string; answer: string }[];
  featured?: boolean;
  bestSeller?: boolean;
  published: boolean;
  rating: number;
  reviewsCount: number;
  latitude?: number;
  longitude?: number;
}

export interface Booking {
  id: string;
  guestName: string;
  guestPhone: string;
  checkInDate: string;
  guestsCount: number;
  stayType: StayCategory | string;
  propertyName: string;
  propertySlug?: string;
  status: BookingStatus;
  totalAmount?: number;
  notes?: string;
  createdAt: string;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  avatar?: string;
  rating: number;
  comment: string;
  propertySlug?: string;
  date: string;
  featured?: boolean;
  approved: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  readTime: string;
  publishedAt: string;
  draft: boolean;
  author: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  order: number;
}

export interface Customer {
  id: string;
  name: string;
  phone: string;
  email?: string;
  totalBookings: number;
  totalSpent: number;
  tags: string[];
  lastBookingDate: string;
}

export interface Coupon {
  id: string;
  code: string;
  discountPercent?: number;
  discountAmount?: number;
  validUntil: string;
  usageCount: number;
  active: boolean;
}

export interface SiteSettings {
  brandName: string;
  tagline: string;
  phone: string;
  whatsappNumber: string;
  email: string;
  instagram: string;
  youtube: string;
  address: string;
  gstNumber: string;
  announcementText: string;
  heroTitle: string;
  heroSubtitle: string;
}

export interface ActivityLog {
  id: string;
  timestamp: string;
  action: string;
  user: string;
  details: string;
}
