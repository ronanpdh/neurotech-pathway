import { NavLink } from "@/components/NavLink";
import { LucideIcon } from "lucide-react";

interface NavItem {
  title: string;
  path: string;
  icon: LucideIcon;
}

interface DashboardSidebarProps {
  items: NavItem[];
  basePath: string;
}

export const DashboardSidebar = ({ items, basePath }: DashboardSidebarProps) => {
  return (
    <div className="flex h-full flex-col p-4">
      <nav className="space-y-1">
        {items.map((item) => {
          const Icon = item.icon;
          const fullPath = `${basePath}${item.path}`;
          
          return (
            <NavLink
              key={item.path}
              to={fullPath}
              end={item.path === ""}
              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              activeClassName="bg-sidebar-accent text-sidebar-primary font-semibold"
            >
              <Icon className="h-5 w-5" />
              {item.title}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};
