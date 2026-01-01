import { Router } from 'express';
import { InteractionController } from '../controllers/interactionController';

const router = Router();

// CRUD routes for Interaction
router.post('/', InteractionController.create);
router.get('/', InteractionController.getAll);
router.get('/:id', InteractionController.getById);
router.put('/:id', InteractionController.update);
router.delete('/:id', InteractionController.delete);

export default router;