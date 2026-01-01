import { Router } from 'express';
import { BookingController } from '../controllers/bookingController';

const router = Router();

// CRUD routes for Booking
router.post('/', BookingController.create);
router.get('/', BookingController.getAll);
router.get('/:id', BookingController.getById);
router.put('/:id', BookingController.update);
router.delete('/:id', BookingController.delete);

export default router;