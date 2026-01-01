import { Router } from 'express';
import { CustomerController } from '../controllers/customerController';
import { authenticateToken } from '../middleware/auth';
import { validateCustomer } from '../middleware/validation';
import { auditUserAction } from '../middleware/audit';

const router = Router();

// CRUD routes for Customer
router.post('/', authenticateToken, validateCustomer, auditUserAction, CustomerController.create);
router.get('/', authenticateToken, CustomerController.getAll);
router.get('/:id', authenticateToken, CustomerController.getById);
router.put('/:id', authenticateToken, auditUserAction, CustomerController.update);
router.delete('/:id', authenticateToken, auditUserAction, CustomerController.delete);

export default router;