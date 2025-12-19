import { cn } from "@/lib/utils";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Building2,
  Users,
  CreditCard,
  Calendar,
  UserCircle,
  MessageSquare,
  BarChart3,
  Settings,
  Dumbbell,
  ChevronLeft,
  LogOut,
} from "lucide-react";
import { useState } from "react";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Sucursales", href: "/sucursales", icon: Building2 },
  { name: "Planes", href: "/planes", icon: CreditCard },
  { name: "Profesores", href: "/profesores", icon: UserCircle },
  { name: "Clientes", href: "/clientes", icon: Users },
  { name: "Clases", href: "/clases", icon: Calendar },
  { name: "CRM", href: "/crm", icon: MessageSquare },
  { name: "Reportes", href: "/reportes", icon: BarChart3 },
  { name: "Configuración", href: "/configuracion", icon: Settings },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300 flex flex-col",
        collapsed ? "w-20" : "w-64"
      )}
    >
      {/* Logo */}
      <div className="flex h-16 items-center justify-between px-4 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary glow-effect">
            <Dumbbell className="h-5 w-5 text-primary-foreground" />
          </div>
          {!collapsed && (
            <span className="font-bold text-lg gradient-text">FitPro</span>
          )}
        </div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 rounded-lg hover:bg-sidebar-accent transition-colors"
        >
          <ChevronLeft
            className={cn(
              "h-5 w-5 text-muted-foreground transition-transform",
              collapsed && "rotate-180"
            )}
          />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto scrollbar-thin">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <NavLink
              key={item.name}
              to={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group",
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-sidebar-accent hover:text-foreground"
              )}
            >
              <item.icon
                className={cn(
                  "h-5 w-5 flex-shrink-0 transition-colors",
                  isActive && "text-primary"
                )}
              />
              {!collapsed && (
                <span className="font-medium text-sm">{item.name}</span>
              )}
              {isActive && !collapsed && (
                <div className="ml-auto h-1.5 w-1.5 rounded-full bg-primary" />
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* User */}
      <div className="p-3 border-t border-sidebar-border">
        <div
          className={cn(
            "flex items-center gap-3 p-3 rounded-lg bg-sidebar-accent/50",
            collapsed && "justify-center"
          )}
        >
          <div className="h-9 w-9 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
            <span className="text-sm font-semibold text-primary">AD</span>
          </div>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">Admin User</p>
              <p className="text-xs text-muted-foreground truncate">
                admin@fitpro.cl
              </p>
            </div>
          )}
          {!collapsed && (
            <button
              onClick={() => {
                // navigate to logout
                const nav = document.createElement('a');
                nav.href = '/logout';
                nav.click();
              }}
              className="p-1.5 rounded-lg hover:bg-sidebar-accent transition-colors"
            >
              <LogOut className="h-4 w-4 text-muted-foreground" />
            </button>
          )}
        </div>
      </div>
    </aside>
  );
}
