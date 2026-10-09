'use client';

import React, { useState } from 'react';
import { useApp } from '@/hooks/useApp';
import { FAQItem } from '@/types';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { Plus, Edit2, Trash2 } from 'lucide-react';

export default function AdminFAQsPage() {
  const { faqs } = useApp();
  const [faqList, setFaqList] = useState(faqs);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingFaq, setEditingFaq] = useState<Partial<FAQItem>>({ question: '', answer: '', category: 'General' });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingFaq.question) return;

    if (editingFaq.id) {
      setFaqList(faqList.map((f) => (f.id === editingFaq.id ? (editingFaq as FAQItem) : f)));
    } else {
      setFaqList([
        ...faqList,
        {
          ...(editingFaq as FAQItem),
          id: `faq-${Date.now()}`,
          order: faqList.length + 1,
        },
      ]);
    }
    setModalOpen(false);
  };

  const deleteFaq = (id: string) => {
    setFaqList(faqList.filter((f) => f.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-3xl font-light text-espresso">FAQ Manager</h1>
          <p className="text-xs text-espresso/70">Add, edit, or reorder public website FAQs.</p>
        </div>
        <Button
          variant="terracotta"
          size="sm"
          onClick={() => {
            setEditingFaq({ question: '', answer: '', category: 'General' });
            setModalOpen(true);
          }}
        >
          <Plus className="w-4 h-4" /> Add FAQ
        </Button>
      </div>

      <div className="space-y-4">
        {faqList.map((f) => (
          <div key={f.id} className="bg-cream p-5 rounded-2xl border border-gold/30 shadow-card flex items-start justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-semibold text-terracotta">{f.category}</span>
              <h4 className="font-serif text-lg font-normal text-espresso">{f.question}</h4>
              <p className="text-xs text-espresso/75 leading-relaxed">{f.answer}</p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => {
                  setEditingFaq(f);
                  setModalOpen(true);
                }}
                className="p-1.5 text-espresso/70 hover:text-espresso bg-sand/30 rounded-lg text-xs"
              >
                <Edit2 className="w-4 h-4" />
              </button>
              <button onClick={() => deleteFaq(f.id)} className="p-1.5 text-terracotta hover:bg-terracotta/10 rounded-lg text-xs">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Manage FAQ">
        <form onSubmit={handleSave} className="space-y-4 text-xs">
          <div>
            <label className="block font-semibold mb-1">Question</label>
            <input
              type="text"
              required
              value={editingFaq.question || ''}
              onChange={(e) => setEditingFaq({ ...editingFaq, question: e.target.value })}
              className="w-full p-2 bg-sand/30 border border-gold/40 rounded-xl"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Answer</label>
            <textarea
              rows={3}
              required
              value={editingFaq.answer || ''}
              onChange={(e) => setEditingFaq({ ...editingFaq, answer: e.target.value })}
              className="w-full p-2 bg-sand/30 border border-gold/40 rounded-xl"
            />
          </div>
          <Button type="submit" variant="terracotta" size="lg" className="w-full">
            Save FAQ
          </Button>
        </form>
      </Modal>
    </div>
  );
}
