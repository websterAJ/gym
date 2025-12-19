import { DataTypes, Model } from 'sequelize';
import sequelize from './index';

class Booking extends Model {
  public id!: number;
  public class_session_id?: number;
  public user_id?: number;
  public status?: string;
}

Booking.init(
  {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    class_session_id: { type: DataTypes.BIGINT },
    user_id: { type: DataTypes.BIGINT },
    status: { type: DataTypes.STRING, defaultValue: 'booked' },
    attended: { type: DataTypes.BOOLEAN, defaultValue: false },
    attended_at: { type: DataTypes.DATE },
    canceled_at: { type: DataTypes.DATE },
    canceled_by: { type: DataTypes.BIGINT },
    cancellation_reason: { type: DataTypes.TEXT }
  },
  { sequelize, modelName: 'Booking', tableName: 'bookings', timestamps: true }
);

export default Booking;
