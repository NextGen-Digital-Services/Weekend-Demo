'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  CalendarCheck,
  Building2,
  Tag,
  Calendar,
  Users,
  Star,
  FileText,
  HelpCircle,
  Image as ImageIcon,
  Gift,
  Settings,
  ShieldAlert,
  Activity,
  LogOut,
  Compass,
  X,
} from 'lucide-react';
import { useAdminAuth } from '@/hooks/useAdminAuth';

export const ADMIN_NAV_ITEMS = [
  { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
  { name: 'Bookings & Enquiries', href: '/admin/bookings', icon: CalendarCheck },
  { name: 'Properties & Stays', href: '/admin/properties', icon: Building2 },
  { name: 'Pricing & Packages', href: '/admin/pricing', icon: Tag },
  { name: 'Availability Calendar', href: '/admin/calendar', icon: Calendar },
  { name: 'Customers CRM', href: '/admin/customers', icon: Users },
  { name: 'Reviews & Testimonials', href: '/admin/testimonials', icon: Star },
  { name: 'Blog Manager', href: '/admin/blogs', icon: FileText },
  { name: 'FAQ Manager', href: '/admin/faqs', icon: HelpCircle },
  { name: 'Media & Gallery', href: '/admin/gallery', icon: ImageIcon },
  { name: 'Coupons & Offers', href: '/admin/coupons', icon: Gift },
  { name: 'Site Settings', href: '/admin/settings', icon: Settings },
  { name: 'Users & Roles', href: '/admin/users', icon: ShieldAlert },
  { name: 'Activity Log', href: '/admin/activity', icon: Activity },
];

export const AdminSidebar: React.FC<{ isOpen?: boolean; onClose?: () => void }> = ({
  isOpen = false,
  onClose,
}) => {
  const pathname = usePathname();
  const { logout } = useAdminAuth();

  return (
    <aside
      className={`fixed top-0 bottom-0 left-0 z-40 w-64 bg-espresso text-cream border-r border-gold/30 flex flex-col justify-between transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="p-6 border-b border-gold/20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Compass className="w-6 h-6 text-gold" />
            <span className="font-serif text-xl tracking-wide text-cream">
              WT <span className="italic text-terracotta">ADMIN</span>
            </span>
          </Link>
          {onClose && (
            <button onClick={onClose} className="lg:hidden p-1 text-cream/70 hover:text-cream">
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {ADMIN_NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-terracotta text-cream shadow-terracotta'
                    : 'text-cream/70 hover:bg-white/10 hover:text-cream'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-cream' : 'text-gold'}`} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gold/20">
          <button
            onClick={logout}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-white/10 text-cream/80 hover:bg-white/20 hover:text-cream rounded-xl text-xs font-semibold transition-colors"
          >
            <LogOut className="w-4 h-4 text-gold-light" /> Exit Admin Session
          </button>
        </div>
      </div>
    </aside>
  );
};
