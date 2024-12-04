"use client";

import {
  UserGroupIcon,
  HomeIcon,
  BuildingStorefrontIcon,
  DocumentTextIcon,
  BriefcaseIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// Map of links to display in the side navigation.
const links = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  { name: "Inventory", href: "/dashboard/inventory", icon: BuildingStorefrontIcon },
  { name: "Projects", href: "/dashboard/projects", icon: BriefcaseIcon},
  { name: "Reports", href: "/dashboard/reports", icon: DocumentTextIcon },
  { name: "Suppliers", href: "/dashboard/suppliers", icon: TruckIcon },
  { name: "Users", href: "/dashboard/users", icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="space-y-2">
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex items-center px-4 py-2 rounded-md text-sm font-medium",
              isActive
                ? "bg-blue-100 text-blue-700"
                : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            )}
          >
            <link.icon className="h-5 w-5 mr-3" aria-hidden="true" />
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
