const Sequelize = require("sequelize");
const connection = require("../database/connection");

const Respostas = connection.define('respostas', {
    resposta:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    perguntaId:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

Respostas.sync({force: false}).then(() => {});

module.exports = Respostas;
