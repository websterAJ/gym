import { Request, Response } from 'express';
import { Subscription } from '../models/all_models';

// CRUD operations for Subscription model
export class SubscriptionController {
  static async create(req: Request, res: Response) {
    try {
      const subscription = await Subscription.create(req.body);
      res.status(201).json(subscription);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      const subscriptions = await Subscription.findAll();
      res.json(subscriptions);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const subscription = await Subscription.findByPk(req.params.id);
      if (!subscription) return res.status(404).json({ error: 'Subscription not found' });
      res.json(subscription);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const subscription = await Subscription.findByPk(req.params.id);
      if (!subscription) return res.status(404).json({ error: 'Subscription not found' });
      await subscription.update(req.body);
      res.json(subscription);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const subscription = await Subscription.findByPk(req.params.id);
      if (!subscription) return res.status(404).json({ error: 'Subscription not found' });
      await subscription.destroy();
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}