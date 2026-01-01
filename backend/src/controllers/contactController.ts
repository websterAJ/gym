import { Request, Response } from 'express';
import { Contact } from '../models/all_models';

// CRUD operations for Contact model
export class ContactController {
  static async create(req: Request, res: Response) {
    try {
      const contact = await Contact.create(req.body);
      res.status(201).json(contact);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      const contacts = await Contact.findAll();
      res.json(contacts);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const contact = await Contact.findByPk(req.params.id);
      if (!contact) return res.status(404).json({ error: 'Contact not found' });
      res.json(contact);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const contact = await Contact.findByPk(req.params.id);
      if (!contact) return res.status(404).json({ error: 'Contact not found' });
      await contact.update(req.body);
      res.json(contact);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const contact = await Contact.findByPk(req.params.id);
      if (!contact) return res.status(404).json({ error: 'Contact not found' });
      await contact.destroy();
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}