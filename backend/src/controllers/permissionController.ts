import { Request, Response } from 'express';
import { Permission } from '../models/all_models';

// CRUD operations for Permission model
export class PermissionController {
  static async create(req: Request, res: Response) {
    try {
      const permission = await Permission.create(req.body);
      res.status(201).json(permission);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      const permissions = await Permission.findAll();
      res.json(permissions);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const permission = await Permission.findByPk(req.params.id);
      if (!permission) return res.status(404).json({ error: 'Permission not found' });
      res.json(permission);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const permission = await Permission.findByPk(req.params.id);
      if (!permission) return res.status(404).json({ error: 'Permission not found' });
      await permission.update(req.body);
      res.json(permission);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const permission = await Permission.findByPk(req.params.id);
      if (!permission) return res.status(404).json({ error: 'Permission not found' });
      await permission.destroy();
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}