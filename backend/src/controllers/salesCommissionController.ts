import { Request, Response } from 'express';
import { SalesCommission } from '../models/all_models';

// CRUD operations for SalesCommission model
export class SalesCommissionController {
  static async create(req: Request, res: Response) {
    try {
      const commission = await SalesCommission.create(req.body);
      res.status(201).json(commission);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      const commissions = await SalesCommission.findAll();
      res.json(commissions);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const commission = await SalesCommission.findByPk(req.params.id);
      if (!commission) return res.status(404).json({ error: 'Sales commission not found' });
      res.json(commission);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const commission = await SalesCommission.findByPk(req.params.id);
      if (!commission) return res.status(404).json({ error: 'Sales commission not found' });
      await commission.update(req.body);
      res.json(commission);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const commission = await SalesCommission.findByPk(req.params.id);
      if (!commission) return res.status(404).json({ error: 'Sales commission not found' });
      await commission.destroy();
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}