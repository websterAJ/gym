import { Request, Response } from 'express';
import { GymClass, User, Branch } from '../models/all_models';

// CRUD operations for GymClass model
export class GymClassController {
  // Create a new class
  static async create(req: Request, res: Response) {
    try {
      const gymClass = await GymClass.create(req.body);
      res.status(201).json(gymClass);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  // Get all classes
  static async getAll(req: Request, res: Response) {
    try {
      const includeOptions: any[] = [];
      
      if (req.query.include === 'instructor') {
        includeOptions.push({ model: User, as: 'instructor' });
      }
      if (req.query.include === 'branch') {
        includeOptions.push({ model: Branch, as: 'branch' });
      }
      if (req.query.include === 'all') {
        includeOptions.push({ model: User, as: 'instructor' });
        includeOptions.push({ model: Branch, as: 'branch' });
      }

      const classes = await GymClass.findAll({
        include: includeOptions.length > 0 ? includeOptions : undefined
      });
      res.json(classes);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  // Get class by ID
  static async getById(req: Request, res: Response) {
    try {
      const includeOptions: any[] = [];
      
      if (req.query.include === 'instructor') {
        includeOptions.push({ model: User, as: 'instructor' });
      }
      if (req.query.include === 'branch') {
        includeOptions.push({ model: Branch, as: 'branch' });
      }
      if (req.query.include === 'all') {
        includeOptions.push({ model: User, as: 'instructor' });
        includeOptions.push({ model: Branch, as: 'branch' });
      }

      const gymClass = await GymClass.findByPk(req.params.id, {
        include: includeOptions.length > 0 ? includeOptions : undefined
      });
      
      if (!gymClass) {
        return res.status(404).json({ error: 'Class not found' });
      }
      res.json(gymClass);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  // Update class
  static async update(req: Request, res: Response) {
    try {
      const gymClass = await GymClass.findByPk(req.params.id);
      if (!gymClass) {
        return res.status(404).json({ error: 'Class not found' });
      }
      await gymClass.update(req.body);
      res.json(gymClass);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  // Delete class
  static async delete(req: Request, res: Response) {
    try {
      const gymClass = await GymClass.findByPk(req.params.id);
      if (!gymClass) {
        return res.status(404).json({ error: 'Class not found' });
      }
      await gymClass.destroy();
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}