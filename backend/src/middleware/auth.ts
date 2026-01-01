import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Extender la interfaz Request para incluir información del usuario
declare global {
  namespace Express {
    interface Request {
      user?: {
        id: number;
        email: string;
        roleId?: number;
        role?: string;
      };
    }
  }
}

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

// Middleware para verificar el token JWT
export const authenticateToken = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (!token) {
    res.status(401).json({ 
      error: 'Access token required',
      message: 'Se requiere un token de acceso para esta operación'
    });
    return;
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as any;
    
    // Agregar información del usuario al request
    req.user = {
      id: decoded.id,
      email: decoded.email,
      roleId: decoded.roleId,
      role: decoded.role
    };
    
    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      res.status(401).json({ 
        error: 'Token expired',
        message: 'El token ha expirado'
      });
      return;
    }
    
    if (error instanceof jwt.JsonWebTokenError) {
      res.status(403).json({ 
        error: 'Invalid token',
        message: 'Token inválido'
      });
      return;
    }

    res.status(403).json({ 
      error: 'Token verification failed',
      message: 'Error al verificar el token'
    });
  }
};

// Middleware opcional para verificar token (no falla si no hay token)
export const optionalAuth = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    // Si no hay token, continuar sin autenticación
    next();
    return;
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as any;
    
    req.user = {
      id: decoded.id,
      email: decoded.email,
      roleId: decoded.roleId,
      role: decoded.role
    };
  } catch (error) {
    // Ignorar errores en modo opcional
  }
  
  next();
};

// Función para generar token JWT
export const generateToken = (payload: { id: number; email: string; roleId?: number; role?: string }): string => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '24h' });
};