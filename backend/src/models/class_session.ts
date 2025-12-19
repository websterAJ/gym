import { DataTypes, Model } from 'sequelize';
import sequelize from './index';

class ClassSession extends Model {
  public id!: number;
  public class_id!: number;
  public branch_id?: number;
  public instructor_id?: number;
}

ClassSession.init(
  {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    class_id: { type: DataTypes.BIGINT },
    branch_id: { type: DataTypes.BIGINT },
    instructor_id: { type: DataTypes.BIGINT },
    start_at: { type: DataTypes.DATE },
    end_at: { type: DataTypes.DATE },
    capacity: { type: DataTypes.INTEGER },
    status: { type: DataTypes.STRING }
  },
  { sequelize, modelName: 'ClassSession', tableName: 'class_sessions', timestamps: true }
);

export default ClassSession;
