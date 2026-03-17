import Link from 'next/link';
import { adminEntityDescriptions, adminEntityLabels, adminEntityNames, adminEntityRoutes } from '../lib/entities';

export function AdminSidebar() {
  return (
    <aside className="flex w-full max-w-xs flex-col border-r border-border bg-card/80 p-6 backdrop-blur">
      <Link href="/" className="text-lg font-semibold tracking-tight">
        My-Tangle Admin
      </Link>
      <p className="mt-2 text-sm text-muted-foreground">
        Structure the site, products, and editorial content from one workspace.
      </p>
      <nav className="mt-8 space-y-2">
        {adminEntityNames.map((entityName) => (
          <Link
            key={entityName}
            href={adminEntityRoutes[entityName]}
            className="block rounded-xl border border-transparent px-4 py-3 transition hover:border-border hover:bg-background"
          >
            <p className="text-sm font-medium text-foreground">{adminEntityLabels[entityName]}</p>
            <p className="mt-1 text-xs leading-5 text-muted-foreground">
              {adminEntityDescriptions[entityName]}
            </p>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
