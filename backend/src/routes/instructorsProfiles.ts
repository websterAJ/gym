import { Router } from 'express';
import { InstructorsProfileController } from '../controllers/instructorsProfileController';

const router = Router();

// CRUD routes for InstructorsProfile
router.post('/', InstructorsProfileController.create);
router.get('/', InstructorsProfileController.getAll);
router.get('/:id', InstructorsProfileController.getById);
router.put('/:id', InstructorsProfileController.update);
router.delete('/:id', InstructorsProfileController.delete);

export default router;