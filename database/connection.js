const Sequelize = require('sequelize');

const user =  process.env.USER;
const database =  process.env.DATABASE;
const password =  process.env.PASSWORD;
const database_type =  process.env.DATABASE_TYPE;
// const host =  process.env.HOST;

const connection = new Sequelize(user, database, password, {
    host: 'localhost',
    dialect: database_type
});

module.exports = connection;