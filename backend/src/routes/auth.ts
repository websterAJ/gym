import { Router } from 'express';

const router = Router();

router.post('/login', (req, res) => {
  const { email } = req.body;
  // simple stub: accept any credentials
  const user = { id: 'u1', email };
  res.json({ token: 'mock-token-123', user });
});

router.post('/register', (req, res) => {
  const { email } = req.body;
  const user = { id: 'u-' + Date.now(), email };
  res.status(201).json({ user });
});

export default router;
