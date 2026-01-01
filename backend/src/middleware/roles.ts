import { Request, Response, NextFunction } from 'express';
import { Role, Permission } from '../models/all_models';

// Middleware para verificar si el usuario tiene un rol específico
export const requireRole = (roleName: string) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    if (!req.user) {
      res.status(401).json({ 
        error: 'Authentication required',
        message: 'Se requiere autenticación para esta operación'
      });
      return;
    }

    try {
      // Obtener el rol del usuario
      const userRole = await Role.findByPk(req.user.roleId);
      
      if (!userRole) {
        res.status(403).json({ 
          error: 'Invalid role',
          message: 'El usuario no tiene un rol válido'
        });
        return;
      }

      if (userRole.name !== roleName) {
        res.status(403).json({ 
          error: 'Insufficient permissions',
          message: `Se requiere el rol de ${roleName} para esta operación`
        });
        return;
      }

      next();
    } catch (error) {
      res.status(500).json({ 
        error: 'Role verification failed',
        message: 'Error al verificar el rol del usuario'
      });
    }
  };
};

// Middleware para verificar si el usuario tiene un permiso específico
export const requirePermission = (permissionName: string) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    if (!req.user) {
      res.status(401).json({ 
        error: 'Authentication required',
        message: 'Se requiere autenticación para esta operación'
      });
      return;
    }

    try {
      // Obtener los permisos del rol del usuario usando una consulta directa
      const permissions = await Permission.findAll({
        include: [{
          model: Role,
          where: { id: req.user.roleId }
        }]
      });

      const hasPermission = permissions.some(permission => permission.name === permissionName);

      if (!hasPermission) {
        res.status(403).json({ 
          error: 'Insufficient permissions',
          message: `Se requiere el permiso "${permissionName}" para esta operación`
        });
        return;
      }

      next();
    } catch (error) {
      res.status(500).json({ 
        error: 'Permission verification failed',
        message: 'Error al verificar los permisos del usuario'
      });
    }
  };
};

// Middleware para verificar si el usuario es admin
export const requireAdmin = requireRole('admin');

// Middleware para verificar si el usuario puede gestionar usuarios
export const requireUserManagement = requirePermission('user_management');

// Middleware para verificar si el usuario puede gestionar clases
export const requireClassManagement = requirePermission('class_management');