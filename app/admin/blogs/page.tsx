'use client';

import React, { useState } from 'react';
import { useApp } from '@/hooks/useApp';
import { BlogPost } from '@/types';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { Plus, Edit2, Trash2 } from 'lucide-react';
import { IMAGES } from '@/data/images';

export default function AdminBlogsPage() {
  const { blogs, addBlog, updateBlog, deleteBlog } = useApp();
  const [modalOpen, setModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Partial<BlogPost>>({
    title: '',
    category: 'Travel Guide',
    excerpt: '',
    content: '',
    coverImage: IMAGES.alibaugBeachCamp1.url,
    readTime: '4 min read',
    author: 'Weekend Thrills Team',
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingBlog.title) return;

    if (editingBlog.id) {
      updateBlog(editingBlog as BlogPost);
    } else {
      addBlog({
        ...(editingBlog as BlogPost),
        id: `blog-${Date.now()}`,
        slug: editingBlog.title.toLowerCase().replace(/\s+/g, '-'),
        publishedAt: new Date().toISOString().split('T')[0],
        draft: false,
      });
    }
    setModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-3xl font-light text-espresso">Blog Manager</h1>
          <p className="text-xs text-espresso/70">Create, edit, and publish travel articles and weekend guides.</p>
        </div>
        <Button
          variant="terracotta"
          size="sm"
          onClick={() => {
            setEditingBlog({
              title: '',
              category: 'Travel Guide',
              excerpt: '',
              content: '',
              coverImage: IMAGES.alibaugBeachCamp1.url,
              readTime: '4 min read',
              author: 'Weekend Thrills Team',
            });
            setModalOpen(true);
          }}
        >
          <Plus className="w-4 h-4" /> Create New Post
        </Button>
      </div>

      <div className="bg-cream rounded-2xl border border-gold/30 shadow-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-sand/30 uppercase text-[10px] tracking-wider text-espresso/70">
              <tr>
                <th className="p-4">Article Title</th>
                <th className="p-4">Category</th>
                <th className="p-4">Date</th>
                <th className="p-4">Read Time</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gold/10">
              {blogs.map((b) => (
                <tr key={b.id} className="hover:bg-sand/20">
                  <td className="p-4 font-semibold text-espresso">{b.title}</td>
                  <td className="p-4 text-terracotta font-semibold">{b.category}</td>
                  <td className="p-4">{b.publishedAt}</td>
                  <td className="p-4 text-espresso/70">{b.readTime}</td>
                  <td className="p-4 text-right flex items-center justify-end gap-2">
                    <button
                      onClick={() => {
                        setEditingBlog(b);
                        setModalOpen(true);
                      }}
                      className="p-1.5 text-espresso/70 hover:text-espresso bg-sand/30 rounded-lg"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button onClick={() => deleteBlog(b.id)} className="p-1.5 text-terracotta hover:bg-terracotta/10 rounded-lg">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={editingBlog.id ? 'Edit Article' : 'Create Article'}>
        <form onSubmit={handleSave} className="space-y-4 text-xs">
          <div>
            <label className="block font-semibold mb-1">Post Title</label>
            <input
              type="text"
              required
              value={editingBlog.title || ''}
              onChange={(e) => setEditingBlog({ ...editingBlog, title: e.target.value })}
              className="w-full p-2 bg-sand/30 border border-gold/40 rounded-xl"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Excerpt</label>
            <input
              type="text"
              required
              value={editingBlog.excerpt || ''}
              onChange={(e) => setEditingBlog({ ...editingBlog, excerpt: e.target.value })}
              className="w-full p-2 bg-sand/30 border border-gold/40 rounded-xl"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Content</label>
            <textarea
              rows={4}
              required
              value={editingBlog.content || ''}
              onChange={(e) => setEditingBlog({ ...editingBlog, content: e.target.value })}
              className="w-full p-2 bg-sand/30 border border-gold/40 rounded-xl"
            />
          </div>
          <Button type="submit" variant="terracotta" size="lg" className="w-full">
            Save Article
          </Button>
        </form>
      </Modal>
    </div>
  );
}
