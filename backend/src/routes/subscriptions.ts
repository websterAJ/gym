import { Router } from 'express';
import { SubscriptionController } from '../controllers/subscriptionController';

const router = Router();

// CRUD routes for Subscription
router.post('/', SubscriptionController.create);
router.get('/', SubscriptionController.getAll);
router.get('/:id', SubscriptionController.getById);
router.put('/:id', SubscriptionController.update);
router.delete('/:id', SubscriptionController.delete);

export default router;