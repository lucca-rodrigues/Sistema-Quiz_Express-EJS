const Sequelize = require('sequelize');

const USER =  secrets.USER;
const DATABASE =  secrets.DATABASE;
const PASSWORD =  secrets.PASSWORD;
const HOST =  secrets.HOST;
const DATABASE_TYPE =  secrets.DATABASE_TYPE;

const connection = new Sequelize(USER, DATABASE, PASSWORD, {
    host: HOST,
    dialect: DATABASE_TYPE,
});

module.exports = connection;