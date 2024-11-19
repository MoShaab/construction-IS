import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';
import { users, suppliers, inventoryItems } from '../lib/placeholder-data';

async function connectToDb() {
    const client = await db.connect();
    return client;
  }

async function seedUsers() {
    const client = await connectToDb();
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  // Creating the `users` table
  await client.sql`
    CREATE TABLE IF NOT EXISTS site_users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      role VARCHAR(255) NOT NULL,
      status VARCHAR(255) NOT NULL,
      last_active DATE NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `;

  // Seeding the `users` table
  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return client.sql`
        INSERT INTO users (id, name, role, status, last_active, email, password)
        VALUES (${user.id}, ${user.name}, ${user.role}, ${user.status}, ${user.lastActive}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
    })
  );

  return insertedUsers;
}

async function seedSuppliers() {
  // Creating the `suppliers` table
  await client.sql`
    CREATE TABLE IF NOT EXISTS suppliers (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      category VARCHAR(255) NOT NULL,
      rating FLOAT NOT NULL,
      status VARCHAR(255) NOT NULL,
      last_delivery DATE NOT NULL
    );
  `;

  // Seeding the `suppliers` table
  const insertedSuppliers = await Promise.all(
    suppliers.map(
      (supplier) => client.sql`
        INSERT INTO suppliers (id, name, category, rating, status, last_delivery)
        VALUES (${supplier.id}, ${supplier.name}, ${supplier.category}, ${supplier.rating}, ${supplier.status}, ${supplier.lastDelivery})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );

  return insertedSuppliers;
}

async function seedInventoryItems() {
  // Creating the `inventory_items` table
  await client.sql`
    CREATE TABLE IF NOT EXISTS inventory_items (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      quantity INT NOT NULL,
      unit VARCHAR(50) NOT NULL,
      status VARCHAR(255) NOT NULL,
      category VARCHAR(255) NOT NULL
    );
  `;

  // Seeding the `inventory_items` table
  const insertedInventoryItems = await Promise.all(
    inventoryItems.map(
      (item) => client.sql`
        INSERT INTO inventory_items (id, name, quantity, unit, status, category)
        VALUES (${item.id}, ${item.name}, ${item.quantity}, ${item.unit}, ${item.status}, ${item.category})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );

  return insertedInventoryItems;
}

export async function GET() {
  try {
    await client.sql`BEGIN`;
    await seedUsers();
    await seedSuppliers();
    await seedInventoryItems();
    await client.sql`COMMIT`;

    return new Response(
      JSON.stringify({ message: 'Database seeded successfully' }),
      { status: 200 }
    );
  } catch (error) {
    await client.sql`ROLLBACK`;
    return new Response(
      JSON.stringify({ error: error.message || 'Database seeding failed' }),
      { status: 500 }
    );
  }
}
