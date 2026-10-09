'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Compass, Lock, Mail, Key } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('admin@weekendthrills.com');
  const [password, setPassword] = useState('Admin@123');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'admin@weekendthrills.com' && password === 'Admin@123') {
      localStorage.setItem('wt_admin_session', JSON.stringify({ user: email, token: 'mock-jwt-token' }));
      router.push('/admin');
    } else {
      setError('Invalid credentials. Use admin@weekendthrills.com / Admin@123');
    }
  };

  return (
    <div className="min-h-screen bg-cream flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-md bg-cream p-8 rounded-2xl border border-gold/40 shadow-espresso space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 bg-espresso text-cream rounded-full flex items-center justify-center mx-auto">
            <Compass className="w-6 h-6 text-gold" />
          </div>
          <h1 className="font-serif text-3xl font-light text-espresso">
            Admin <span className="italic text-terracotta">Portal</span>
          </h1>
          <p className="text-xs text-espresso/70">Weekend Thrills Hospitality Management System</p>
        </div>

        <div className="p-3 bg-sand/40 border border-gold/40 rounded-xl text-xs text-espresso space-y-1">
          <span className="font-semibold block text-gold-dark uppercase tracking-wider">Demo Credentials</span>
          <p><strong>Email:</strong> admin@weekendthrills.com</p>
          <p><strong>Password:</strong> Admin@123</p>
        </div>

        {error && (
          <div className="p-3 bg-terracotta/15 text-terracotta border border-terracotta/30 rounded-xl text-xs font-semibold">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-espresso/80 mb-1">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 absolute left-3 top-3 text-gold" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-sand/30 border border-gold/40 rounded-xl text-sm text-espresso focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-espresso/80 mb-1">Password</label>
            <div className="relative">
              <Key className="w-4 h-4 absolute left-3 top-3 text-gold" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 bg-sand/30 border border-gold/40 rounded-xl text-sm text-espresso focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>
          </div>

          <Button type="submit" variant="terracotta" size="lg" className="w-full">
            <Lock className="w-4 h-4" /> Sign In To Dashboard
          </Button>
        </form>
      </div>
    </div>
  );
}
