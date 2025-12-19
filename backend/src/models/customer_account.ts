import { DataTypes, Model } from 'sequelize';
import sequelize from './index';

class CustomerAccount extends Model {}

CustomerAccount.init(
  {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    customer_id: { type: DataTypes.BIGINT },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password_hash: { type: DataTypes.TEXT, allowNull: false },
    last_login_at: { type: DataTypes.DATE }
  },
  { sequelize, modelName: 'CustomerAccount', tableName: 'customer_accounts', timestamps: false }
);

export default CustomerAccount;
