'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Card, Input, Label } from '@ecommerce/ui';
import { loginSchema, type LoginValues } from '@ecommerce/validators';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

export function LoginForm() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? process.env.API_URL ?? 'http://localhost:3001';
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (values: LoginValues) => {
    try {
      const response = await fetch(`${apiUrl}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        setError('root', { message: 'Invalid credentials' });
        return;
      }

      const data = (await response.json()) as { token: string };
      document.cookie = `admin_token=${data.token}; Path=/; SameSite=Lax`;
      router.push('/');
      router.refresh();
    } catch {
      setError('root', {
        message: `API is unavailable. Start the backend on ${apiUrl} and try again.`,
      });
    }
  };

  return (
    <Card className="w-full max-w-md p-6">
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" {...register('email')} />
          {errors.email ? <p className="text-sm text-red-600">{errors.email.message}</p> : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" {...register('password')} />
          {errors.password ? (
            <p className="text-sm text-red-600">{errors.password.message}</p>
          ) : null}
        </div>
        {errors.root ? <p className="text-sm text-red-600">{errors.root.message}</p> : null}
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? 'Signing in...' : 'Sign in'}
        </Button>
      </form>
    </Card>
  );
}
