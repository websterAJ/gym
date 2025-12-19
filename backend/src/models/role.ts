import { DataTypes, Model } from 'sequelize';
import sequelize from './index';

class Role extends Model {
  public id!: number;
  public name!: string;
  public description?: string;
}

Role.init(
  {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false, unique: true },
    description: { type: DataTypes.TEXT }
  },
  { sequelize, modelName: 'Role', tableName: 'roles', timestamps: false }
);

export default Role;
