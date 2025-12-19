import { Router } from 'express';

const router = Router();

// In-memory store for development
const bookings: any[] = [];

router.get('/', (req, res) => {
  res.json(bookings);
});

router.post('/', (req, res) => {
  const { class_id, user_id } = req.body;
  const b = { id: 'b-' + Date.now(), class_id, user_id, status: 'booked', created_at: new Date() };
  bookings.push(b);
  res.status(201).json(b);
});

router.put('/:id/cancel', (req, res) => {
  const { id } = req.params;
  const item = bookings.find(b => b.id === id);
  if (!item) return res.status(404).json({ message: 'not found' });
  item.status = 'cancelled';
  res.json(item);
});

export default router;
