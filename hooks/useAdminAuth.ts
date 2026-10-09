'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export function useAdminAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/admin/login') {
      setIsAuthenticated(true);
      return;
    }

    try {
      const session = localStorage.getItem('wt_admin_session');
      if (!session) {
        setIsAuthenticated(false);
        router.replace('/admin/login');
      } else {
        setIsAuthenticated(true);
      }
    } catch {
      setIsAuthenticated(false);
      router.replace('/admin/login');
    }
  }, [pathname, router]);

  const logout = () => {
    localStorage.removeItem('wt_admin_session');
    setIsAuthenticated(false);
    router.replace('/admin/login');
  };

  return { isAuthenticated, logout };
}
