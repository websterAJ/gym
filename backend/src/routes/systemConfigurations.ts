import { Router } from 'express';
import { SystemConfigurationController } from '../controllers/systemConfigurationController';

const router = Router();

// CRUD routes for SystemConfiguration
router.post('/', SystemConfigurationController.create);
router.get('/', SystemConfigurationController.getAll);
router.get('/:id', SystemConfigurationController.getById);
router.put('/:id', SystemConfigurationController.update);
router.delete('/:id', SystemConfigurationController.delete);

export default router;