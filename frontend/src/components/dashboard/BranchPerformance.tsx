import { cn } from "@/lib/utils";

const branches = [
  {
    name: "Las Condes",
    revenue: 3200000,
    clients: 245,
    occupancy: 87,
    growth: 12,
  },
  {
    name: "Providencia",
    revenue: 2800000,
    clients: 198,
    occupancy: 82,
    growth: 8,
  },
  {
    name: "Vitacura",
    revenue: 2100000,
    clients: 156,
    occupancy: 75,
    growth: 15,
  },
  {
    name: "Ñuñoa",
    revenue: 1500000,
    clients: 112,
    occupancy: 68,
    growth: -3,
  },
];

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

export function BranchPerformance() {
  const maxRevenue = Math.max(...branches.map((b) => b.revenue));

  return (
    <div className="glass-card rounded-xl border border-border/50 animate-fade-in">
      <div className="p-6 border-b border-border/50">
        <h3 className="text-lg font-semibold">Rendimiento por Sucursal</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Comparativa de ingresos mensuales
        </p>
      </div>
      <div className="p-6 space-y-5">
        {branches.map((branch) => (
          <div key={branch.name} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="font-medium text-sm">{branch.name}</span>
                <span
                  className={cn(
                    "text-xs font-medium",
                    branch.growth >= 0 ? "text-success" : "text-destructive"
                  )}
                >
                  {branch.growth >= 0 ? "+" : ""}
                  {branch.growth}%
                </span>
              </div>
              <span className="text-sm font-semibold">
                {formatCurrency(branch.revenue)}
              </span>
            </div>
            <div className="relative h-2 rounded-full bg-secondary overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary to-orange-400 transition-all duration-500"
                style={{ width: `${(branch.revenue / maxRevenue) * 100}%` }}
              />
            </div>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span>{branch.clients} clientes</span>
              <span>{branch.occupancy}% ocupación</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
