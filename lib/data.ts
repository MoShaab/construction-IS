import { sql } from '@vercel/postgres';
import { InventoryItem, Project, Supplier, User } from './definitions';

export async function fetchAllInventory():  Promise<InventoryItem[]>{
    try {
      console.log('Fetching inventory data...');
      
  
      // The type here should be Property, not Property[]
      const result = await sql`SELECT * FROM inventory_items
    
      `;
      const inventory: InventoryItem[] = result.rows.map(row => ({
        id: row.id,
        name: row.name,
        quantity: row.quantity,
        unit: row.unit,
        status: row.status,
        category: row.category,
      }));
  
      // Return the properties directly
      return inventory;
    } 
    catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch the latest inventory.');
    }
  }

  export async function fetchSuppliers(): Promise<Supplier[]>{
    try {
      console.log('Fetching suppliers data...');
      
  
      
      const result = await sql`SELECT * FROM suppliers
    
      `;
  
      // Return the suppliers directly

          const suppliers: Supplier[] = result.rows.map(row => ({
      id: row.id,
      name: row.name,
      category: row.category,
      rating: row.rating,
      status: row.status,
      lastDelivery: row.last_delivery,
    }));

    return suppliers;
    } 
    catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch the suppliers.');
    }
  }
  
  export async function fetchProjects(): Promise<Project[]>{
    try {
      console.log('Fetching projects...');
      
  
      // The type here should be Property, not Property[]
      const result = await sql`SELECT * FROM projects
    
      `;
      const projects: Project[] = result.rows.map(row => ({
        id: row.id,
        name: row.name,
        description: row.description,
        progress: row.progress,
        status: row.status,
        startDate: row.start_date,
        endDate: row.end_date,
      }));
  
      return projects;
  
      // Return the properties directly
      
    } 
    catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch the latest projects.');
    }
  }

  export async function fetchUsers(): Promise<User[]>{
    try {
      console.log('Fetching users data...');
      
  
      // The type here should be Property, not Property[]
      const result = await sql`SELECT * FROM site_users
    
      `;
  
      // Return the users directly
      const users: User[] = result.rows.map(row => ({
        id: row.id,
        name: row.name,
        role: row.role,
        status: row.status,
        lastActive: row.last_active,
        email: row.email,
        password: row.password,
        
      }));
  
      return users;
    } 
    catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch the users.');
    }
  }