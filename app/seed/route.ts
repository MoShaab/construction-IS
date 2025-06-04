import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';
import { users, suppliers, inventoryItems, projects } from './placeholder-data';
import { NextResponse } from 'next/server';

async function connectToDb() {
  const client = await db.connect();
  return client;
}

async function seedUsers() {
  const client = await connectToDb();
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS site_users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      role VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return client.sql`
        INSERT INTO site_users (id, name, role, email, password)
        VALUES (${user.id}, ${user.name}, ${user.role}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
    })
  );

  return insertedUsers;
}

async function seedSuppliers() {
  const client = await connectToDb();

  await client.sql`
    CREATE TABLE IF NOT EXISTS suppliers (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      category VARCHAR(255) NOT NULL,
      contact VARCHAR(255) NOT NULL,
      location VARCHAR(255) NOT NULL,
    );
  `;

  const insertedSuppliers = await Promise.all(
    suppliers.map(
      (supplier) => client.sql`
        INSERT INTO suppliers (id, name, category, contact, location)
        VALUES (${supplier.id}, ${supplier.name}, ${supplier.category}, ${supplier.contact}, ${supplier.location})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );

  return insertedSuppliers;
}

async function seedInventoryItems() {
  const client = await connectToDb();

  await client.sql`
    CREATE TABLE IF NOT EXISTS inventory_items (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      quantity INT NOT NULL,
      unit VARCHAR(50) NOT NULL,
     
      category VARCHAR(255) NOT NULL,
      minThreshold INT NOT NULL
    );
  `;

  const insertedInventoryItems = await Promise.all(
    inventoryItems.map(
      (item) => client.sql`
        INSERT INTO inventory_items (id, name, quantity, unit, category, minThreshold)
        VALUES (${item.id}, ${item.name}, ${item.quantity}, ${item.unit}, ${item.category}, ${item.minThreshold})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );

  return insertedInventoryItems;
}
async function seedProjects() {
  const client = await connectToDb();

  await client.sql`
    CREATE TABLE IF NOT EXISTS projects (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      
      start_date DATE NOT NULL,
      end_date DATE NOT NULL
    );
  `;

  const insertedProjects = await Promise.all(
    projects.map((project) =>
      client.sql`
        INSERT INTO projects (id, name, description, start_date, end_date)
        VALUES (
          ${project.id}, 
          ${project.name}, 
          ${project.description}, 
           
           
          ${project.startDate}, 
          ${project.endDate} 
          
        )
        ON CONFLICT (id) DO NOTHING;
      `
    )
  );

  return insertedProjects;
}

export async function GET() {
  try {
    const client = await connectToDb();
    await client.sql`BEGIN`;
    await seedUsers();
    await seedSuppliers();
    await seedInventoryItems();
    await seedProjects();
    await client.sql`COMMIT`;

    return new Response(
      JSON.stringify({ message: 'Database seeded successfully' }),
      { status: 200 }
    );
  } catch (error) {
    const client = await connectToDb();
    await client.sql`ROLLBACK`;

    const errorMessage = error instanceof Error ? error.message : 'An error occurred';
    return NextResponse.json({ error: errorMessage }, { status: 500 });

  } finally {
    const client = await connectToDb();
    client.release();
  }
}
