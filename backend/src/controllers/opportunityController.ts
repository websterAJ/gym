import { Request, Response } from 'express';
import { Opportunity } from '../models/all_models';

// CRUD operations for Opportunity model
export class OpportunityController {
  static async create(req: Request, res: Response) {
    try {
      const opportunity = await Opportunity.create(req.body);
      res.status(201).json(opportunity);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      const opportunities = await Opportunity.findAll();
      res.json(opportunities);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const opportunity = await Opportunity.findByPk(req.params.id);
      if (!opportunity) return res.status(404).json({ error: 'Opportunity not found' });
      res.json(opportunity);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const opportunity = await Opportunity.findByPk(req.params.id);
      if (!opportunity) return res.status(404).json({ error: 'Opportunity not found' });
      await opportunity.update(req.body);
      res.json(opportunity);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const opportunity = await Opportunity.findByPk(req.params.id);
      if (!opportunity) return res.status(404).json({ error: 'Opportunity not found' });
      await opportunity.destroy();
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}