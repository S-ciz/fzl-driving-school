import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // --- Create Users ---
  const admin = await prisma.user.upsert({
    where: { email: 'admin@drivingschool.com' },
    update: {},
    create: {
      name: 'Admin User',
      email: 'admin@drivingschool.com',
      password: 'admin123', // In production, always hash this!
      role: 'ADMIN',
    },
  });

  const alice = await prisma.user.upsert({
    where: { email: 'alice@student.com' },
    update: {},
    create: {
      name: 'Alice Johnson',
      email: 'alice@student.com',
      password: 'password123',
      role: 'STUDENT',
    },
  });

  const bob = await prisma.user.upsert({
    where: { email: 'bob@student.com' },
    update: {},
    create: {
      name: 'Bob Smith',
      email: 'bob@student.com',
      password: 'password123',
      role: 'STUDENT',
    },
  });

  // --- Create Bookings ---
  await prisma.booking.createMany({
    data: [
      {
        studentId: alice.id,
        date: new Date('2025-11-14T09:00:00Z'),
        durationHrs: 2,
        status: 'PENDING',
      },
      {
        studentId: alice.id,
        date: new Date('2025-11-16T11:00:00Z'),
        durationHrs: 1,
        status: 'COMPLETED',
      },
      {
        studentId: bob.id,
        date: new Date('2025-11-15T14:00:00Z'),
        durationHrs: 2,
        status: 'PENDING',
      },
    ],
  });

  console.log('✅ Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
