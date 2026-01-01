import { Request, Response } from 'express';
import { Lead } from '../models/all_models';

// CRUD operations for Lead model
export class LeadController {
  static async create(req: Request, res: Response) {
    try {
      const lead = await Lead.create(req.body);
      res.status(201).json(lead);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      const leads = await Lead.findAll();
      res.json(leads);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const lead = await Lead.findByPk(req.params.id);
      if (!lead) return res.status(404).json({ error: 'Lead not found' });
      res.json(lead);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const lead = await Lead.findByPk(req.params.id);
      if (!lead) return res.status(404).json({ error: 'Lead not found' });
      await lead.update(req.body);
      res.json(lead);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const lead = await Lead.findByPk(req.params.id);
      if (!lead) return res.status(404).json({ error: 'Lead not found' });
      await lead.destroy();
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}