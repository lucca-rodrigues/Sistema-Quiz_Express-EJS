const Sequelize = require('sequelize');

const connection = new Sequelize('databaseName', 'userName', 'Password', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;