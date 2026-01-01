import fs from 'fs';
import path from 'path';
import sequelize from '../models';

async function run() {
  const seedsDir = path.resolve(__dirname, '..', '..', 'src','seeders');
  const files = fs.readdirSync(seedsDir).filter(f => f.endsWith('.sql')).sort();

  try {
    await sequelize.authenticate();
    console.log('DB authenticated');
    for (const file of files) {
      const full = path.join(seedsDir, file);
      const sql = fs.readFileSync(full, 'utf8');
      console.log('Running seed', file);
      await sequelize.query(sql);
    }
    console.log('Seeding complete');
    process.exit(0);
  } catch (err) {
    console.error('Seeding failed', err);
    process.exit(1);
  }
}

run();
