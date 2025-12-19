import { Clock, Users, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const upcomingClasses = [
  {
    id: 1,
    name: "Yoga Flow",
    instructor: "Camila Torres",
    time: "09:00",
    duration: "60 min",
    enrolled: 12,
    capacity: 15,
    location: "Sala A - Las Condes",
    color: "bg-emerald-500",
  },
  {
    id: 2,
    name: "CrossFit",
    instructor: "Diego Ramírez",
    time: "10:30",
    duration: "45 min",
    enrolled: 18,
    capacity: 20,
    location: "Box - Providencia",
    color: "bg-orange-500",
  },
  {
    id: 3,
    name: "Spinning",
    instructor: "Valentina Soto",
    time: "12:00",
    duration: "45 min",
    enrolled: 20,
    capacity: 20,
    location: "Sala Spinning - Las Condes",
    color: "bg-blue-500",
  },
  {
    id: 4,
    name: "Pilates Mat",
    instructor: "Francisca López",
    time: "14:00",
    duration: "55 min",
    enrolled: 8,
    capacity: 12,
    location: "Sala B - Vitacura",
    color: "bg-purple-500",
  },
];

export function UpcomingClasses() {
  return (
    <div className="glass-card rounded-xl border border-border/50 animate-fade-in">
      <div className="p-6 border-b border-border/50">
        <h3 className="text-lg font-semibold">Próximas Clases</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Agenda del día de hoy
        </p>
      </div>
      <div className="p-4 space-y-3">
        {upcomingClasses.map((classItem) => (
          <div
            key={classItem.id}
            className="flex gap-4 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors group"
          >
            <div
              className={cn(
                "w-1 rounded-full flex-shrink-0",
                classItem.color
              )}
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h4 className="font-semibold text-sm">{classItem.name}</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {classItem.instructor}
                  </p>
                </div>
                <span className="text-lg font-bold text-primary">
                  {classItem.time}
                </span>
              </div>
              <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {classItem.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-3.5 w-3.5" />
                  <span className={cn(
                    classItem.enrolled === classItem.capacity && "text-warning"
                  )}>
                    {classItem.enrolled}/{classItem.capacity}
                  </span>
                </div>
                <div className="flex items-center gap-1 truncate">
                  <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
                  <span className="truncate">{classItem.location}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-border/50">
        <button className="w-full text-sm text-primary hover:text-primary/80 font-medium transition-colors">
          Ver calendario completo →
        </button>
      </div>
    </div>
  );
}
