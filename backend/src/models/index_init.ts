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

export default function initAssociations() {
  // Roles <-> Permissions
  Role.belongsToMany(Permission, { through: RolePermission, foreignKey: 'role_id', otherKey: 'permission_id' });
  Permission.belongsToMany(Role, { through: RolePermission, foreignKey: 'permission_id', otherKey: 'role_id' });

  // Role -> Users
  Role.hasMany(User, { foreignKey: 'role_id' });
  User.belongsTo(Role, { foreignKey: 'role_id', as: 'role' });

  // Customer -> User
  Customer.belongsTo(User, { foreignKey: 'user_id' });
  User.hasMany(Customer, { foreignKey: 'user_id' });

  // Users (instructors) -> Classes
  User.hasMany(GymClass, { foreignKey: 'instructor_id' });
  GymClass.belongsTo(User, { foreignKey: 'instructor_id', as: 'instructor' });

  // Branch -> Classes
  Branch.hasMany(GymClass, { foreignKey: 'branch_id' });
  GymClass.belongsTo(Branch, { foreignKey: 'branch_id' });

  // ClassSessions associations
  GymClass.hasMany(ClassSession, { foreignKey: 'class_id' });
  ClassSession.belongsTo(GymClass, { foreignKey: 'class_id' });
  ClassSession.belongsTo(Branch, { foreignKey: 'branch_id' });
  ClassSession.belongsTo(User, { foreignKey: 'instructor_id', as: 'instructor' });

  // Bookings
  ClassSession.hasMany(Booking, { foreignKey: 'class_session_id' });
  Booking.belongsTo(ClassSession, { foreignKey: 'class_session_id' });
  User.hasMany(Booking, { foreignKey: 'user_id' });
  Booking.belongsTo(User, { foreignKey: 'user_id' });

  // Payments
  User.hasMany(Payment, { foreignKey: 'user_id' });
  Payment.belongsTo(User, { foreignKey: 'user_id' });
  Payment.belongsTo(Invoice, { foreignKey: 'invoice_id' });

  // Customers / CRM
  Customer.hasMany(Contact, { foreignKey: 'customer_id' });
  Contact.belongsTo(Customer, { foreignKey: 'customer_id' });
  Customer.hasMany(Lead, { foreignKey: 'customer_id' });
  Lead.belongsTo(Customer, { foreignKey: 'customer_id' });
  Lead.hasMany(Opportunity, { foreignKey: 'lead_id' });
  Opportunity.belongsTo(Lead, { foreignKey: 'lead_id' });
  Contact.hasMany(Interaction, { foreignKey: 'contact_id' });
  Interaction.belongsTo(Contact, { foreignKey: 'contact_id' });

  // Subscriptions
  Customer.hasMany(Subscription, { foreignKey: 'customer_id' });
  Subscription.belongsTo(Customer, { foreignKey: 'customer_id' });
  Plan.hasMany(Subscription, { foreignKey: 'plan_id' });
  Subscription.belongsTo(Plan, { foreignKey: 'plan_id' });
  Branch.hasMany(Subscription, { foreignKey: 'branch_id' });
  Subscription.belongsTo(Branch, { foreignKey: 'branch_id' });

  // Customer credits
  Customer.hasMany(CustomerCredit, { foreignKey: 'customer_id' });
  CustomerCredit.belongsTo(Customer, { foreignKey: 'customer_id' });

  // Instructors profile
  User.hasOne(InstructorsProfile, { foreignKey: 'user_id' });
  InstructorsProfile.belongsTo(User, { foreignKey: 'user_id' });

  // Sales commissions
  User.hasMany(SalesCommission, { foreignKey: 'user_id' });
  SalesCommission.belongsTo(User, { foreignKey: 'user_id' });

  // Commission payouts
  User.hasMany(CommissionPayout, { foreignKey: 'user_id' });
  CommissionPayout.belongsTo(User, { foreignKey: 'user_id' });

  // Customer accounts
  Customer.hasOne(CustomerAccount, { foreignKey: 'customer_id' });
  CustomerAccount.belongsTo(Customer, { foreignKey: 'customer_id' });

  // Invoices
  Customer.hasMany(Invoice, { foreignKey: 'customer_id' });
  Invoice.belongsTo(Customer, { foreignKey: 'customer_id' });
  Subscription.hasMany(Invoice, { foreignKey: 'subscription_id' });
  Invoice.belongsTo(Subscription, { foreignKey: 'subscription_id' });

  // Audit Logs
  User.hasMany(AuditLog, { foreignKey: 'user_id' });
  AuditLog.belongsTo(User, { foreignKey: 'user_id' });
}

// Run automatically when required
initAssociations();

export { initAssociations };
