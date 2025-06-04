export type User = {
  id: string;
  name: string;
  role: string; // E.g., "Admin", "User", "Manager"
  email: string;
  password: string; // Encrypted before storage
  last_active: Date;
};

  
  export type Supplier = {
    id: number;
    name: string;
    category: string;
    phone: string;
    email?: string;
    address?: string; // Optional supplier location
    rating: string;
    status: string;
    last_delivery: Date;
  };
  
  export type InventoryItem = {
    id: number;
    name: string;
    quantity: number;
    unit: string; // e.g., "pieces", "bags", "sets"
    category: string;
    minThreshold: number;
    
  };
  
  export type Project = {
    id: number;
    name: string;
    description: string;
    start_date: string; // ISO date string
    end_date: string; // ISO date string
  };

  export interface DashboardProps {
    allInventory: InventoryItem[];
    projects: Project[];
    suppliers: Supplier[];
    users: User[];
  }
  