'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useApp } from '@/hooks/useApp';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { formatDate } from '@/lib/utils';
import { Clock, ArrowLeft, Calendar } from 'lucide-react';

export default function BlogDetailPage() {
  const { slug } = useParams();
  const router = useRouter();
  const { blogs } = useApp();

  const blog = blogs.find((b) => b.slug === slug) || blogs[0];

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-cream max-w-4xl mx-auto space-y-8">
      <button
        onClick={() => router.back()}
        className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-espresso/70 hover:text-terracotta transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Articles
      </button>

      <div className="space-y-4">
        <Badge variant="gold">{blog.category}</Badge>
        <h1 className="font-serif text-3xl sm:text-5xl font-light text-espresso leading-tight">
          {blog.title}
        </h1>
        <div className="flex items-center gap-4 text-xs text-espresso/60 border-y border-gold/20 py-3">
          <span>By {blog.author}</span>
          <span>•</span>
          <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {formatDate(blog.publishedAt)}</span>
          <span>•</span>
          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {blog.readTime}</span>
        </div>
      </div>

      <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-card border border-gold/30">
        <Image src={blog.coverImage} alt={blog.title} fill sizes="100vw" className="object-cover" priority />
      </div>

      <div className="prose prose-stone max-w-none text-espresso/80 font-sans text-base leading-relaxed space-y-6">
        {blog.content.split('\n\n').map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <div className="p-8 bg-espresso text-cream rounded-2xl border border-gold/30 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-serif text-2xl font-light text-gold-light">Ready For Your Weekend Escape?</h3>
          <p className="text-xs text-cream/70 mt-1">Book Revdanda beach camping, Pawna Lake tents or luxury villas now.</p>
        </div>
        <Link href="/camping">
          <Button variant="terracotta" size="lg">Explore Weekend Stays</Button>
        </Link>
      </div>
    </div>
  );
}
