-- Initial schema migration generated from provided SQL

create table roles (
  id bigint primary key generated always as identity,
  name text not null unique,
  description text
);

create table permissions (
  id bigint primary key generated always as identity,
  name text not null unique,
  description text
);

create table role_permissions (
  role_id bigint references roles (id),
  permission_id bigint references permissions (id),
  primary key (role_id, permission_id)
);

create table users (
  id bigint primary key generated always as identity,
  email text not null unique,
  name text,
  role_id bigint references roles (id),
  created_at timestamp with time zone default now()
);

create table branches (
  id bigint primary key generated always as identity,
  name text not null,
  address text,
  phone text,
  created_at timestamp with time zone default now()
);

create table plans (
  id bigint primary key generated always as identity,
  name text not null,
  price numeric(10, 2) not null,
  duration_months int,
  credits int default 0,
  created_at timestamp with time zone default now()
);

create table classes (
  id bigint primary key generated always as identity,
  name text not null,
  description text,
  instructor_id bigint references users (id),
  branch_id bigint references branches (id),
  schedule timestamp with time zone,
  capacity int default 0,
  created_at timestamp with time zone default now()
);

create table bookings (
  id bigint primary key generated always as identity,
  class_id bigint references classes (id),
  user_id bigint references users (id),
  status text default 'booked',
  created_at timestamp with time zone default now()
);

create table payments (
  id bigint primary key generated always as identity,
  user_id bigint references users (id),
  amount numeric(10, 2) not null,
  provider text,
  status text,
  created_at timestamp with time zone default now()
);

create table audit_logs (
  id bigint primary key generated always as identity,
  user_id bigint references users (id),
  action text not null,
  "timestamp" timestamp with time zone default now(),
  details text
);

create table system_configurations (
  id bigint primary key generated always as identity,
  key text not null unique,
  value text not null,
  description text,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

create table customers (
  id bigint primary key generated always as identity,
  name text not null,
  email text not null unique,
  phone text,
  address text,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

create table leads (
  id bigint primary key generated always as identity,
  customer_id bigint references customers (id),
  source text,
  status text not null default 'new',
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

create table opportunities (
  id bigint primary key generated always as identity,
  lead_id bigint references leads (id),
  value numeric(10, 2),
  stage text not null default 'prospecting',
  close_date timestamp with time zone,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

create table contacts (
  id bigint primary key generated always as identity,
  customer_id bigint references customers (id),
  name text not null,
  email text,
  phone text,
  "position" text,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

create table interactions (
  id bigint primary key generated always as identity,
  contact_id bigint references contacts (id),
  type text not null,
  notes text,
  interaction_date timestamp with time zone default now(),
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

alter table customers
add column user_id bigint references users (id);

create table subscriptions (
  id bigint primary key generated always as identity,
  customer_id bigint references customers (id),
  plan_id bigint references plans (id),
  branch_id bigint references branches (id),
  start_date timestamp with time zone,
  end_date timestamp with time zone,
  status text check (
    status in (
      'active',
      'canceled',
      'expired',
      'paused',
      'trial'
    )
  ),
  auto_renew boolean default false,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

create table customer_credits (
  id bigint primary key generated always as identity,
  customer_id bigint references customers (id),
  subscription_id bigint references subscriptions (id),
  total_credits int,
  used_credits int default 0,
  expires_at timestamp with time zone
);

create table class_sessions (
  id bigint primary key generated always as identity,
  class_id bigint references classes (id),
  branch_id bigint references branches (id),
  instructor_id bigint references users (id),
  start_at timestamp with time zone,
  end_at timestamp with time zone,
  capacity int,
  status text check (status in ('scheduled', 'completed', 'canceled')),
  created_at timestamp with time zone default now()
);

alter table bookings
add column class_session_id bigint references class_sessions (id);

alter table bookings
drop class_id;

create table attendance (
  id bigint primary key generated always as identity,
  customer_id bigint references customers (id),
  branch_id bigint references branches (id),
  class_session_id bigint references class_sessions (id),
  checkin_at timestamp with time zone default now(),
  checkout_at timestamp with time zone,
  method text,
  created_at timestamp with time zone default now()
);

alter table bookings
add column attended boolean default false;

alter table bookings
add column attended_at timestamp with time zone;

alter table bookings
add column canceled_at timestamp with time zone;

alter table bookings
add column canceled_by bigint references users (id);

alter table bookings
add column cancellation_reason text;

create table instructors_profile (
  id bigint primary key generated always as identity,
  user_id bigint references users (id),
  specialties text,
  certification text,
  commission_rate numeric(5, 2),
  bank_account_info text,
  active boolean default true,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

create table sales_commissions (
  id bigint primary key generated always as identity,
  user_id bigint references users (id),
  source_type text,
  source_id bigint,
  amount numeric(10, 2),
  period text,
  status text check (status in ('pending', 'approved', 'paid')),
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

create table commission_payouts (
  id bigint primary key generated always as identity,
  user_id bigint references users (id),
  period_start timestamp with time zone,
  period_end timestamp with time zone,
  total_amount numeric(10, 2),
  paid_at timestamp with time zone,
  payment_reference text
);

create table customer_accounts (
  id bigint primary key generated always as identity,
  customer_id bigint references customers (id),
  email text not null unique,
  password_hash text not null,
  last_login_at timestamp with time zone
);

create table invoices (
  id bigint primary key generated always as identity,
  customer_id bigint references customers (id),
  subscription_id bigint references subscriptions (id),
  total_amount numeric(10, 2),
  tax_amount numeric(10, 2),
  currency text,
  status text check (
    status in ('pending', 'paid', 'canceled', 'refunded')
  ),
  issued_at timestamp with time zone,
  due_date timestamp with time zone,
  paid_at timestamp with time zone,
  external_reference text,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

alter table payments
add column invoice_id bigint references invoices (id);

alter table payments
add column payment_method text;

alter table payments
add column provider_transaction_id text;
