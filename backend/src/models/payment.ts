import { DataTypes, Model } from 'sequelize';
import sequelize from './index';

class Payment extends Model {
  public id!: number;
  public user_id!: number;
  public amount!: string;
}

Payment.init(
  {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.BIGINT },
    amount: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    provider: { type: DataTypes.STRING },
    status: { type: DataTypes.STRING },
    invoice_id: { type: DataTypes.BIGINT },
    payment_method: { type: DataTypes.STRING },
    provider_transaction_id: { type: DataTypes.STRING }
  },
  { sequelize, modelName: 'Payment', tableName: 'payments', timestamps: true }
);

export default Payment;
