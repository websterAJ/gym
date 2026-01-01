import { Router } from 'express';
import { PaymentController } from '../controllers/paymentController';

const router = Router();

// CRUD routes for Payment
router.post('/', PaymentController.create);
router.get('/', PaymentController.getAll);
router.get('/:id', PaymentController.getById);
router.put('/:id', PaymentController.update);
router.delete('/:id', PaymentController.delete);

export default router;