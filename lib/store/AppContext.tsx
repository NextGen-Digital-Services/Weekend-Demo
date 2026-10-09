'use client';

import React, { createContext, useState } from 'react';
import { Property, Booking, Review, BlogPost, FAQItem, Customer, SiteSettings } from '@/types';
import { INITIAL_PROPERTIES } from '@/data/properties';
import { INITIAL_BOOKINGS } from '@/data/seedBookings';
import { INITIAL_TESTIMONIALS } from '@/data/testimonials';
import { INITIAL_BLOGS } from '@/data/blogs';
import { INITIAL_FAQS } from '@/data/faqs';
import { INITIAL_CUSTOMERS } from '@/data/seedCustomers';
import { INITIAL_SETTINGS } from '@/data/seedSettings';

export interface AppContextType {
  properties: Property[];
  bookings: Booking[];
  reviews: Review[];
  blogs: BlogPost[];
  faqs: FAQItem[];
  customers: Customer[];
  settings: SiteSettings;
  addBooking: (booking: Omit<Booking, 'id' | 'createdAt' | 'status'>) => void;
  updateBookingStatus: (id: string, status: Booking['status']) => void;
  deleteBooking: (id: string) => void;
  addProperty: (property: Property) => void;
  updateProperty: (property: Property) => void;
  deleteProperty: (id: string) => void;
  addBlog: (blog: BlogPost) => void;
  updateBlog: (blog: BlogPost) => void;
  deleteBlog: (id: string) => void;
  updateSettings: (newSettings: Partial<SiteSettings>) => void;
  resetDemoData: () => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

const loadInitial = <T,>(key: string, fallback: T): T => {
  if (typeof window === 'undefined') return fallback;
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch {
    return fallback;
  }
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [properties, setProperties] = useState<Property[]>(() => loadInitial('wt_properties', INITIAL_PROPERTIES));
  const [bookings, setBookings] = useState<Booking[]>(() => loadInitial('wt_bookings', INITIAL_BOOKINGS));
  const [reviews] = useState<Review[]>(INITIAL_TESTIMONIALS);
  const [blogs, setBlogs] = useState<BlogPost[]>(() => loadInitial('wt_blogs', INITIAL_BLOGS));
  const [faqs] = useState<FAQItem[]>(INITIAL_FAQS);
  const [customers] = useState<Customer[]>(INITIAL_CUSTOMERS);
  const [settings, setSettings] = useState<SiteSettings>(() => loadInitial('wt_settings', INITIAL_SETTINGS));

  const addBooking = (newBookingData: Omit<Booking, 'id' | 'createdAt' | 'status'>) => {
    const newBooking: Booking = {
      ...newBookingData,
      id: `WT-BK-${1000 + bookings.length + 1}`,
      status: 'New',
      createdAt: new Date().toISOString().split('T')[0],
    };
    const updated = [newBooking, ...bookings];
    setBookings(updated);
    localStorage.setItem('wt_bookings', JSON.stringify(updated));
  };

  const updateBookingStatus = (id: string, status: Booking['status']) => {
    const updated = bookings.map(b => (b.id === id ? { ...b, status } : b));
    setBookings(updated);
    localStorage.setItem('wt_bookings', JSON.stringify(updated));
  };

  const deleteBooking = (id: string) => {
    const updated = bookings.filter(b => b.id !== id);
    setBookings(updated);
    localStorage.setItem('wt_bookings', JSON.stringify(updated));
  };

  const addProperty = (property: Property) => {
    const updated = [property, ...properties];
    setProperties(updated);
    localStorage.setItem('wt_properties', JSON.stringify(updated));
  };

  const updateProperty = (property: Property) => {
    const updated = properties.map(p => (p.id === property.id ? property : p));
    setProperties(updated);
    localStorage.setItem('wt_properties', JSON.stringify(updated));
  };

  const deleteProperty = (id: string) => {
    const updated = properties.filter(p => p.id !== id);
    setProperties(updated);
    localStorage.setItem('wt_properties', JSON.stringify(updated));
  };

  const addBlog = (blog: BlogPost) => {
    const updated = [blog, ...blogs];
    setBlogs(updated);
    localStorage.setItem('wt_blogs', JSON.stringify(updated));
  };

  const updateBlog = (blog: BlogPost) => {
    const updated = blogs.map(b => (b.id === blog.id ? blog : b));
    setBlogs(updated);
    localStorage.setItem('wt_blogs', JSON.stringify(updated));
  };

  const deleteBlog = (id: string) => {
    const updated = blogs.filter(b => b.id !== id);
    setBlogs(updated);
    localStorage.setItem('wt_blogs', JSON.stringify(updated));
  };

  const updateSettings = (newSettings: Partial<SiteSettings>) => {
    const updated = { ...settings, ...newSettings };
    setSettings(updated);
    localStorage.setItem('wt_settings', JSON.stringify(updated));
  };

  const resetDemoData = () => {
    setProperties(INITIAL_PROPERTIES);
    setBookings(INITIAL_BOOKINGS);
    setBlogs(INITIAL_BLOGS);
    setSettings(INITIAL_SETTINGS);
    localStorage.removeItem('wt_bookings');
    localStorage.removeItem('wt_properties');
    localStorage.removeItem('wt_blogs');
    localStorage.removeItem('wt_settings');
  };

  return (
    <AppContext.Provider
      value={{
        properties,
        bookings,
        reviews,
        blogs,
        faqs,
        customers,
        settings,
        addBooking,
        updateBookingStatus,
        deleteBooking,
        addProperty,
        updateProperty,
        deleteProperty,
        addBlog,
        updateBlog,
        deleteBlog,
        updateSettings,
        resetDemoData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
