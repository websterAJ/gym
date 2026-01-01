import { Request, Response } from 'express';
import { Attendance } from '../models/all_models';

// CRUD operations for Attendance model
export class AttendanceController {
  static async create(req: Request, res: Response) {
    try {
      const attendance = await Attendance.create(req.body);
      res.status(201).json(attendance);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getAll(req: Request, res: Response) {
    try {
      const attendances = await Attendance.findAll();
      res.json(attendances);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      const attendance = await Attendance.findByPk(req.params.id);
      if (!attendance) return res.status(404).json({ error: 'Attendance not found' });
      res.json(attendance);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const attendance = await Attendance.findByPk(req.params.id);
      if (!attendance) return res.status(404).json({ error: 'Attendance not found' });
      await attendance.update(req.body);
      res.json(attendance);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const attendance = await Attendance.findByPk(req.params.id);
      if (!attendance) return res.status(404).json({ error: 'Attendance not found' });
      await attendance.destroy();
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}