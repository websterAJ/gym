import { Request, Response } from 'express';
import { Booking } from '../models/all_models';

// CRUD operations for Booking model
export class BookingController {
  static async create(req: Request, res: Response) {
    try {
      const booking = await Booking.create(req.body);
      res.status(201).json(booking);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      const bookings = await Booking.findAll({
        include: req.query.include === 'all' ? ['classSession', 'user'] : undefined
      });
      res.json(bookings);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const booking = await Booking.findByPk(req.params.id, {
        include: req.query.include === 'all' ? ['classSession', 'user'] : undefined
      });
      if (!booking) return res.status(404).json({ error: 'Booking not found' });
      res.json(booking);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const booking = await Booking.findByPk(req.params.id);
      if (!booking) return res.status(404).json({ error: 'Booking not found' });
      await booking.update(req.body);
      res.json(booking);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const booking = await Booking.findByPk(req.params.id);
      if (!booking) return res.status(404).json({ error: 'Booking not found' });
      await booking.destroy();
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}