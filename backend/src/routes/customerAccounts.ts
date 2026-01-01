import { Router } from 'express';
import { CustomerAccountController } from '../controllers/customerAccountController';

const router = Router();

// CRUD routes for CustomerAccount
router.post('/', CustomerAccountController.create);
router.get('/', CustomerAccountController.getAll);
router.get('/:id', CustomerAccountController.getById);
router.put('/:id', CustomerAccountController.update);
router.delete('/:id', CustomerAccountController.delete);

export default router;