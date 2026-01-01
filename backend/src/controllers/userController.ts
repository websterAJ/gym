import { Request, Response } from 'express';
import { User, Role } from '../models/all_models';
import { authenticateToken } from '../middleware/auth';
import { validateUser } from '../middleware/validation';
import { auditUserAction } from '../middleware/audit';

// CRUD operations for User model
export class UserController {
  // Create a new user
  static async create(req: Request, res: Response) {
    try {
      const user = await User.create(req.body);
      res.status(201).json(user);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  // Get all users
  static async getAll(req: Request, res: Response) {
    try {
      const users = await User.findAll({
        include: req.query.include === 'role' ? [{ model: Role, as: 'role' }] : undefined
      });
      res.json(users);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  // Get user by ID
  static async getById(req: Request, res: Response) {
    try {
      const user = await User.findByPk(req.params.id, {
        include: req.query.include === 'role' ? [{ model: Role, as: 'role' }] : undefined
      });
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  // Update user
  static async update(req: Request, res: Response) {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      await user.update(req.body);
      res.json(user);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  // Delete user
  static async delete(req: Request, res: Response) {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      await user.destroy();
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}