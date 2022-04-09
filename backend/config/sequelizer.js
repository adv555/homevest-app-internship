const dotenv = require('dotenv')
dotenv.config()
const { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT, DB_TYPE } = process.env
module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: Number(DB_HOST),
    port: DB_PORT,
    dialect: DB_TYPE,
    timestamps: false,
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: Number(DB_HOST),
    port: DB_PORT,
    dialect: DB_TYPE,
    dialectOptions: {
      bigNumberStrings: true,
    },
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: Number(DB_HOST),
    port: DB_PORT,
    dialect: DB_TYPE,
  },
}
