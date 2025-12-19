-- Seed default roles and permissions
insert into roles (name, description) values
('admin', 'Administrator with full access'),
('manager', 'Branch manager'),
('instructor', 'Class instructor'),
('reception', 'Front desk / receptionist');

insert into permissions (name, description) values
('manage_users', 'Create / edit / delete users'),
('manage_classes', 'Create / edit classes'),
('view_reports', 'View business reports');

-- map admin to all permissions
insert into role_permissions (role_id, permission_id)
select r.id, p.id from roles r cross join permissions p where r.name = 'admin';
