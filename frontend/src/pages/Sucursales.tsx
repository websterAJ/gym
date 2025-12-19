import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, MapPin, Phone, Mail, MoreVertical, Users, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const sucursales = [
  {
    id: 1,
    name: "FitPro Las Condes",
    address: "Av. Apoquindo 4500, Las Condes",
    phone: "+56 2 2345 6789",
    email: "lascondes@fitpro.cl",
    horario: "06:00 - 22:00",
    status: "active",
    clients: 245,
    classes: 42,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=250&fit=crop",
  },
  {
    id: 2,
    name: "FitPro Providencia",
    address: "Av. Providencia 1208, Providencia",
    phone: "+56 2 2456 7890",
    email: "providencia@fitpro.cl",
    horario: "06:00 - 23:00",
    status: "active",
    clients: 198,
    classes: 38,
    image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=250&fit=crop",
  },
  {
    id: 3,
    name: "FitPro Vitacura",
    address: "Av. Vitacura 2939, Vitacura",
    phone: "+56 2 2567 8901",
    email: "vitacura@fitpro.cl",
    horario: "07:00 - 21:00",
    status: "active",
    clients: 156,
    classes: 28,
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=400&h=250&fit=crop",
  },
  {
    id: 4,
    name: "FitPro Ñuñoa",
    address: "Av. Irarrázaval 3450, Ñuñoa",
    phone: "+56 2 2678 9012",
    email: "nunoa@fitpro.cl",
    horario: "06:30 - 22:00",
    status: "inactive",
    clients: 112,
    classes: 24,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
  },
];

export default function Sucursales() {
  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Sucursales</h1>
            <p className="text-muted-foreground mt-1">
              Administra las ubicaciones de tu cadena de gimnasios
            </p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Nueva Sucursal
          </Button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {sucursales.map((sucursal, index) => (
            <div
              key={sucursal.id}
              className="glass-card rounded-xl border border-border/50 overflow-hidden animate-fade-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={sucursal.image}
                  alt={sucursal.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute top-3 right-3">
                  <Badge
                    variant="outline"
                    className={cn(
                      "text-xs",
                      sucursal.status === "active"
                        ? "bg-success/10 text-success border-success/20"
                        : "bg-muted text-muted-foreground"
                    )}
                  >
                    {sucursal.status === "active" ? "Activa" : "Inactiva"}
                  </Badge>
                </div>
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="font-bold text-lg">{sucursal.name}</h3>
                </div>
              </div>
              <div className="p-4 space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span>{sucursal.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="h-4 w-4 flex-shrink-0" />
                    <span>{sucursal.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail className="h-4 w-4 flex-shrink-0" />
                    <span>{sucursal.email}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-border/50">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">
                        {sucursal.clients}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">
                        {sucursal.classes}
                      </span>
                    </div>
                  </div>
                  <button className="p-2 rounded-lg hover:bg-secondary transition-colors">
                    <MoreVertical className="h-4 w-4 text-muted-foreground" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
