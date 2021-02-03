const Sequelize = require('sequelize');

const user =  process.env.APP_USER;
const database =  process.env.APP_DATABASE;
const password =  process.env.APP_PASSWORD;
// const database_type =  process.env.DATABASE_TYPE;
const host =  process.env.APP_HOST;
const port =  process.env.APP_PORT;

const connection = new Sequelize(user, database, password, {
    host: host,
    port: port,
    dialect: 'postgresql'
});

module.exports = connection;