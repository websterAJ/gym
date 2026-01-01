import { DataTypes, Model } from 'sequelize';
import sequelize from './index';

class Customer extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public user_id?: number;
  public phone?: string;
  public address?: string;
}

Customer.init(
  {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    user_id: { type: DataTypes.BIGINT, allowNull: true },
    phone: { type: DataTypes.STRING },
    address: { type: DataTypes.TEXT }
  },
  { sequelize, modelName: 'Customer', tableName: 'customers', timestamps: true }
);

export default Customer;
