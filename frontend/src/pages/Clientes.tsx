import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Plus,
  Search,
  Filter,
  MoreVertical,
  Mail,
  Phone,
  Calendar,
  CreditCard,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const clientes = [
  {
    id: 1,
    name: "María González",
    rut: "12.345.678-9",
    email: "maria.gonzalez@email.com",
    phone: "+56 9 1234 5678",
    plan: "Premium",
    status: "active",
    credits: 12,
    totalCredits: 16,
    vencimiento: "2024-02-15",
    sucursal: "Las Condes",
  },
  {
    id: 2,
    name: "Carlos Muñoz",
    rut: "9.876.543-2",
    email: "carlos.munoz@email.com",
    phone: "+56 9 8765 4321",
    plan: "Básico",
    status: "active",
    credits: 3,
    totalCredits: 8,
    vencimiento: "2024-02-20",
    sucursal: "Providencia",
  },
  {
    id: 3,
    name: "Ana Rodríguez",
    rut: "15.678.901-K",
    email: "ana.rodriguez@email.com",
    phone: "+56 9 5678 9012",
    plan: "Ilimitado",
    status: "pending",
    credits: -1,
    totalCredits: -1,
    vencimiento: "2024-01-30",
    sucursal: "Vitacura",
  },
  {
    id: 4,
    name: "Pedro Silva",
    rut: "18.234.567-8",
    email: "pedro.silva@email.com",
    phone: "+56 9 2345 6789",
    plan: "Premium",
    status: "active",
    credits: 8,
    totalCredits: 16,
    vencimiento: "2024-03-01",
    sucursal: "Las Condes",
  },
  {
    id: 5,
    name: "Lucía Fernández",
    rut: "14.567.890-1",
    email: "lucia.fernandez@email.com",
    phone: "+56 9 4567 8901",
    plan: "Básico",
    status: "expired",
    credits: 0,
    totalCredits: 8,
    vencimiento: "2024-01-10",
    sucursal: "Ñuñoa",
  },
  {
    id: 6,
    name: "Diego Ramírez",
    rut: "17.890.123-4",
    email: "diego.ramirez@email.com",
    phone: "+56 9 7890 1234",
    plan: "Ilimitado",
    status: "active",
    credits: -1,
    totalCredits: -1,
    vencimiento: "2024-02-28",
    sucursal: "Providencia",
  },
];

const statusConfig = {
  active: {
    label: "Activo",
    className: "bg-success/10 text-success border-success/20",
  },
  pending: {
    label: "Pendiente",
    className: "bg-warning/10 text-warning border-warning/20",
  },
  expired: {
    label: "Expirado",
    className: "bg-destructive/10 text-destructive border-destructive/20",
  },
};

export default function Clientes() {
  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Clientes</h1>
            <p className="text-muted-foreground mt-1">
              Gestiona la base de datos de clientes
            </p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Nuevo Cliente
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Total Clientes", value: "1,248", color: "text-foreground" },
            { label: "Activos", value: "1,089", color: "text-success" },
            { label: "Pendientes", value: "87", color: "text-warning" },
            { label: "Expirados", value: "72", color: "text-destructive" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass-card rounded-xl border border-border/50 p-4"
            >
              <p className="text-sm text-muted-foreground">{stat.label}</p>
              <p className={cn("text-2xl font-bold mt-1", stat.color)}>
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar por nombre, RUT o email..."
              className="pl-10"
            />
          </div>
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filtros
          </Button>
        </div>

        {/* Table */}
        <div className="glass-card rounded-xl border border-border/50 overflow-hidden animate-fade-in">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent border-border/50">
                <TableHead>Cliente</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Créditos</TableHead>
                <TableHead>Sucursal</TableHead>
                <TableHead>Vencimiento</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead className="w-12"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {clientes.map((cliente) => (
                <TableRow
                  key={cliente.id}
                  className="hover:bg-secondary/30 border-border/50"
                >
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-semibold text-primary">
                          {cliente.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium">{cliente.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {cliente.rut}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">{cliente.plan}</Badge>
                  </TableCell>
                  <TableCell>
                    {cliente.credits === -1 ? (
                      <span className="text-primary font-medium">Ilimitado</span>
                    ) : (
                      <span>
                        {cliente.credits}/{cliente.totalCredits}
                      </span>
                    )}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {cliente.sucursal}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {new Date(cliente.vencimiento).toLocaleDateString("es-CL")}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={cn(
                        "text-xs",
                        statusConfig[cliente.status as keyof typeof statusConfig]
                          .className
                      )}
                    >
                      {
                        statusConfig[cliente.status as keyof typeof statusConfig]
                          .label
                      }
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <button className="p-2 rounded-lg hover:bg-secondary transition-colors">
                      <MoreVertical className="h-4 w-4 text-muted-foreground" />
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </MainLayout>
  );
}
