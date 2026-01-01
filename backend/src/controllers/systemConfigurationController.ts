import { Request, Response } from 'express';
import { SystemConfiguration } from '../models/all_models';

// CRUD operations for SystemConfiguration model
export class SystemConfigurationController {
  static async create(req: Request, res: Response) {
    try {
      const config = await SystemConfiguration.create(req.body);
      res.status(201).json(config);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      const configs = await SystemConfiguration.findAll();
      res.json(configs);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const config = await SystemConfiguration.findByPk(req.params.id);
      if (!config) return res.status(404).json({ error: 'System configuration not found' });
      res.json(config);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const config = await SystemConfiguration.findByPk(req.params.id);
      if (!config) return res.status(404).json({ error: 'System configuration not found' });
      await config.update(req.body);
      res.json(config);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const config = await SystemConfiguration.findByPk(req.params.id);
      if (!config) return res.status(404).json({ error: 'System configuration not found' });
      await config.destroy();
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}