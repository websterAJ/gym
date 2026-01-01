import { Router } from 'express';
import { AuditLogController } from '../controllers/auditLogController';

const router = Router();

// CRUD routes for AuditLog (note: no update for audit logs)
router.post('/', AuditLogController.create);
router.get('/', AuditLogController.getAll);
router.get('/:id', AuditLogController.getById);
router.delete('/:id', AuditLogController.delete);

export default router;