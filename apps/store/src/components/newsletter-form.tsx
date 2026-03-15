'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Card, Input, Label } from '@ecommerce/ui';
import { newsletterFormSchema, type NewsletterFormValues } from '@ecommerce/validators';
import { useClientTranslation } from '@hooks/client/useClientTranslation';
import { useForm } from 'react-hook-form';

export function NewsletterForm() {
  const { t } = useClientTranslation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterFormSchema),
    defaultValues: {
      name: '',
      email: '',
    },
  });

  const onSubmit = async (values: NewsletterFormValues) => {
    await fetch(
      `${process.env.NEXT_PUBLIC_API_URL ?? process.env.API_URL ?? 'http://localhost:3001'}/catalog/lead`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      }
    );
    reset();
  };

  return (
    <Card className="w-full max-w-md p-6">
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-2">
          <Label htmlFor="name">{t('global.name')}</Label>
          <Input id="name" {...register('name')} />
          {errors.name ? <p className="text-sm text-red-600">{errors.name.message}</p> : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">{t('global.email')}</Label>
          <Input id="email" type="email" {...register('email')} />
          {errors.email ? <p className="text-sm text-red-600">{errors.email.message}</p> : null}
        </div>
        <Button type="submit" className="w-full">
          {t('global.cta')}
        </Button>
        {isSubmitSuccessful ? (
          <p className="text-sm text-emerald-700">{t('global.success')}</p>
        ) : null}
      </form>
    </Card>
  );
}
