# Resumen del Levantamiento

Documento base: `levantamiento_gym_completo.md` (original en la raíz del repo).

Puntos clave:
- Roles: Admin, Admin Sucursal, Vendedor, Profesor, Cliente.
- Entidades principales: users, branches, plans, classes, bookings, payments, commissions.
- Integraciones prioritarias: VirtualPos, Webflow, SendGrid, Firebase (push), WhatsApp (opcional).
- MVP: auth, CRUD sucursales/planes/clientes, agendamiento, pagos básicos, admin panel.

Recomendación técnica:
- Backend: Node.js + TypeScript + Express/Fastify + Prisma + PostgreSQL
- Frontend: React + TypeScript + Vite (proyecto Lovelable integrado)
- Dev infra: Docker Compose (Postgres, Redis)
