import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { AdminSidebar } from '@components/admin-sidebar';

export default async function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token');

  if (!token) {
    redirect('/login');
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col lg:flex-row">
        <AdminSidebar />
        <div className="flex-1 px-6 py-10 lg:px-10">{children}</div>
      </div>
    </div>
  );
}
