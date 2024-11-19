const users = [
    {
        id: '410544b2-4001-4271-9855-fec4b6a6442a',
        name: "John Doe", role: "Project Manager", status: "Active", lastActive: "2024-03-20",
        email: 'john@nextmail.com',
        password: '123456',

    },
    {
        id: '410544b2-4001-4271-9055-fec4b6a6442a',
        name: "Sarah Smith", role: "Site Engineer", status: "Active", lastActive: "2024-03-21" ,
        email: 'sarah@nextmail.com',
        password: '123456',

    },
    {
        id: '410594b2-4001-4271-9855-fec4b6a6442a',
        name: "Mike Johnson", role: "Inventory Manager", status: "Away", lastActive: "2024-03-19",
        email: 'mike@nextmail.com',
        password: '123456',

    },
    {
        id: '410594b2-4001-4271-9855-frt4b6a6442a',
        name: "Emma Wilson", role: "Administrator", status: "Active", lastActive: "2024-03-21",
        email: 'ema@nextmail.com',
        password: '123456',

    },
    {
        id: '410594d2-4001-4271-9855-fec4b6a6442a',
        name: "David Brown", role: "Site Supervisor", status: "Inactive", lastActive: "2024-03-15",
        email: 'david@nextmail.com',
        password: '123456',

    },

];

const suppliers = [
    {
      id: 1,
      name: "BuildTech Solutions",
      category: "Construction Materials",
      rating: 4.8,
      status: "Active",
      lastDelivery: "2024-03-18",
    },
    {
      id: 2,
      name: "Safety First Equipment",
      category: "Safety Gear",
      rating: 4.5,
      status: "Active",
      lastDelivery: "2024-03-20",
    },
    {
      id: 3,
      name: "Steel Masters Inc",
      category: "Raw Materials",
      rating: 4.2,
      status: "Active",
      lastDelivery: "2024-03-15",
    },
    {
      id: 4,
      name: "Power Tools Pro",
      category: "Equipment",
      rating: 4.6,
      status: "Under Review",
      lastDelivery: "2024-03-10",
    },
  ];

  const inventoryItems = [
    { id: 1, name: "Steel Beams", quantity: 150, unit: "pieces", status: "In Stock", category: "Raw Materials" },
    { id: 2, name: "Concrete Mix", quantity: 75, unit: "bags", status: "Low Stock", category: "Construction Materials" },
    { id: 3, name: "Safety Helmets", quantity: 200, unit: "pieces", status: "In Stock", category: "Safety Equipment" },
    { id: 4, name: "Power Tools Set", quantity: 25, unit: "sets", status: "In Stock", category: "Equipment" },
    { id: 5, name: "Lumber", quantity: 300, unit: "pieces", status: "In Stock", category: "Raw Materials" },
  ];

  const projects = [
    {
      id: 1,
      name: "City Center Construction",
      description: "Building a smart home system",
      progress: 75,
      status: "In Progress",
      startDate: "2023-12-10",
      endDate: "2024-05-15",
      team: ["John D.", "Sarah M.", "Mike R."],
    },
    {
      id: 2,
      name: "Hospital Renovation",
      description: "Building a smart home system",
      progress: 30,
      status: "In Progress",
      startDate: "2023-12-10",
      endDate: "2024-08-20",
      team: ["Emma S.", "David L."],
    },
    {
      id: 3,
      name: "Bridge Maintenance",
      description: "Building a smart home system",
      progress: 90,
      status: "Nearly Complete",
      startDate: "2023-12-10",
      endDate: "2024-04-01",
      team: ["Robert K.", "Lisa M.", "Tom B."],
    },
    {
      id: 4,
      name: "School Extension",
      description: "Building a smart home system",
      progress: 15,
      status: "Just Started",
      startDate: "2023-12-10",
      endDate: "2024-12-10",
      team: ["Anna P.", "James W."],
    },
  ];
  
  export { users, suppliers, projects, inventoryItems };