import { Router } from 'express';
import { OpportunityController } from '../controllers/opportunityController';

const router = Router();

// CRUD routes for Opportunity
router.post('/', OpportunityController.create);
router.get('/', OpportunityController.getAll);
router.get('/:id', OpportunityController.getById);
router.put('/:id', OpportunityController.update);
router.delete('/:id', OpportunityController.delete);

export default router;