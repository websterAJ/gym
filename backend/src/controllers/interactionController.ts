import { Request, Response } from 'express';
import { Interaction } from '../models/all_models';

// CRUD operations for Interaction model
export class InteractionController {
  static async create(req: Request, res: Response) {
    try {
      const interaction = await Interaction.create(req.body);
      res.status(201).json(interaction);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      const interactions = await Interaction.findAll();
      res.json(interactions);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const interaction = await Interaction.findByPk(req.params.id);
      if (!interaction) return res.status(404).json({ error: 'Interaction not found' });
      res.json(interaction);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const interaction = await Interaction.findByPk(req.params.id);
      if (!interaction) return res.status(404).json({ error: 'Interaction not found' });
      await interaction.update(req.body);
      res.json(interaction);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const interaction = await Interaction.findByPk(req.params.id);
      if (!interaction) return res.status(404).json({ error: 'Interaction not found' });
      await interaction.destroy();
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}