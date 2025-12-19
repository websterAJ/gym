import { DataTypes, Model } from 'sequelize';
import sequelize from './index';

class Plan extends Model {
  public id!: number;
  public name!: string;
  public price!: string;
}

Plan.init(
  {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    duration_months: { type: DataTypes.INTEGER },
    credits: { type: DataTypes.INTEGER, defaultValue: 0 }
  },
  { sequelize, modelName: 'Plan', tableName: 'plans', timestamps: true }
);

export default Plan;
