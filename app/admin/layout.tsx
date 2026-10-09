'use client';

import React, { useState } from 'react';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { AdminSidebar } from '@/components/layout/AdminSidebar';
import { AdminHeader } from '@/components/layout/AdminHeader';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAdminAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (isAuthenticated === false) {
    return null;
  }

  return (
    <div className="min-h-screen bg-cream flex">
      <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 flex flex-col lg:pl-64 min-w-0">
        <AdminHeader onToggleSidebar={() => setSidebarOpen(true)} />
        <main className="p-4 sm:p-6 lg:p-8 flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
