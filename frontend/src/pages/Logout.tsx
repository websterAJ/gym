import React, { useEffect } from 'react';
import { clearToken } from '@/lib/auth';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const navigate = useNavigate();
  useEffect(() => {
    clearToken();
    // small delay then redirect
    setTimeout(() => navigate('/login'), 200);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="glass-card p-6 text-center">
        <h2 className="text-lg font-semibold">Cerrando sesión...</h2>
        <p className="text-sm text-muted-foreground mt-2">Te redirigiremos al inicio de sesión.</p>
      </div>
    </div>
  );
}
