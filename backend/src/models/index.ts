import { Sequelize } from 'sequelize';

const DATABASE_URL = process.env.DATABASE_URL || 'postgres://postgres:23124156@localhost:5432/gym';

const sequelize = new Sequelize(DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
  define: { underscored: true }
});

export default sequelize;
