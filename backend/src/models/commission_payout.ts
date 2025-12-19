import { DataTypes, Model } from 'sequelize';
import sequelize from './index';

class CommissionPayout extends Model {}

CommissionPayout.init(
  {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.BIGINT },
    period_start: { type: DataTypes.DATE },
    period_end: { type: DataTypes.DATE },
    total_amount: { type: DataTypes.DECIMAL(10, 2) },
    paid_at: { type: DataTypes.DATE },
    payment_reference: { type: DataTypes.STRING }
  },
  { sequelize, modelName: 'CommissionPayout', tableName: 'commission_payouts', timestamps: false }
);

export default CommissionPayout;
