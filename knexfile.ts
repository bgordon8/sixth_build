import path from 'path';

const defaultOptions = {
  client: 'postgresql',
  connection: {
    database: 'sixth_build',
    host: 'localhost',
    port: 5432,
    user: '',
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: path.join(__dirname, 'src', 'db', 'migrations'),
  },
  seeds: {
    directory: path.join(__dirname, 'src', 'db', 'seeds'),
  },
};

export default {
  developement: config({
    connection: {
      database: 'sixth_build',
    },
  }),
  test: config({
    connection: {
      database: 'sixth_build_test',
    },
  }),
  production: {
    connection: {
      database: '',
    },
  },
} as { [key: string]: object };

function config(overrides: any) {
  return Object.assign({}, defaultOptions, overrides);
}
