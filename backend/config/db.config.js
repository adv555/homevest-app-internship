const dotenv = require('dotenv');

dotenv.config();

const {
  DB_NAME,
  DB_USERNAME,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_TYPE
} = process.env;

const options = {
  name: 'default',
  type: DB_TYPE,
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  synchronize: false,
  logging: false,
  entities: [__dirname + '/../**/*.entity{.js,.ts}'],
  seed: [__dirname + '/**/seeding/{.js,.ts}'],
  factories: [__dirname + '/../**/*.factory{.js,.ts}']
};

export {options};