const Sequelize = require('sequelize');

const connection = new Sequelize('quiz', 'root', 'Shopboyz1!', {
    host: 'localhost',
    port: '3306',
    dialect: 'mysql'
});

module.exports = connection;