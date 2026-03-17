import { Button, Card, Input, Label } from '@ecommerce/ui';
import type { AdminEntityName } from '../lib/entities';
import { adminEntityDescriptions, adminEntityLabels } from '../lib/entities';
import { adminEntityFormConfig, type AdminEntityField } from '../lib/entity-form-config';

type AdminEntityFormScreenProps = {
  entityName: AdminEntityName;
};

const renderField = (field: AdminEntityField) => {
  if (field.type === 'localized' || field.type === 'localized-textarea') {
    return (
      <div className="grid gap-3 md:grid-cols-2">
        {(['ua', 'ru'] as const).map((language) => (
          <div key={`${field.name}.${language}`} className="space-y-2">
            <Label htmlFor={`${field.name}.${language}`}>{`${field.label} (${language})`}</Label>
            {field.type === 'localized' ? (
              <Input
                id={`${field.name}.${language}`}
                placeholder={`${field.label} for ${language}`}
                disabled
              />
            ) : (
              <textarea
                id={`${field.name}.${language}`}
                placeholder={`${field.label} for ${language}`}
                disabled
                className="min-h-28 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none disabled:cursor-not-allowed disabled:opacity-50"
              />
            )}
          </div>
        ))}
      </div>
    );
  }

  if (field.type === 'textarea') {
    return (
      <textarea
        id={field.name}
        placeholder={field.label}
        disabled
        className="min-h-28 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none disabled:cursor-not-allowed disabled:opacity-50"
      />
    );
  }

  if (field.type === 'boolean') {
    return (
      <label
        htmlFor={field.name}
        className="flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground opacity-70"
      >
        <span>{field.label}</span>
        <input id={field.name} type="checkbox" disabled className="h-4 w-4" />
      </label>
    );
  }

  return (
    <Input
      id={field.name}
      placeholder={field.type === 'image' ? 'https://...' : field.label}
      type={field.type === 'number' ? 'number' : 'text'}
      disabled
    />
  );
};

export function AdminEntityFormScreen({ entityName }: AdminEntityFormScreenProps) {
  const sections = adminEntityFormConfig[entityName];

  return (
    <div className="space-y-6">
      <Card className="p-8">
        <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">Entity</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">{adminEntityLabels[entityName]}</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          {adminEntityDescriptions[entityName]}
        </p>
      </Card>

      {sections.map((section) => (
        <Card key={section.title} className="p-8">
          <h2 className="text-2xl font-semibold tracking-tight">{section.title}</h2>
          {section.description ? (
            <p className="mt-2 text-sm text-muted-foreground">{section.description}</p>
          ) : null}

          <div className="mt-6 grid gap-5">
            {section.fields.map((field) => (
              <div key={field.name} className="space-y-2">
                {field.type !== 'boolean' && field.type !== 'localized' && field.type !== 'localized-textarea' ? (
                  <Label htmlFor={field.name}>{field.label}</Label>
                ) : null}
                {renderField(field)}
                {field.hint ? <p className="text-xs text-muted-foreground">{field.hint}</p> : null}
              </div>
            ))}
          </div>
        </Card>
      ))}

      <div className="flex justify-end">
        <Button disabled>Save draft</Button>
      </div>
    </div>
  );
}
