import { Request, Response } from 'express';
import { Customer } from '../models/all_models';

// CRUD operations for Customer model
export class CustomerController {
  // Create a new customer
  static async create(req: Request, res: Response) {
    try {
      const customer = await Customer.create(req.body);
      res.status(201).json(customer);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  // Get all customers
  static async getAll(req: Request, res: Response) {
    try {
      const customers = await Customer.findAll({
        include: req.query.include === 'subscriptions' ? ['subscriptions'] : 
                req.query.include === 'contacts' ? ['contacts'] :
                req.query.include === 'all' ? ['subscriptions', 'contacts', 'leads'] : undefined
      });
      res.json(customers);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  // Get customer by ID
  static async getById(req: Request, res: Response) {
    try {
      const customer = await Customer.findByPk(req.params.id, {
        include: req.query.include === 'subscriptions' ? ['subscriptions'] : 
                req.query.include === 'contacts' ? ['contacts'] :
                req.query.include === 'all' ? ['subscriptions', 'contacts', 'leads'] : undefined
      });
      if (!customer) {
        return res.status(404).json({ error: 'Customer not found' });
      }
      res.json(customer);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  // Update customer
  static async update(req: Request, res: Response) {
    try {
      const customer = await Customer.findByPk(req.params.id);
      if (!customer) {
        return res.status(404).json({ error: 'Customer not found' });
      }
      await customer.update(req.body);
      res.json(customer);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  // Delete customer
  static async delete(req: Request, res: Response) {
    try {
      const customer = await Customer.findByPk(req.params.id);
      if (!customer) {
        return res.status(404).json({ error: 'Customer not found' });
      }
      await customer.destroy();
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}