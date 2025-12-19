import { DataTypes, Model } from 'sequelize';
import sequelize from './index';

class Permission extends Model {
  public id!: number;
  public name!: string;
  public description?: string;
}

Permission.init(
  {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false, unique: true },
    description: { type: DataTypes.TEXT }
  },
  { sequelize, modelName: 'Permission', tableName: 'permissions', timestamps: false }
);

export default Permission;
