export type User = {
    id: string;
    name: string;
    role: string;
    status: "Active" | "Away" | "Inactive";
    lastActive: string; // ISO date string
    email: string;
    password: string;
  };
  
  export type Supplier = {
    id: number;
    name: string;
    category: string;
    rating: number; // Rating is between 0 and 5
    status: "Active" | "Under Review";
    lastDelivery: string; // ISO date string
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
  
    
    startDate: string; // ISO date string
    endDate: string; // ISO date string
  };

  export interface DashboardProps {
    allInventory: InventoryItem[];
    projects: Project[];
    suppliers: Supplier[];
    users: User[];
  }
  