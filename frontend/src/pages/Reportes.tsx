import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';

export default function Reportes() {
  return (
    <MainLayout>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Reportes</h1>
        <p className="text-sm text-muted-foreground">Reportes y métricas principales.</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="glass-card p-4">Reporte de ingresos</div>
          <div className="glass-card p-4">Reporte de uso / retención</div>
        </div>
      </div>
    </MainLayout>
  );
}
