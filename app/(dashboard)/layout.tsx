'use client';

import { AuthProvider } from '@/components/providers/auth-provider';
import { DashboardHeader } from '@/components/layouts/dashboard-header';
import { Toaster } from '@/components/ui/toaster';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50">
        <DashboardHeader />
        <main>{children}</main>
        <Toaster />
      </div>
    </AuthProvider>
  );
}