import React from 'react';
import { MainLayout } from '@/components/layout/MainLayout';

export default function Crm() {
  return (
    <MainLayout>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">CRM</h1>
        <p className="text-sm text-muted-foreground">Vista de CRM: contactos, interacciones y pipeline.</p>

        <div className="glass-card p-4">CRM dashboard (mock)</div>
      </div>
    </MainLayout>
  );
}
