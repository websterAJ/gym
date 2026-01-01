import { Request, Response } from 'express';
import { Payment } from '../models/all_models';

// CRUD operations for Payment model
export class PaymentController {
  static async create(req: Request, res: Response) {
    try {
      const payment = await Payment.create(req.body);
      res.status(201).json(payment);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      const payments = await Payment.findAll();
      res.json(payments);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const payment = await Payment.findByPk(req.params.id);
      if (!payment) return res.status(404).json({ error: 'Payment not found' });
      res.json(payment);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const payment = await Payment.findByPk(req.params.id);
      if (!payment) return res.status(404).json({ error: 'Payment not found' });
      await payment.update(req.body);
      res.json(payment);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const payment = await Payment.findByPk(req.params.id);
      if (!payment) return res.status(404).json({ error: 'Payment not found' });
      await payment.destroy();
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}