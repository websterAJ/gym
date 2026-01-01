import { Router } from 'express';
import { InvoiceController } from '../controllers/invoiceController';

const router = Router();

// CRUD routes for Invoice
router.post('/', InvoiceController.create);
router.get('/', InvoiceController.getAll);
router.get('/:id', InvoiceController.getById);
router.put('/:id', InvoiceController.update);
router.delete('/:id', InvoiceController.delete);

export default router;