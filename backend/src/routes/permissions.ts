import { Router } from 'express';
import { PermissionController } from '../controllers/permissionController';

const router = Router();

// CRUD routes for Permission
router.post('/', PermissionController.create);
router.get('/', PermissionController.getAll);
router.get('/:id', PermissionController.getById);
router.put('/:id', PermissionController.update);
router.delete('/:id', PermissionController.delete);

export default router;