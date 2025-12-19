import { DataTypes, Model } from 'sequelize';
import sequelize from './index';

class Interaction extends Model {}

Interaction.init(
  {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    contact_id: { type: DataTypes.BIGINT },
    type: { type: DataTypes.STRING, allowNull: false },
    notes: { type: DataTypes.TEXT },
    interaction_date: { type: DataTypes.DATE }
  },
  { sequelize, modelName: 'Interaction', tableName: 'interactions', timestamps: true }
);

export default Interaction;
