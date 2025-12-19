import { DataTypes, Model } from 'sequelize';
import sequelize from './index';

class Invoice extends Model {}

Invoice.init(
  {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    customer_id: { type: DataTypes.BIGINT },
    subscription_id: { type: DataTypes.BIGINT },
    total_amount: { type: DataTypes.DECIMAL(10, 2) },
    tax_amount: { type: DataTypes.DECIMAL(10, 2) },
    currency: { type: DataTypes.STRING },
    status: { type: DataTypes.STRING },
    issued_at: { type: DataTypes.DATE },
    due_date: { type: DataTypes.DATE },
    paid_at: { type: DataTypes.DATE },
    external_reference: { type: DataTypes.STRING }
  },
  { sequelize, modelName: 'Invoice', tableName: 'invoices', timestamps: true }
);

export default Invoice;
