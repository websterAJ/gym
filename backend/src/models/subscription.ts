import { DataTypes, Model } from 'sequelize';
import sequelize from './index';

class Subscription extends Model {}

Subscription.init(
  {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    customer_id: { type: DataTypes.BIGINT },
    plan_id: { type: DataTypes.BIGINT },
    branch_id: { type: DataTypes.BIGINT },
    start_date: { type: DataTypes.DATE },
    end_date: { type: DataTypes.DATE },
    status: { type: DataTypes.STRING },
    auto_renew: { type: DataTypes.BOOLEAN, defaultValue: false }
  },
  { sequelize, modelName: 'Subscription', tableName: 'subscriptions', timestamps: true }
);

export default Subscription;
