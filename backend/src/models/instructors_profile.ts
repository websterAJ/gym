import { DataTypes, Model } from 'sequelize';
import sequelize from './index';

class InstructorsProfile extends Model {}

InstructorsProfile.init(
  {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.BIGINT },
    specialties: { type: DataTypes.TEXT },
    certification: { type: DataTypes.TEXT },
    commission_rate: { type: DataTypes.DECIMAL(5, 2) },
    bank_account_info: { type: DataTypes.TEXT },
    active: { type: DataTypes.BOOLEAN, defaultValue: true }
  },
  { sequelize, modelName: 'InstructorsProfile', tableName: 'instructors_profile', timestamps: true }
);

export default InstructorsProfile;
