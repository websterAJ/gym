import { DataTypes, Model } from 'sequelize';
import sequelize from './index';

class GymClass extends Model {
  public id!: number;
  public name!: string;
  public description?: string;
  public instructor_id?: number;
  public branch_id?: number;
}

GymClass.init(
  {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    instructor_id: { type: DataTypes.BIGINT },
    branch_id: { type: DataTypes.BIGINT },
    schedule: { type: DataTypes.DATE },
    capacity: { type: DataTypes.INTEGER, defaultValue: 0 }
  },
  { sequelize, modelName: 'GymClass', tableName: 'classes', timestamps: true }
);

export default GymClass;
