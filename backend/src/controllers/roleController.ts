import { Request, Response } from 'express';
import { Role } from '../models/all_models';

// CRUD operations for Role model
export class RoleController {
  // Create a new role
  static async create(req: Request, res: Response) {
    try {
      const role = await Role.create(req.body);
      res.status(201).json(role);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  // Get all roles
  static async getAll(req: Request, res: Response) {
    try {
      const roles = await Role.findAll({
        include: req.query.include === 'permissions' ? ['permissions'] : undefined
      });
      res.json(roles);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  // Get role by ID
  static async getById(req: Request, res: Response) {
    try {
      const role = await Role.findByPk(req.params.id, {
        include: req.query.include === 'permissions' ? ['permissions'] : undefined
      });
      if (!role) {
        return res.status(404).json({ error: 'Role not found' });
      }
      res.json(role);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  // Update role
  static async update(req: Request, res: Response) {
    try {
      const role = await Role.findByPk(req.params.id);
      if (!role) {
        return res.status(404).json({ error: 'Role not found' });
      }
      await role.update(req.body);
      res.json(role);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  // Delete role
  static async delete(req: Request, res: Response) {
    try {
      const role = await Role.findByPk(req.params.id);
      if (!role) {
        return res.status(404).json({ error: 'Role not found' });
      }
      await role.destroy();
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}