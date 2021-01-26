const Sequelize = require('sequelize');

const connection = new Sequelize('nameDatabase', 'nameUser', 'Password', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;