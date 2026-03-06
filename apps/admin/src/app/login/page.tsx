import React from 'react';
import { LoginForm } from '../../components/login-form';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16">
      <div className="space-y-6 text-center">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Admin</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight">Control the catalog</h1>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
