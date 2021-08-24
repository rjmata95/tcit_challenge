const Sequelize = require("sequelize");
require("dotenv").config();
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DIALECT } =
  process.env;
const URI = `${DB_DIALECT}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;
const db = new Sequelize(URI);

module.exports = db;
