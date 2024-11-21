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
    status: "In Stock" | "Low Stock";
    category: string;
  };
  
  export type Project = {
    id: number;
    name: string;
    description: string;
    progress: number; // Progress as a percentage
    status: "In Progress" | "Nearly Complete" | "Just Started";
    startDate: string; // ISO date string
    endDate: string; // ISO date string
  };

  export interface DashboardProps {
    allInventory: InventoryItem[];
    projects: Project[];
    suppliers: Supplier[];
    users: User[];
  }
  