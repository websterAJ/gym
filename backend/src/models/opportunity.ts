import { DataTypes, Model } from 'sequelize';
import sequelize from './index';

class Opportunity extends Model {}

Opportunity.init(
  {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    lead_id: { type: DataTypes.BIGINT },
    value: { type: DataTypes.DECIMAL(10, 2) },
    stage: { type: DataTypes.STRING, defaultValue: 'prospecting' },
    close_date: { type: DataTypes.DATE }
  },
  { sequelize, modelName: 'Opportunity', tableName: 'opportunities', timestamps: true }
);

export default Opportunity;
