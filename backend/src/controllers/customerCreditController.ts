import { Request, Response } from 'express';
import { CustomerCredit } from '../models/all_models';

// CRUD operations for CustomerCredit model
export class CustomerCreditController {
  static async create(req: Request, res: Response) {
    try {
      const credit = await CustomerCredit.create(req.body);
      res.status(201).json(credit);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      const credits = await CustomerCredit.findAll();
      res.json(credits);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const credit = await CustomerCredit.findByPk(req.params.id);
      if (!credit) return res.status(404).json({ error: 'Customer credit not found' });
      res.json(credit);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const credit = await CustomerCredit.findByPk(req.params.id);
      if (!credit) return res.status(404).json({ error: 'Customer credit not found' });
      await credit.update(req.body);
      res.json(credit);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const credit = await CustomerCredit.findByPk(req.params.id);
      if (!credit) return res.status(404).json({ error: 'Customer credit not found' });
      await credit.destroy();
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}