import { Router } from 'express';
import { CommissionPayoutController } from '../controllers/commissionPayoutController';

const router = Router();

// CRUD routes for CommissionPayout
router.post('/', CommissionPayoutController.create);
router.get('/', CommissionPayoutController.getAll);
router.get('/:id', CommissionPayoutController.getById);
router.put('/:id', CommissionPayoutController.update);
router.delete('/:id', CommissionPayoutController.delete);

export default router;