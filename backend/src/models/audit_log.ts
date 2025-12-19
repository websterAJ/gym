import { DataTypes, Model } from 'sequelize';
import sequelize from './index';

class AuditLog extends Model {
  public id!: number;
  public user_id?: number;
  public action!: string;
  public details?: string;
}

AuditLog.init(
  {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.BIGINT },
    action: { type: DataTypes.TEXT, allowNull: false },
    timestamp: { type: DataTypes.DATE, field: 'timestamp', defaultValue: DataTypes.NOW },
    details: { type: DataTypes.TEXT }
  },
  { sequelize, modelName: 'AuditLog', tableName: 'audit_logs', timestamps: false }
);

export default AuditLog;
