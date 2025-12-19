import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';

export default function Profesores() {
  return (
    <MainLayout>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Profesores</h1>
        <p className="text-sm text-muted-foreground">Gestiona los instructores, comisiones y horarios.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="glass-card p-4">Listado de profesores (mock)</div>
          <div className="glass-card p-4">Formulario para agregar/editar profesor</div>
        </div>
      </div>
    </MainLayout>
  );
}
