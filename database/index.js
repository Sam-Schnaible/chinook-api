const pgp = require('pg-promise')();
const { host, port, database, user, password} = require('../config.js');

const cn = {
  host: host,
  port: port,
  database: database,
  user: user,
  password: password
};

const db = pgp(cn);

module.exports = db;