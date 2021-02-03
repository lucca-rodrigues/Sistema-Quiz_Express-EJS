const Sequelize = require('sequelize');

const user =  process.env.USER;
const database =  process.env.DATABASE;
const password =  process.env.PASSWORD;
// const database_type =  process.env.DATABASE_TYPE;
const host =  process.env.HOST;
const port =  process.env.PORT;

const connection = new Sequelize(user, database, password, {
    host: host,
    port: port,
    dialect: 'pg'
});

module.exports = connection;