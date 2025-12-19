import { DataTypes, Model } from 'sequelize';
import sequelize from './index';

class Branch extends Model {
  public id!: number;
  public name!: string;
  public address?: string;
  public phone?: string;
}

Branch.init(
  {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    address: { type: DataTypes.TEXT },
    phone: { type: DataTypes.STRING }
  },
  { sequelize, modelName: 'Branch', tableName: 'branches', timestamps: true }
);

export default Branch;
