const pgp = require('pg-promise')();
// const { host, port, database, user, password} = require('../config.js');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const cn = {
  host: process.env.HOST,
  port: process.env.PORT,
  database: process.env.DATABASE,
  user: process.env.USER,
  password: process.env.PASSWORD
};

const db = pgp(cn);

module.exports = db;