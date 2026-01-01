import express from 'express';
import cors from 'cors';
import authRouter from './routes/auth_new';
import classesRouter from './routes/classes';
import rolesRouter from './routes/roles';
import usersRouter from './routes/users_new';
import customersRouter from './routes/customers';
import branchesRouter from './routes/branches';
import plansRouter from './routes/plans';
import classSessionsRouter from './routes/classSessions';
import bookingsRouter from './routes/bookings_new';
import paymentsRouter from './routes/payments';
import subscriptionsRouter from './routes/subscriptions';
import customerCreditsRouter from './routes/customerCredits';
import attendanceRouter from './routes/attendance';
import invoicesRouter from './routes/invoices';
import permissionsRouter from './routes/permissions';
import contactsRouter from './routes/contacts';
import leadsRouter from './routes/leads';
import opportunitiesRouter from './routes/opportunities';
import interactionsRouter from './routes/interactions';
import customerAccountsRouter from './routes/customerAccounts';
import instructorsProfilesRouter from './routes/instructorsProfiles';
import salesCommissionsRouter from './routes/salesCommissions';
import commissionPayoutsRouter from './routes/commissionPayouts';
import auditLogsRouter from './routes/auditLogs';
import systemConfigurationsRouter from './routes/systemConfigurations';
import setupSwagger from './swagger';
import sequelize from './models';
import './models/index_init';

// Configurar variables de entorno por defecto para desarrollo
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'development';
}

if (!process.env.JWT_SECRET) {
  process.env.JWT_SECRET = 'dev-secret-key-change-in-production';
  console.warn('⚠️  Usando JWT_SECRET por defecto para desarrollo');
}

const app = express();

// Configuración CORS mejorada
const corsOptions = {
  origin: (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => {
    // Lista de orígenes permitidos
    const allowedOrigins = [
      'http://localhost:3000',
      'http://localhost:3001',
      'http://localhost:3002',
      'http://localhost:3003',
      'http://localhost:3004',
      'http://localhost:5173', // Vite default
      'http://localhost:5174', // Vite fallback
      'http://localhost:8080', // Vue CLI default
      'http://localhost:8081', // Vue CLI fallback
      'http://127.0.0.1:3000',
      'http://127.0.0.1:5173',
      process.env.FRONTEND_URL
    ].filter(Boolean); // Filtra valores undefined/null

    // Permitir requests sin origin (mobile apps, Postman, curl, etc.)
    if (!origin) {
      callback(null, true);
      return;
    }

    // En desarrollo o si no hay NODE_ENV, permitir cualquier localhost/127.0.0.1
    const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
    const isLocalhost = origin.includes('localhost') || origin.includes('127.0.0.1');
    
    if (isDevelopment && isLocalhost) {
      console.log(`🔓 CORS: Permitiendo origen en desarrollo: ${origin}`);
      callback(null, true);
      return;
    }

    // Permitir orígenes explícitos
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
      return;
    }

    // Si no es un origen permitido
    console.warn(`🚫 CORS: Origen no permitido: ${origin}`);
    console.warn(`🔍 Orígenes permitidos: ${allowedOrigins.join(', ')}`);
    callback(new Error('Not allowed by CORS'), false);
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'Authorization',
    'Cache-Control',
    'Pragma'
  ],
  credentials: true,
  optionsSuccessStatus: 200 // Para soporte de navegadores antiguos
};

app.use(cors(corsOptions));
app.use(express.json({ limit: '10mb' })); // Límite de tamaño para uploads
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: Date.now() });
});

// API health used by frontend
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: Date.now() });
});

app.use('/api/auth', authRouter);
app.use('/api/classes', classesRouter);
app.use('/api/roles', rolesRouter);
app.use('/api/users', usersRouter);
app.use('/api/customers', customersRouter);
app.use('/api/branches', branchesRouter);
app.use('/api/plans', plansRouter);
app.use('/api/class-sessions', classSessionsRouter);
app.use('/api/bookings', bookingsRouter);
app.use('/api/payments', paymentsRouter);
app.use('/api/subscriptions', subscriptionsRouter);
app.use('/api/customer-credits', customerCreditsRouter);
app.use('/api/attendance', attendanceRouter);
app.use('/api/invoices', invoicesRouter);
app.use('/api/permissions', permissionsRouter);
app.use('/api/contacts', contactsRouter);
app.use('/api/leads', leadsRouter);
app.use('/api/opportunities', opportunitiesRouter);
app.use('/api/interactions', interactionsRouter);
app.use('/api/customer-accounts', customerAccountsRouter);
app.use('/api/instructor-profiles', instructorsProfilesRouter);
app.use('/api/sales-commissions', salesCommissionsRouter);
app.use('/api/commission-payouts', commissionPayoutsRouter);
app.use('/api/audit-logs', auditLogsRouter);
app.use('/api/system-configurations', systemConfigurationsRouter);
app.use('/api/users', require('./routes/users').default);
app.use('/api/bookings', require('./routes/bookings').default);

// Swagger docs
setupSwagger(app);

// Try to authenticate DB on startup (non-blocking)
sequelize
  .authenticate()
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('Database connection OK');
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.warn('Database connection failed:', err.message || err);
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Backend listening on port ${PORT}`);
});
