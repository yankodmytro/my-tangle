import Link from 'next/link';
import { Card } from '@ecommerce/ui';
import { adminEntityLabels, adminEntityNames, adminEntityRoutes } from '../lib/entities';

export default async function AdminHomePage() {
  return (
    <main className="flex min-h-full">
      <Card className="w-full p-8">
        <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">Dashboard</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">Admin structure workspace</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Start with a content domain below and then connect forms, tables, and API contracts.
        </p>
        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {adminEntityNames.map((entityName) => (
            <Link
              key={entityName}
              href={adminEntityRoutes[entityName]}
              className="rounded-2xl border border-border bg-background/80 p-5 transition hover:border-primary hover:bg-background"
            >
              <p className="text-base font-semibold text-foreground">
                {adminEntityLabels[entityName]}
              </p>
            </Link>
          ))}
        </div>
      </Card>
    </main>
  );
}
