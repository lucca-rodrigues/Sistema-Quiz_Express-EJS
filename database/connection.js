const Sequelize = require('sequelize');

const user =  secrets.USER;
const database =  secrets.DATABASE;
const password =  secrets.PASSWORD;
const host =  secrets.HOST;
const database_type =  secrets.DATABASE_TYPE;

const connection = new Sequelize(user, database, password, {
    host: host,
    dialect: database_type,
});

module.exports = connection;