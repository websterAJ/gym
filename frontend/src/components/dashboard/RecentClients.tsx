import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const recentClients = [
  {
    id: 1,
    name: "María González",
    email: "maria.gonzalez@email.com",
    plan: "Premium",
    status: "active",
    joinDate: "Hace 2 horas",
  },
  {
    id: 2,
    name: "Carlos Muñoz",
    email: "carlos.munoz@email.com",
    plan: "Básico",
    status: "active",
    joinDate: "Hace 5 horas",
  },
  {
    id: 3,
    name: "Ana Rodríguez",
    email: "ana.rodriguez@email.com",
    plan: "Ilimitado",
    status: "pending",
    joinDate: "Hace 1 día",
  },
  {
    id: 4,
    name: "Pedro Silva",
    email: "pedro.silva@email.com",
    plan: "Premium",
    status: "active",
    joinDate: "Hace 1 día",
  },
  {
    id: 5,
    name: "Lucía Fernández",
    email: "lucia.fernandez@email.com",
    plan: "Básico",
    status: "expired",
    joinDate: "Hace 2 días",
  },
];

const statusConfig = {
  active: { label: "Activo", className: "bg-success/10 text-success border-success/20" },
  pending: { label: "Pendiente", className: "bg-warning/10 text-warning border-warning/20" },
  expired: { label: "Expirado", className: "bg-destructive/10 text-destructive border-destructive/20" },
};

export function RecentClients() {
  return (
    <div className="glass-card rounded-xl border border-border/50 animate-fade-in">
      <div className="p-6 border-b border-border/50">
        <h3 className="text-lg font-semibold">Clientes Recientes</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Últimos registros en la plataforma
        </p>
      </div>
      <div className="divide-y divide-border/50">
        {recentClients.map((client) => (
          <div
            key={client.id}
            className="flex items-center justify-between p-4 hover:bg-secondary/30 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-sm font-semibold text-primary">
                  {client.name.split(" ").map((n) => n[0]).join("")}
                </span>
              </div>
              <div>
                <p className="font-medium text-sm">{client.name}</p>
                <p className="text-xs text-muted-foreground">{client.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="text-xs">
                {client.plan}
              </Badge>
              <Badge
                variant="outline"
                className={cn("text-xs", statusConfig[client.status as keyof typeof statusConfig].className)}
              >
                {statusConfig[client.status as keyof typeof statusConfig].label}
              </Badge>
              <span className="text-xs text-muted-foreground w-24 text-right">
                {client.joinDate}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-border/50">
        <button className="w-full text-sm text-primary hover:text-primary/80 font-medium transition-colors">
          Ver todos los clientes →
        </button>
      </div>
    </div>
  );
}
