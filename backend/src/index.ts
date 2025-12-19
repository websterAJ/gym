import express from 'express';
import cors from 'cors';
import authRouter from './routes/auth';
import classesRouter from './routes/classes';
import setupSwagger from './swagger';
import sequelize from './models';
import './models/index_init';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: Date.now() });
});

// API health used by frontend
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: Date.now() });
});

app.use('/api/auth', authRouter);
app.use('/api/classes', classesRouter);
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
