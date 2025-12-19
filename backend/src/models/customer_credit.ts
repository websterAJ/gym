import { DataTypes, Model } from 'sequelize';
import sequelize from './index';

class CustomerCredit extends Model {}

CustomerCredit.init(
  {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    customer_id: { type: DataTypes.BIGINT },
    subscription_id: { type: DataTypes.BIGINT },
    total_credits: { type: DataTypes.INTEGER },
    used_credits: { type: DataTypes.INTEGER, defaultValue: 0 },
    expires_at: { type: DataTypes.DATE }
  },
  { sequelize, modelName: 'CustomerCredit', tableName: 'customer_credits', timestamps: false }
);

export default CustomerCredit;
