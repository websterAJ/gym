import { Router } from 'express';
import { User, Role } from '../models/all_models';
import { authenticateToken, generateToken } from '../middleware/auth';
import { validateUser } from '../middleware/validation';
import { auditSecurityAction } from '../middleware/audit';
import bcrypt from 'bcryptjs';

const router = Router();
const SALT_ROUNDS = 10;

// Login endpoint
router.post('/login', auditSecurityAction, async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        error: 'Missing credentials',
        message: 'Se requieren email y contraseña'
      });
    }

    // Buscar usuario con su rol
    const user = await User.findOne({
      where: { email },
      include: [{ model: Role, as: 'role' }]
    });

    if (!user) {
      return res.status(401).json({
        error: 'Invalid credentials',
        message: 'Email o contraseña incorrectos'
      });
    }

    // Comparar contraseña
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        error: 'Invalid credentials',
        message: 'Email o contraseña incorrectos'
      });
    }

    // Generar token
    const userRole = (user as any).role;
    const token = generateToken({
      id: user.id,
      email: user.email,
      roleId: user.role_id,
      role: userRole?.name
    });

    res.json({
      message: 'Login exitoso',
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: (user as any).role
      }
    });
  } catch (error: any) {
    res.status(500).json({
      error: 'Login failed',
      message: 'Error al iniciar sesión',
      details: error.message
    });
  }
});

// Register endpoint
router.post('/register', validateUser, auditSecurityAction, async (req, res) => {
  try {
    const { email, password, name, roleId } = req.body;

    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
      return res.status(409).json({
        error: 'User already exists',
        message: 'El usuario ya está registrado'
      });
    }

    // Hash de la contraseña
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    // Crear usuario
    const user = await User.create({
      email,
      password: hashedPassword,
      name,
      role_id: roleId
    });

    // Generar token
    const token = generateToken({
      id: user.id,
      email: user.email,
      roleId: user.role_id
    });

    res.status(201).json({
      message: 'Usuario creado exitosamente',
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role_id: user.role_id
      }
    });
  } catch (error: any) {
    res.status(500).json({
      error: 'Registration failed',
      message: 'Error al crear el usuario',
      details: error.message
    });
  }
});

// Verify token endpoint
router.get('/verify', authenticateToken, async (req, res) => {
  try {
    const user = await User.findByPk(req.user?.id, {
      include: [{ model: Role, as: 'role' }],
      attributes: { exclude: ['password'] }
    });

    if (!user) {
      return res.status(404).json({
        error: 'User not found',
        message: 'Usuario no encontrado'
      });
    }

    res.json({
      valid: true,
      user
    });
  } catch (error: any) {
    res.status(500).json({
      error: 'Token verification failed',
      message: 'Error al verificar el token',
      details: error.message
    });
  }
});

// Refresh token endpoint
router.post('/refresh', authenticateToken, async (req, res) => {
  try {
    const user = await User.findByPk(req.user?.id, {
      include: [{ model: Role, as: 'role' }]
    });

    if (!user) {
      return res.status(404).json({
        error: 'User not found',
        message: 'Usuario no encontrado'
      });
    }

    // Generar nuevo token
    const userRole = (user as any).role;
    const token = generateToken({
      id: user.id,
      email: user.email,
      roleId: user.role_id,
      role: userRole?.name
    });

    res.json({
      message: 'Token renovado exitosamente',
      token
    });
  } catch (error: any) {
    res.status(500).json({
      error: 'Token refresh failed',
      message: 'Error al renovar el token',
      details: error.message
    });
  }
});

// Change password endpoint
router.post('/change-password', authenticateToken, auditSecurityAction, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({
        error: 'Missing passwords',
        message: 'Se requieren la contraseña actual y la nueva'
      });
    }

    const user = await User.findByPk(req.user?.id);

    if (!user) {
      return res.status(404).json({
        error: 'User not found',
        message: 'Usuario no encontrado'
      });
    }

    // Verificar contraseña actual
    const isCurrentPasswordValid = await bcrypt.compare(currentPassword, user.password);

    if (!isCurrentPasswordValid) {
      return res.status(401).json({
        error: 'Invalid current password',
        message: 'La contraseña actual es incorrecta'
      });
    }

    // Hash de la nueva contraseña
    const hashedNewPassword = await bcrypt.hash(newPassword, SALT_ROUNDS);

    // Actualizar contraseña
    await user.update({ password: hashedNewPassword });

    res.json({
      message: 'Contraseña actualizada exitosamente'
    });
  } catch (error: any) {
    res.status(500).json({
      error: 'Password change failed',
      message: 'Error al cambiar la contraseña',
      details: error.message
    });
  }
});

export default router;