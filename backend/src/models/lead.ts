import { DataTypes, Model } from 'sequelize';
import sequelize from './index';

class Lead extends Model {}

Lead.init(
  {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    customer_id: { type: DataTypes.BIGINT },
    source: { type: DataTypes.STRING },
    status: { type: DataTypes.STRING, defaultValue: 'new' }
  },
  { sequelize, modelName: 'Lead', tableName: 'leads', timestamps: true }
);

export default Lead;
