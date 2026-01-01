import { Router } from 'express';
import { RoleController } from '../controllers/roleController';
import { authenticateToken } from '../middleware/auth';
import { validateRole } from '../middleware/validation';
import { auditDataAction } from '../middleware/audit';

const router = Router();

// CRUD routes for Role
router.post('/', authenticateToken, validateRole, auditDataAction, RoleController.create);
router.get('/', authenticateToken, RoleController.getAll);
router.get('/:id', authenticateToken, RoleController.getById);
router.put('/:id', authenticateToken, auditDataAction, RoleController.update);
router.delete('/:id', authenticateToken, auditDataAction, RoleController.delete);

export default router;