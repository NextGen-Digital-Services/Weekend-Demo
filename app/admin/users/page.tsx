'use client';

import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function AdminUsersPage() {
  const [users] = useState([
    { id: 'u1', name: 'Primary Architect', email: 'admin@weekendthrills.com', role: 'Super Admin', status: 'Active' },
    { id: 'u2', name: 'Alibaug Operations Lead', email: 'alibaug.ops@weekendthrills.com', role: 'Property Manager', status: 'Active' },
    { id: 'u3', name: 'Pawna Reservations Desk', email: 'pawna.desk@weekendthrills.com', role: 'Support Staff', status: 'Active' },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-3xl font-light text-espresso">Admin Users & Roles</h1>
          <p className="text-xs text-espresso/70">Role-based access control for administrators, managers, and staff members.</p>
        </div>
        <Button variant="terracotta" size="sm">
          <Plus className="w-4 h-4" /> Add User
        </Button>
      </div>

      <div className="bg-cream rounded-2xl border border-gold/30 shadow-card overflow-hidden">
        <table className="w-full text-left text-xs">
          <thead className="bg-sand/30 uppercase text-[10px] tracking-wider text-espresso/70">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Role</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gold/10">
            {users.map((u) => (
              <tr key={u.id} className="hover:bg-sand/20">
                <td className="p-4 font-semibold text-espresso">{u.name}</td>
                <td className="p-4 text-espresso/80">{u.email}</td>
                <td className="p-4"><span className="px-2.5 py-1 bg-gold/15 text-gold-dark rounded-full text-[10px] font-semibold">{u.role}</span></td>
                <td className="p-4"><span className="px-2.5 py-1 bg-cypress/20 text-cypress rounded-full text-[10px] font-semibold">{u.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
