const Sequelize = require('sequelize');

const user =  process.env.DB_USER;
const database =  process.env.DB_DATABASE;
const password =  process.env.DB_PASSWORD;

const host =  process.env.DB_HOST;
const port =  process.env.DB_PORT;
const database_type =  process.env.DB_CONNECTION;

const connection = new Sequelize(database, user, password, {
    host: host,
    port: port,
    dialect: database_type
});

module.exports = connection;