-- Create an admin user (email must be unique)
insert into users (email, name, role_id)
values ('admin@fitpro.local', 'Admin User', (select id from roles where name = 'admin'))
on conflict (email) do nothing;
