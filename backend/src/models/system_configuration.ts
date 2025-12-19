import { DataTypes, Model } from 'sequelize';
import sequelize from './index';

class SystemConfiguration extends Model {
  public id!: number;
  public key!: string;
  public value!: string;
  public description?: string;
}

SystemConfiguration.init(
  {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    key: { type: DataTypes.STRING, allowNull: false, unique: true },
    value: { type: DataTypes.TEXT, allowNull: false },
    description: { type: DataTypes.TEXT }
  },
  { sequelize, modelName: 'SystemConfiguration', tableName: 'system_configurations', timestamps: true }
);

export default SystemConfiguration;
