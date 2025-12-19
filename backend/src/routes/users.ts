import { Router } from 'express';

const router = Router();

const users: any[] = [
  { id: 'u1', email: 'cliente@example.com', name: 'Cliente Demo', role: 'customer' },
  { id: 'i1', email: 'profe@example.com', name: 'Profesor Demo', role: 'instructor' }
];

router.get('/', (req, res) => {
  res.json(users);
});

router.get('/:id', (req, res) => {
  const item = users.find(u => u.id === req.params.id);
  if (!item) return res.status(404).json({ message: 'not found' });
  res.json(item);
});

export default router;
