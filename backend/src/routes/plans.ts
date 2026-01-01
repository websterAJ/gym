import { Router } from 'express';
import { PlanController } from '../controllers/planController';

const router = Router();

// CRUD routes for Plan
router.post('/', PlanController.create);
router.get('/', PlanController.getAll);
router.get('/:id', PlanController.getById);
router.put('/:id', PlanController.update);
router.delete('/:id', PlanController.delete);

export default router;