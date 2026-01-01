import { Router } from 'express';
import { SalesCommissionController } from '../controllers/salesCommissionController';

const router = Router();

// CRUD routes for SalesCommission
router.post('/', SalesCommissionController.create);
router.get('/', SalesCommissionController.getAll);
router.get('/:id', SalesCommissionController.getById);
router.put('/:id', SalesCommissionController.update);
router.delete('/:id', SalesCommissionController.delete);

export default router;