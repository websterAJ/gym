import { MainLayout } from "@/components/layout/MainLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { RecentClients } from "@/components/dashboard/RecentClients";
import { UpcomingClasses } from "@/components/dashboard/UpcomingClasses";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { BranchPerformance } from "@/components/dashboard/BranchPerformance";
import {
  DollarSign,
  Users,
  Calendar,
  TrendingUp,
  CreditCard,
  AlertCircle,
} from "lucide-react";

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

export default function Index() {
  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground mt-1">
              Resumen general de tu negocio fitness
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">
              Última actualización: hace 5 min
            </span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title="Ingresos del Mes"
            value={formatCurrency(9200000)}
            change={12.5}
            changeLabel="vs mes anterior"
            icon={DollarSign}
            trend="up"
          />
          <StatCard
            title="Clientes Activos"
            value="1,248"
            change={8.2}
            changeLabel="vs mes anterior"
            icon={Users}
            trend="up"
          />
          <StatCard
            title="Clases Programadas"
            value="156"
            change={-2.4}
            changeLabel="vs semana anterior"
            icon={Calendar}
            trend="down"
          />
          <StatCard
            title="Tasa de Retención"
            value="94.2%"
            change={1.8}
            changeLabel="vs mes anterior"
            icon={TrendingUp}
            trend="up"
          />
        </div>

        {/* Secondary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="glass-card rounded-xl border border-border/50 p-6 animate-fade-in">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-warning/10">
                <CreditCard className="h-6 w-6 text-warning" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Deuda Pendiente</p>
                <p className="text-2xl font-bold">{formatCurrency(1450000)}</p>
              </div>
              <span className="text-sm text-muted-foreground">23 clientes</span>
            </div>
          </div>
          <div className="glass-card rounded-xl border border-border/50 p-6 animate-fade-in">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-destructive/10">
                <AlertCircle className="h-6 w-6 text-destructive" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">
                  Membresías por Vencer (7 días)
                </p>
                <p className="text-2xl font-bold">47</p>
              </div>
              <button className="text-sm text-primary hover:text-primary/80 font-medium transition-colors">
                Ver lista →
              </button>
            </div>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <RevenueChart />
          </div>
          <BranchPerformance />
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RecentClients />
          <UpcomingClasses />
        </div>
      </div>
    </MainLayout>
  );
}
