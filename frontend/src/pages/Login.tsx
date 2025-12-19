import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err?.message || 'Login failed');
      }

      const data = await res.json();
      // store token locally for now
      if (data?.token) localStorage.setItem('token', data.token);
      toast({ title: 'Login correcto', description: `Bienvenido ${data?.user?.email || ''}` });
      navigate('/');
    } catch (err: any) {
      toast({ title: 'Error', description: err?.message || 'No se pudo iniciar sesión' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Iniciar sesión</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Email</label>
          <Input value={email} onChange={e => setEmail(e.target.value)} type="email" required />
        </div>
        <div>
          <label className="block text-sm mb-1">Contraseña</label>
          <Input value={password} onChange={e => setPassword(e.target.value)} type="password" required />
        </div>
        <div className="flex justify-end">
          <Button type="submit" disabled={loading}>{loading ? 'Entrando...' : 'Entrar'}</Button>
        </div>
      </form>
    </div>
  );
}
