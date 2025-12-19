import { DataTypes, Model } from 'sequelize';
import sequelize from './index';

class Attendance extends Model {}

Attendance.init(
  {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    customer_id: { type: DataTypes.BIGINT },
    branch_id: { type: DataTypes.BIGINT },
    class_session_id: { type: DataTypes.BIGINT },
    checkin_at: { type: DataTypes.DATE },
    checkout_at: { type: DataTypes.DATE },
    method: { type: DataTypes.STRING }
  },
  { sequelize, modelName: 'Attendance', tableName: 'attendance', timestamps: true }
);

export default Attendance;
