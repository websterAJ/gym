import { Router } from 'express';
import { BranchController } from '../controllers/branchController';

const router = Router();

// CRUD routes for Branch
router.post('/', BranchController.create);
router.get('/', BranchController.getAll);
router.get('/:id', BranchController.getById);
router.put('/:id', BranchController.update);
router.delete('/:id', BranchController.delete);

export default router;