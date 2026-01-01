import { Router } from 'express';
import { CustomerCreditController } from '../controllers/customerCreditController';

const router = Router();

// CRUD routes for CustomerCredit
router.post('/', CustomerCreditController.create);
router.get('/', CustomerCreditController.getAll);
router.get('/:id', CustomerCreditController.getById);
router.put('/:id', CustomerCreditController.update);
router.delete('/:id', CustomerCreditController.delete);

export default router;