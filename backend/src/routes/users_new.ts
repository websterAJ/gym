import { Router } from 'express';
import { UserController } from '../controllers/userController';
import { authenticateToken } from '../middleware/auth';
import { validateUser } from '../middleware/validation';
import { auditUserAction } from '../middleware/audit';

const router = Router();

// CRUD routes for User
router.post('/', authenticateToken, validateUser, auditUserAction, UserController.create);
router.get('/', authenticateToken, UserController.getAll);
router.get('/:id', authenticateToken, UserController.getById);
router.put('/:id', authenticateToken, auditUserAction, UserController.update);
router.delete('/:id', authenticateToken, auditUserAction, UserController.delete);

export default router;