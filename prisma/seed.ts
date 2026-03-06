import { PrismaClient, Role } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const category = await prisma.category.upsert({
    where: { slug: 'workspace-essentials' },
    update: {},
    create: {
      name: 'Workspace Essentials',
      slug: 'workspace-essentials'
    }
  });

  await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      name: 'Admin User',
      passwordHash: 'password123',
      role: Role.ADMIN
    }
  });

  const products = [
    {
      name: 'Desk Lamp',
      slug: 'desk-lamp',
      description: 'Warm ambient light for focused work.',
      price: 129,
      currency: 'USD'
    },
    {
      name: 'Oak Monitor Stand',
      slug: 'oak-monitor-stand',
      description: 'Elevates your setup with natural wood texture.',
      price: 189,
      currency: 'USD'
    }
  ];

  for (const product of products) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: {},
      create: {
        ...product,
        categoryId: category.id,
        media: {
          create: {
            url: `https://picsum.photos/seed/${product.slug}/640/480`,
            alt: product.name
          }
        }
      }
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
