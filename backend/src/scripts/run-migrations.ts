import fs from 'fs';
import path from 'path';
import sequelize from '../models';

async function run() {
  const migrationsDir = path.resolve(__dirname, '..', '..', 'migrations');
  const files = fs.readdirSync(migrationsDir).filter(f => f.endsWith('.sql')).sort();

  try {
    await sequelize.authenticate();
    console.log('DB authenticated');
    for (const file of files) {
      const full = path.join(migrationsDir, file);
      const sql = fs.readFileSync(full, 'utf8');
      console.log('Running migration', file);
      await sequelize.query(sql);
    }
    console.log('Migrations complete');
    process.exit(0);
  } catch (err) {
    console.error('Migration failed', err);
    process.exit(1);
  }
}

run();
