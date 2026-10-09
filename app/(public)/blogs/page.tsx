'use client';

import React from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { BlogCard } from '@/components/cards/BlogCard';
import { useApp } from '@/hooks/useApp';

export default function BlogsListingPage() {
  const { blogs } = useApp();

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          numeral="JOURNAL"
          eyebrow="TRAVEL STORIES"
          title="Weekend Escapes & Travel"
          italicWord="Guides"
          subtitle="Discover camping guides, monsoon trekking tips, villa reviews, and budget weekend itineraries near Mumbai & Pune."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}
