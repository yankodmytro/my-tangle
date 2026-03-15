import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { Card } from '@ecommerce/ui';

export default async function AdminHomePage() {
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token');

  if (!token) {
    redirect('/login');
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-5xl px-6 py-16">
      <Card className="w-full p-8">
        <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">Protected route</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">Admin dashboard placeholder</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          The admin shell is protected by a session cookie issued after authenticating against the
          API.
        </p>
      </Card>
    </main>
  );
}
