import { DataTypes, Model } from 'sequelize';
import sequelize from './index';

class SalesCommission extends Model {}

SalesCommission.init(
  {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.BIGINT },
    source_type: { type: DataTypes.STRING },
    source_id: { type: DataTypes.BIGINT },
    amount: { type: DataTypes.DECIMAL(10, 2) },
    period: { type: DataTypes.STRING },
    status: { type: DataTypes.STRING }
  },
  { sequelize, modelName: 'SalesCommission', tableName: 'sales_commissions', timestamps: true }
);

export default SalesCommission;
