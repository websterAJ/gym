import { Request, Response } from 'express';
import { AuditLog } from '../models/all_models';

// CRUD operations for AuditLog model
export class AuditLogController {
  static async create(req: Request, res: Response) {
    try {
      const auditLog = await AuditLog.create(req.body);
      res.status(201).json(auditLog);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      const auditLogs = await AuditLog.findAll();
      res.json(auditLogs);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const auditLog = await AuditLog.findByPk(req.params.id);
      if (!auditLog) return res.status(404).json({ error: 'Audit log not found' });
      res.json(auditLog);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const auditLog = await AuditLog.findByPk(req.params.id);
      if (!auditLog) return res.status(404).json({ error: 'Audit log not found' });
      await auditLog.destroy();
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}