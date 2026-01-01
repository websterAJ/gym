import { Router } from 'express';
import { ContactController } from '../controllers/contactController';

const router = Router();

// CRUD routes for Contact
router.post('/', ContactController.create);
router.get('/', ContactController.getAll);
router.get('/:id', ContactController.getById);
router.put('/:id', ContactController.update);
router.delete('/:id', ContactController.delete);

export default router;