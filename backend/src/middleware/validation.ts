import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

// Middleware genérico para validación con Zod
export const validate = (schema: z.ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          error: 'Validation error',
          message: 'Datos inválidos',
          details: error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        });
        return;
      }

      res.status(400).json({
        error: 'Validation error',
        message: 'Error al validar los datos'
      });
    }
  };
};

// Schemas de validación para diferentes modelos
export const schemas = {
  // User schema
  user: z.object({
    email: z.string().email('Email inválido'),
    password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres'),
    name: z.string().optional(),
    roleId: z.number().optional()
  }),

  // Role schema
  role: z.object({
    name: z.string().min(1, 'El nombre del rol es requerido'),
    description: z.string().optional()
  }),

  // Customer schema
  customer: z.object({
    name: z.string().min(1, 'El nombre del cliente es requerido'),
    email: z.string().email('Email inválido'),
    user_id: z.number().optional(),
    phone: z.string().optional(),
    address: z.string().optional()
  }),

  // Branch schema
  branch: z.object({
    name: z.string().min(1, 'El nombre de la sucursal es requerido'),
    address: z.string().optional(),
    phone: z.string().optional()
  }),

  // Plan schema
  plan: z.object({
    name: z.string().min(1, 'El nombre del plan es requerido'),
    price: z.number().min(0, 'El precio debe ser mayor o igual a 0'),
    duration_months: z.number().min(1, 'La duración debe ser mayor a 0'),
    credits: z.number().min(0, 'Los créditos deben ser mayor o igual a 0')
  }),

  // GymClass schema
  gymClass: z.object({
    name: z.string().min(1, 'El nombre de la clase es requerido'),
    description: z.string().optional(),
    instructor_id: z.number().optional(),
    branch_id: z.number().optional(),
    schedule: z.string().datetime().optional(),
    capacity: z.number().min(1, 'La capacidad debe ser mayor a 0').optional()
  }),

  // Booking schema
  booking: z.object({
    class_session_id: z.number(),
    user_id: z.number(),
    status: z.enum(['pending', 'confirmed', 'cancelled', 'completed']).optional()
  }),

  // Payment schema
  payment: z.object({
    user_id: z.number(),
    amount: z.number().min(0, 'El monto debe ser mayor o igual a 0'),
    provider: z.string().min(1, 'El proveedor de pago es requerido'),
    status: z.enum(['pending', 'completed', 'failed', 'refunded']).optional(),
    invoice_id: z.number().optional(),
    payment_method: z.string().optional(),
    provider_transaction_id: z.string().optional()
  }),

  // Subscription schema
  subscription: z.object({
    customer_id: z.number(),
    plan_id: z.number(),
    branch_id: z.number(),
    start_date: z.string().datetime(),
    end_date: z.string().datetime(),
    status: z.enum(['active', 'expired', 'cancelled', 'suspended']).optional(),
    auto_renew: z.boolean().optional()
  }),

  // Permission schema
  permission: z.object({
    name: z.string().min(1, 'El nombre del permiso es requerido'),
    description: z.string().optional()
  })
};

// Validadores específicos
export const validateUser = validate(schemas.user);
export const validateRole = validate(schemas.role);
export const validateCustomer = validate(schemas.customer);
export const validateBranch = validate(schemas.branch);
export const validatePlan = validate(schemas.plan);
export const validateGymClass = validate(schemas.gymClass);
export const validateBooking = validate(schemas.booking);
export const validatePayment = validate(schemas.payment);
export const validateSubscription = validate(schemas.subscription);
export const validatePermission = validate(schemas.permission);