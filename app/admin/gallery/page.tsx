'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { IMAGES } from '@/data/images';
import { Upload, Trash2 } from 'lucide-react';

export default function AdminGalleryPage() {
  const [gallery, setGallery] = useState(Object.values(IMAGES));

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setGallery([
            {
              url: event.target.result as string,
              alt: files[0].name,
              width: 800,
              height: 600,
              category: 'lifestyle',
            },
            ...gallery,
          ]);
        }
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const removeImg = (idx: number) => {
    setGallery(gallery.filter((_, i) => i !== idx));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl font-light text-espresso">Media & Gallery</h1>
          <p className="text-xs text-espresso/70">Centralized Unsplash image registry and media asset manager.</p>
        </div>
        <label className="cursor-pointer">
          <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
          <span className="inline-flex items-center justify-center font-sans font-medium transition-all duration-300 rounded-full text-xs px-4 py-2 gap-1.5 bg-terracotta text-cream hover:bg-terracotta-hover shadow-terracotta">
            <Upload className="w-4 h-4" /> Upload New Media
          </span>
        </label>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {gallery.map((img, idx) => (
          <div key={idx} className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-gold/30 shadow-card">
            <Image src={img.url} alt={img.alt} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
            <div className="absolute inset-0 bg-espresso/60 opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-between text-cream text-[10px]">
              <span className="bg-gold/80 px-2 py-0.5 rounded uppercase font-semibold self-start">{img.category}</span>
              <button
                onClick={() => removeImg(idx)}
                className="self-end p-1.5 bg-terracotta text-cream rounded-lg hover:bg-terracotta-hover"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
