import sequelize from '../models';
import './user';

async function sync() {
  try {
    await sequelize.authenticate();
    console.log('Database authenticated');
    await sequelize.sync({ alter: true });
    console.log('Database synchronized');
    process.exit(0);
  } catch (err) {
    console.error('Failed to sync database', err);
    process.exit(1);
  }
}

sync();
