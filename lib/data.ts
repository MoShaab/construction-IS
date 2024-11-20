import { sql } from '@vercel/postgres';

export async function fetchAllInventory(){
    try {
      console.log('Fetching inventory data...');
      
  
      // The type here should be Property, not Property[]
      const result = await sql`SELECT * FROM inventory_items
    
      `;
  
      // Return the properties directly
      return result.rows;
    } 
    catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch the latest inventory.');
    }
  }

  export async function fetchSuppliers(){
    try {
      console.log('Fetching suppliers data...');
      
  
      // The type here should be Property, not Property[]
      const result = await sql`SELECT * FROM suppliers
    
      `;
  
      // Return the properties directly
      return result.rows;
    } 
    catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch the suppliers.');
    }
  }
  
  export async function fetchProjects(){
    try {
      console.log('Fetching projects...');
      
  
      // The type here should be Property, not Property[]
      const result = await sql`SELECT * FROM projects
    
      `;
  
      // Return the properties directly
      return result.rows;
    } 
    catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch the latest projects.');
    }
  }

  export async function fetchUsers(){
    try {
      console.log('Fetching users data...');
      
  
      // The type here should be Property, not Property[]
      const result = await sql`SELECT * FROM site_users
    
      `;
  
      // Return the properties directly
      return result.rows;
    } 
    catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch the users.');
    }
  }