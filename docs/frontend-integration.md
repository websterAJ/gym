# Frontend Integration (Lovelable)

This document describes how to run the Lovelable-based frontend in this repository and connect it to the local backend mock server.

Prerequisites
- Node.js 18+ and npm installed
- Docker (optional) to run Postgres/Redis if needed

Checklist
- [ ] Ensure `frontend/vite.config.ts` contains a proxy for `/api` to `http://localhost:3000` (already configured).
- [ ] Install dependencies in `frontend/` and `backend/`.
- [ ] Start the backend mock server: `npm run dev` from `backend/`.
- [ ] Start the frontend dev server: `npm run dev` from `frontend/`.

Commands (PowerShell)
```pwsh
cd D:\users\p025326051\Desktop\workspace\personal\gym\backend
npm install
npm run dev

# in another shell
cd D:\users\p025326051\Desktop\workspace\personal\gym\frontend
npm install
npm run dev
```

Mock endpoints provided by the backend for development
- `POST /api/auth/login` - accept `{ email, password }` and returns `{ token, user }` (stub)
- `GET /api/classes` - returns a list of mock classes
- `GET /api/health` - health check

Notes
- The frontend is the Lovelable project extracted into `frontend/`. Use its existing scripts (`npm run dev`) to start.
- If you need seeded data in Postgres later, add SQL files under `infra/` and update the docker-compose volumes.
