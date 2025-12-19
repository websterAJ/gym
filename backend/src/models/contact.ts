import { DataTypes, Model } from 'sequelize';
import sequelize from './index';

class Contact extends Model {}

Contact.init(
  {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    customer_id: { type: DataTypes.BIGINT },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING },
    phone: { type: DataTypes.STRING },
    position: { type: DataTypes.STRING }
  },
  { sequelize, modelName: 'Contact', tableName: 'contacts', timestamps: true }
);

export default Contact;
