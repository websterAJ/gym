import { Request, Response, NextFunction } from 'express';
import { AuditLog, User } from '../models/all_models';

// Middleware para registrar acciones en el log de auditoría
export const auditLog = (action: string) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    // Solo registrar si hay un usuario autenticado
    if (!req.user) {
      next();
      return;
    }

    // Guardar una referencia a la función res.json original
    const originalJson = res.json;
    const originalSend = res.send;

    let responseData: any;
    let statusCode: number;

    // Interceptar la respuesta
    res.json = function(data: any) {
      responseData = data;
      statusCode = res.statusCode;
      return originalJson.call(this, data);
    };

    res.send = function(data: any) {
      responseData = data;
      statusCode = res.statusCode;
      return originalSend.call(this, data);
    };

    // Ejecutar la siguiente función del middleware
    next();

    // Después de que la respuesta se haya enviado, registrar en el log
    res.on('finish', async () => {
      try {
        await AuditLog.create({
          userId: req.user?.id,
          action: action,
          timestamp: new Date(),
          details: {
            method: req.method,
            url: req.originalUrl,
            ip: req.ip,
            userAgent: req.get('User-Agent'),
            body: req.method !== 'GET' ? req.body : undefined,
            params: req.params,
            query: req.query,
            statusCode: statusCode || res.statusCode,
            response: statusCode >= 400 ? responseData : undefined // Solo guardar errores
          }
        });
      } catch (error) {
        console.error('Error al registrar en el log de auditoría:', error);
      }
    });
  };
};

// Middleware específico para auditoría de usuarios
export const auditUserAction = auditLog('USER_ACTION');

// Middleware específico para auditoría de seguridad
export const auditSecurityAction = auditLog('SECURITY_ACTION');

// Middleware específico para auditoría de datos
export const auditDataAction = auditLog('DATA_ACTION');

// Middleware específico para auditoría de configuración
export const auditConfigAction = auditLog('CONFIG_ACTION');