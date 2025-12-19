import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';

export default function Configuracion() {
  return (
    <MainLayout>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Configuración</h1>
        <p className="text-sm text-muted-foreground">Ajustes de la cuenta, sucursal y preferencias.</p>

        <div className="glass-card p-4">Configuración general (mock)</div>
      </div>
    </MainLayout>
  );
}
