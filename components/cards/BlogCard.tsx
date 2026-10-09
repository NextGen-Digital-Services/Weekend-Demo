import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { formatDate } from '@/lib/utils';
import { Clock, ArrowUpRight } from 'lucide-react';

export const BlogCard: React.FC<{ blog: BlogPost }> = ({ blog }) => {
  return (
    <article className="bg-cream rounded-2xl border border-gold/30 overflow-hidden shadow-card hover:shadow-terracotta transition-all duration-500 flex flex-col justify-between group">
      <div>
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={blog.coverImage}
            alt={blog.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute top-4 left-4 z-10">
            <Badge variant="gold">{blog.category}</Badge>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-3 text-xs text-espresso/60 mb-2 font-sans">
            <span>{formatDate(blog.publishedAt)}</span>
            <span>•</span>
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {blog.readTime}</span>
          </div>

          <h3 className="font-serif text-xl text-espresso font-normal group-hover:text-terracotta transition-colors leading-snug">
            <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
          </h3>

          <p className="text-xs text-espresso/70 mt-2 line-clamp-3 leading-relaxed">
            {blog.excerpt}
          </p>
        </div>
      </div>

      <div className="px-6 pb-6 pt-2">
        <Link
          href={`/blogs/${blog.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-terracotta hover:text-terracotta-hover tracking-wider uppercase"
        >
          Read Article <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
};
