import sequelize from './index';
import Role from './role';
import Permission from './permission';
import RolePermission from './role_permission';
import User from './user';
import Branch from './branch';
import Plan from './plan';
import GymClass from './gym_class';
import ClassSession from './class_session';
import Booking from './booking';
import Payment from './payment';
import AuditLog from './audit_log';
import SystemConfiguration from './system_configuration';
import Customer from './customer';
import Lead from './lead';
import Opportunity from './opportunity';
import Contact from './contact';
import Interaction from './interaction';
import Subscription from './subscription';
import CustomerCredit from './customer_credit';
import Attendance from './attendance';
import InstructorsProfile from './instructors_profile';
import SalesCommission from './sales_commission';
import CommissionPayout from './commission_payout';
import CustomerAccount from './customer_account';
import Invoice from './invoice';

// Export all models
export {
  sequelize,
  Role,
  Permission,
  RolePermission,
  User,
  Branch,
  Plan,
  GymClass,
  ClassSession,
  Booking,
  Payment,
  AuditLog,
  SystemConfiguration,
  Customer,
  Lead,
  Opportunity,
  Contact,
  Interaction,
  Subscription,
  CustomerCredit,
  Attendance,
  InstructorsProfile,
  SalesCommission,
  CommissionPayout,
  CustomerAccount,
  Invoice
};

// Export models as an object for easy access
export const models = {
  Role,
  Permission,
  RolePermission,
  User,
  Branch,
  Plan,
  GymClass,
  ClassSession,
  Booking,
  Payment,
  AuditLog,
  SystemConfiguration,
  Customer,
  Lead,
  Opportunity,
  Contact,
  Interaction,
  Subscription,
  CustomerCredit,
  Attendance,
  InstructorsProfile,
  SalesCommission,
  CommissionPayout,
  CustomerAccount,
  Invoice
};

// Initialize all models and associations
export function initializeModels() {
  // All models are already initialized through their imports
  // Associations are set up in index_init.ts
  return models;
}

export default models;