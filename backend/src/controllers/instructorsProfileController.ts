import { Request, Response } from 'express';
import { InstructorsProfile } from '../models/all_models';

// CRUD operations for InstructorsProfile model
export class InstructorsProfileController {
  static async create(req: Request, res: Response) {
    try {
      const profile = await InstructorsProfile.create(req.body);
      res.status(201).json(profile);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      const profiles = await InstructorsProfile.findAll();
      res.json(profiles);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const profile = await InstructorsProfile.findByPk(req.params.id);
      if (!profile) return res.status(404).json({ error: 'Instructor profile not found' });
      res.json(profile);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const profile = await InstructorsProfile.findByPk(req.params.id);
      if (!profile) return res.status(404).json({ error: 'Instructor profile not found' });
      await profile.update(req.body);
      res.json(profile);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const profile = await InstructorsProfile.findByPk(req.params.id);
      if (!profile) return res.status(404).json({ error: 'Instructor profile not found' });
      await profile.destroy();
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}