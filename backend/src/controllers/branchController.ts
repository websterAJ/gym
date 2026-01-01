import { Request, Response } from 'express';
import { Branch } from '../models/all_models';

// CRUD operations for Branch model
export class BranchController {
  static async create(req: Request, res: Response) {
    try {
      const branch = await Branch.create(req.body);
      res.status(201).json(branch);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      const branches = await Branch.findAll();
      res.json(branches);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const branch = await Branch.findByPk(req.params.id);
      if (!branch) return res.status(404).json({ error: 'Branch not found' });
      res.json(branch);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const branch = await Branch.findByPk(req.params.id);
      if (!branch) return res.status(404).json({ error: 'Branch not found' });
      await branch.update(req.body);
      res.json(branch);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const branch = await Branch.findByPk(req.params.id);
      if (!branch) return res.status(404).json({ error: 'Branch not found' });
      await branch.destroy();
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}