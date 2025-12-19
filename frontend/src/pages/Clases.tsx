import { MainLayout } from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Plus,
  ChevronLeft,
  ChevronRight,
  Clock,
  Users,
  MapPin,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const diasSemana = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
const horas = [
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
];

const clases = [
  {
    id: 1,
    name: "Yoga Flow",
    instructor: "Camila Torres",
    dia: 0,
    hora: "09:00",
    duracion: 60,
    enrolled: 12,
    capacity: 15,
    sucursal: "Las Condes",
    color: "bg-emerald-500",
  },
  {
    id: 2,
    name: "CrossFit",
    instructor: "Diego Ramírez",
    dia: 0,
    hora: "10:00",
    duracion: 45,
    enrolled: 18,
    capacity: 20,
    sucursal: "Providencia",
    color: "bg-orange-500",
  },
  {
    id: 3,
    name: "Spinning",
    instructor: "Valentina Soto",
    dia: 1,
    hora: "07:00",
    duracion: 45,
    enrolled: 20,
    capacity: 20,
    sucursal: "Las Condes",
    color: "bg-blue-500",
  },
  {
    id: 4,
    name: "Pilates Mat",
    instructor: "Francisca López",
    dia: 1,
    hora: "14:00",
    duracion: 55,
    enrolled: 8,
    capacity: 12,
    sucursal: "Vitacura",
    color: "bg-purple-500",
  },
  {
    id: 5,
    name: "HIIT",
    instructor: "Andrés Morales",
    dia: 2,
    hora: "18:00",
    duracion: 30,
    enrolled: 15,
    capacity: 25,
    sucursal: "Providencia",
    color: "bg-red-500",
  },
  {
    id: 6,
    name: "Boxing",
    instructor: "Roberto Vega",
    dia: 3,
    hora: "19:00",
    duracion: 60,
    enrolled: 10,
    capacity: 15,
    sucursal: "Las Condes",
    color: "bg-amber-500",
  },
  {
    id: 7,
    name: "Yoga Flow",
    instructor: "Camila Torres",
    dia: 4,
    hora: "09:00",
    duracion: 60,
    enrolled: 14,
    capacity: 15,
    sucursal: "Las Condes",
    color: "bg-emerald-500",
  },
  {
    id: 8,
    name: "Funcional",
    instructor: "Martín Rojas",
    dia: 5,
    hora: "10:00",
    duracion: 50,
    enrolled: 22,
    capacity: 30,
    sucursal: "Ñuñoa",
    color: "bg-cyan-500",
  },
];

export default function Clases() {
  const [selectedDay, setSelectedDay] = useState(0);

  const getClasesPorHora = (hora: string) => {
    return clases.filter((c) => c.dia === selectedDay && c.hora === hora);
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Clases</h1>
            <p className="text-muted-foreground mt-1">
              Gestiona el calendario de clases y horarios
            </p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Nueva Clase
          </Button>
        </div>

        {/* Calendar Navigation */}
        <div className="glass-card rounded-xl border border-border/50 p-4 animate-fade-in">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-lg hover:bg-secondary transition-colors">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <h2 className="text-lg font-semibold">Enero 2024</h2>
              <button className="p-2 rounded-lg hover:bg-secondary transition-colors">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                Hoy
              </Button>
              <Button variant="outline" size="sm">
                Semana
              </Button>
              <Button variant="outline" size="sm">
                Mes
              </Button>
            </div>
          </div>

          {/* Days of Week */}
          <div className="grid grid-cols-7 gap-2 mb-4">
            {diasSemana.map((dia, index) => (
              <button
                key={dia}
                onClick={() => setSelectedDay(index)}
                className={cn(
                  "p-3 rounded-lg text-center transition-all",
                  selectedDay === index
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-secondary"
                )}
              >
                <p className="text-xs text-muted-foreground mb-1">{dia}</p>
                <p className="text-lg font-semibold">{15 + index}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Schedule Grid */}
        <div className="glass-card rounded-xl border border-border/50 overflow-hidden animate-fade-in">
          <div className="divide-y divide-border/50">
            {horas.map((hora) => {
              const clasesEnHora = getClasesPorHora(hora);
              return (
                <div key={hora} className="flex">
                  <div className="w-20 p-4 border-r border-border/50 flex-shrink-0">
                    <span className="text-sm text-muted-foreground">{hora}</span>
                  </div>
                  <div className="flex-1 p-2 min-h-[80px]">
                    {clasesEnHora.length > 0 ? (
                      <div className="flex gap-2 flex-wrap">
                        {clasesEnHora.map((clase) => (
                          <div
                            key={clase.id}
                            className={cn(
                              "flex-1 min-w-[200px] p-3 rounded-lg border border-border/50 hover:border-border transition-colors cursor-pointer group",
                              "bg-secondary/30"
                            )}
                          >
                            <div className="flex items-start gap-3">
                              <div
                                className={cn(
                                  "w-1 h-12 rounded-full flex-shrink-0",
                                  clase.color
                                )}
                              />
                              <div className="flex-1 min-w-0">
                                <h4 className="font-semibold text-sm">
                                  {clase.name}
                                </h4>
                                <p className="text-xs text-muted-foreground">
                                  {clase.instructor}
                                </p>
                                <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                                  <div className="flex items-center gap-1">
                                    <Clock className="h-3 w-3" />
                                    {clase.duracion} min
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Users className="h-3 w-3" />
                                    <span
                                      className={cn(
                                        clase.enrolled === clase.capacity &&
                                          "text-warning"
                                      )}
                                    >
                                      {clase.enrolled}/{clase.capacity}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
