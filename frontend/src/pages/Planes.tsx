import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Check, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const planes = [
  {
    id: 1,
    name: "Plan Básico",
    price: 29990,
    duration: "30 días",
    credits: 8,
    features: [
      "8 clases al mes",
      "Acceso a 1 sucursal",
      "Clases grupales",
      "Vestidores y duchas",
    ],
    popular: false,
    status: "active",
    subscribers: 234,
  },
  {
    id: 2,
    name: "Plan Premium",
    price: 49990,
    duration: "30 días",
    credits: 16,
    features: [
      "16 clases al mes",
      "Acceso a todas las sucursales",
      "Clases grupales e individuales",
      "Vestidores y duchas",
      "1 sesión con entrenador personal",
      "Acceso a zona de máquinas",
    ],
    popular: true,
    status: "active",
    subscribers: 456,
  },
  {
    id: 3,
    name: "Plan Ilimitado",
    price: 79990,
    duration: "30 días",
    credits: -1,
    features: [
      "Clases ilimitadas",
      "Acceso a todas las sucursales",
      "Todas las clases disponibles",
      "Vestidores y duchas premium",
      "4 sesiones con entrenador personal",
      "Acceso 24/7 a zona de máquinas",
      "Nutricionista incluido",
    ],
    popular: false,
    status: "active",
    subscribers: 189,
  },
  {
    id: 4,
    name: "Plan Corporativo",
    price: 39990,
    duration: "30 días",
    credits: 12,
    features: [
      "12 clases al mes",
      "Descuento empresarial",
      "Facturación centralizada",
      "Reportes de uso",
    ],
    popular: false,
    status: "active",
    subscribers: 67,
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

export default function Planes() {
  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Planes</h1>
            <p className="text-muted-foreground mt-1">
              Gestiona los planes y membresías disponibles
            </p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Nuevo Plan
          </Button>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {planes.map((plan, index) => (
            <div
              key={plan.id}
              className={cn(
                "glass-card rounded-xl border overflow-hidden animate-fade-in relative",
                plan.popular
                  ? "border-primary/50 ring-1 ring-primary/20"
                  : "border-border/50"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-orange-400 text-primary-foreground text-xs font-semibold py-1.5 text-center flex items-center justify-center gap-1">
                  <Star className="h-3 w-3" />
                  Más Popular
                </div>
              )}
              <div className={cn("p-6", plan.popular && "pt-10")}>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-xl">{plan.name}</h3>
                    <div className="flex items-baseline gap-1 mt-2">
                      <span className="text-3xl font-bold gradient-text">
                        {formatCurrency(plan.price)}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        /{plan.duration}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {plan.credits === -1
                        ? "Ilimitado"
                        : `${plan.credits} créditos`}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-xs bg-success/10 text-success border-success/20"
                    >
                      {plan.subscribers} suscriptores
                    </Badge>
                  </div>

                  <ul className="space-y-2.5 pt-4 border-t border-border/50">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <Check className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={plan.popular ? "default" : "outline"}
                    className="w-full mt-4"
                  >
                    Editar Plan
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Discounts Section */}
        <div className="glass-card rounded-xl border border-border/50 p-6 animate-fade-in">
          <h3 className="text-lg font-semibold mb-4">
            Descuentos por Cantidad de Meses
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { months: 3, discount: 10 },
              { months: 6, discount: 15 },
              { months: 12, discount: 25 },
              { months: 24, discount: 35 },
            ].map((item) => (
              <div
                key={item.months}
                className="p-4 rounded-lg bg-secondary/50 text-center"
              >
                <p className="text-2xl font-bold text-primary">
                  {item.discount}%
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {item.months} meses
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
