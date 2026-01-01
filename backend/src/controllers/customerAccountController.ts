import { Request, Response } from 'express';
import { CustomerAccount } from '../models/all_models';

// CRUD operations for CustomerAccount model
export class CustomerAccountController {
  static async create(req: Request, res: Response) {
    try {
      const account = await CustomerAccount.create(req.body);
      res.status(201).json(account);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      const accounts = await CustomerAccount.findAll();
      res.json(accounts);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const account = await CustomerAccount.findByPk(req.params.id);
      if (!account) return res.status(404).json({ error: 'Customer account not found' });
      res.json(account);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const account = await CustomerAccount.findByPk(req.params.id);
      if (!account) return res.status(404).json({ error: 'Customer account not found' });
      await account.update(req.body);
      res.json(account);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const account = await CustomerAccount.findByPk(req.params.id);
      if (!account) return res.status(404).json({ error: 'Customer account not found' });
      await account.destroy();
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}