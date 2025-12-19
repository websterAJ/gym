import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  const classes = [
    { id: 'c1', name: 'Yoga - Principiantes', instructor: 'María', schedule: 'Lun 18:00', capacity: 20 },
    { id: 'c2', name: 'HIIT', instructor: 'Pedro', schedule: 'Mar 19:00', capacity: 15 },
    { id: 'c3', name: 'Spinning', instructor: 'Ana', schedule: 'Mié 20:00', capacity: 12 }
  ];
  res.json(classes);
});

export default router;
