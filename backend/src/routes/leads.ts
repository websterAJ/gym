import { Router } from 'express';
import { LeadController } from '../controllers/leadController';

const router = Router();

// CRUD routes for Lead
router.post('/', LeadController.create);
router.get('/', LeadController.getAll);
router.get('/:id', LeadController.getById);
router.put('/:id', LeadController.update);
router.delete('/:id', LeadController.delete);

export default router;