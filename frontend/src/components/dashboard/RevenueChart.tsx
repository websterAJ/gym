import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { month: "Ene", ingresos: 4500000, clientes: 120 },
  { month: "Feb", ingresos: 5200000, clientes: 145 },
  { month: "Mar", ingresos: 4800000, clientes: 138 },
  { month: "Abr", ingresos: 6100000, clientes: 167 },
  { month: "May", ingresos: 5900000, clientes: 158 },
  { month: "Jun", ingresos: 7200000, clientes: 189 },
  { month: "Jul", ingresos: 6800000, clientes: 178 },
  { month: "Ago", ingresos: 7500000, clientes: 195 },
  { month: "Sep", ingresos: 8100000, clientes: 212 },
  { month: "Oct", ingresos: 7800000, clientes: 205 },
  { month: "Nov", ingresos: 8500000, clientes: 225 },
  { month: "Dic", ingresos: 9200000, clientes: 248 },
];

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

export function RevenueChart() {
  return (
    <div className="glass-card rounded-xl border border-border/50 p-6 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">Ingresos Mensuales</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Tendencia de ingresos del año
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-primary" />
            <span className="text-xs text-muted-foreground">Ingresos</span>
          </div>
        </div>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorIngresos" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor="hsl(16, 100%, 65%)"
                  stopOpacity={0.3}
                />
                <stop
                  offset="100%"
                  stopColor="hsl(16, 100%, 65%)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(215, 20%, 55%)", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(215, 20%, 55%)", fontSize: 12 }}
              tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-popover border border-border rounded-lg p-3 shadow-lg">
                      <p className="text-sm font-medium">
                        {formatCurrency(payload[0].value as number)}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {payload[0].payload.clientes} clientes activos
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Area
              type="monotone"
              dataKey="ingresos"
              stroke="hsl(16, 100%, 65%)"
              strokeWidth={2}
              fill="url(#colorIngresos)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
