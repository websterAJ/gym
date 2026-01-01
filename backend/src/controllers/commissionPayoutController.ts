import { Request, Response } from 'express';
import { CommissionPayout } from '../models/all_models';

// CRUD operations for CommissionPayout model
export class CommissionPayoutController {
  static async create(req: Request, res: Response) {
    try {
      const payout = await CommissionPayout.create(req.body);
      res.status(201).json(payout);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      const payouts = await CommissionPayout.findAll();
      res.json(payouts);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const payout = await CommissionPayout.findByPk(req.params.id);
      if (!payout) return res.status(404).json({ error: 'Commission payout not found' });
      res.json(payout);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const payout = await CommissionPayout.findByPk(req.params.id);
      if (!payout) return res.status(404).json({ error: 'Commission payout not found' });
      await payout.update(req.body);
      res.json(payout);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const payout = await CommissionPayout.findByPk(req.params.id);
      if (!payout) return res.status(404).json({ error: 'Commission payout not found' });
      await payout.destroy();
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}