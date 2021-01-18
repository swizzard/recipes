const { createDb, migrate } = require('postgres-migrations');

const dbName = process.env.POSTGRES_DB;
const dbPwd = process.env.POSTGRES_PASSWORD;
const dbUser = process.env.POSTGRES_USER;

const rootConfig = {
  user: 'postgres',
  host: 'db',
  port: 5432,
  password: dbPwd,
};

const dbConfig = { ...rootConfig, user: dbUser };

async function doMigration() {
  try {
    await createDb(dbName, { ...rootConfig, defaultDatabase: 'postgres' });
    await migrate(dbConfig, './migrations');
  } catch (err) {
    console.log(err);
  }
  process.exit();
}

doMigration();
