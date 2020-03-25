var knex = require('knex');// Update with your config settings.

module.exports = {

  development: {
    /*client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    }*/
    client: 'postgresql',
    version: '12.2',
    connection: {
      host : '127.0.0.1',
      database: 'BeTheHero',
      user:     'postgres',
      password: 'postgres'
    },
    migrations: {
      directory: './src/database/migrations'
    }
  },

  staging: {
    client: 'postgresql',
    version: '12.2',
    connection: {
      host : '127.0.0.1',
      database: 'BeTheHero',
      user:     'postgres',
      password: 'postgres'
    },
    migrations: {
      directory: './src/database/migrations'
    }
  },

  production: {
    client: 'postgresql',
    version: '12.2',
    connection: {
      host : '127.0.0.1',
      database: 'BeTheHero',
      user:     'postgres',
      password: 'postgres'
    },
    migrations: {
      directory: './src/database/migrations'
    }
  }

};
