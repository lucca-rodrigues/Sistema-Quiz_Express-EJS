const Sequelize = require('sequelize');

const connection = new Sequelize('quiz', 'root', 'Shopboyz1!', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;