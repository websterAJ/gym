import { useQuery } from '@tanstack/react-query';

interface DashboardSummary {
  ingresosDelMes: number;
  clientesActivos: number;
  clasesProgramadas: number;
  tasaDeRetencion: number;
  deudaPendiente: number;
  membresiasPorVencer: number;
}

const fetchDashboardSummary = async (): Promise<DashboardSummary> => {
  const response = await fetch('/api/dashboard/summary');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export function useDashboardSummary() {
  return useQuery<DashboardSummary, Error>({
    queryKey: ['dashboardSummary'],
    queryFn: fetchDashboardSummary,
  });
}
