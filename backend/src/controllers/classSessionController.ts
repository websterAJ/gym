import { Request, Response } from 'express';
import { ClassSession } from '../models/all_models';

// CRUD operations for ClassSession model
export class ClassSessionController {
  static async create(req: Request, res: Response) {
    try {
      const session = await ClassSession.create(req.body);
      res.status(201).json(session);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      const sessions = await ClassSession.findAll({
        include: req.query.include === 'all' ? ['class', 'branch', 'instructor'] : undefined
      });
      res.json(sessions);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const session = await ClassSession.findByPk(req.params.id, {
        include: req.query.include === 'all' ? ['class', 'branch', 'instructor'] : undefined
      });
      if (!session) return res.status(404).json({ error: 'Class session not found' });
      res.json(session);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const session = await ClassSession.findByPk(req.params.id);
      if (!session) return res.status(404).json({ error: 'Class session not found' });
      await session.update(req.body);
      res.json(session);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const session = await ClassSession.findByPk(req.params.id);
      if (!session) return res.status(404).json({ error: 'Class session not found' });
      await session.destroy();
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}