import { Router } from 'express';
import { ClassSessionController } from '../controllers/classSessionController';

const router = Router();

// CRUD routes for ClassSession
router.post('/', ClassSessionController.create);
router.get('/', ClassSessionController.getAll);
router.get('/:id', ClassSessionController.getById);
router.put('/:id', ClassSessionController.update);
router.delete('/:id', ClassSessionController.delete);

export default router;