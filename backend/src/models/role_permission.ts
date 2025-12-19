import { DataTypes, Model } from 'sequelize';
import sequelize from './index';

class RolePermission extends Model {
  public role_id!: number;
  public permission_id!: number;
}

RolePermission.init(
  {
    role_id: { type: DataTypes.BIGINT, primaryKey: true },
    permission_id: { type: DataTypes.BIGINT, primaryKey: true }
  },
  { sequelize, modelName: 'RolePermission', tableName: 'role_permissions', timestamps: false }
);

export default RolePermission;
