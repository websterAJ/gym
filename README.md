Gym Scheduling - Proyecto

Scaffold inicial para el sistema de agendamiento del gym.

Estructura creada:

- `backend/` - API en Node.js + TypeScript (esqueleto)
- `frontend/` - UI (Vite/React recomendado) - README inicial
- `infra/` - infra (Prisma schema)
- `docs/` - documentación y plan de sprints
- `docker-compose.dev.yml` - servicios para desarrollo (Postgres, Redis)

Pasos rápidos (desarrollo):

1. Instalar dependencias en `backend/` y `frontend/`.
2. Levantar Postgres y Redis con `docker-compose -f docker-compose.dev.yml up -d`.
3. Ejecutar backend con `npm run dev` desde `backend/`.
