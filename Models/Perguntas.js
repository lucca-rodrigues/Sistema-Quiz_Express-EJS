const Sequelize = require("sequelize");
const connection = require("../database/connection");

const Perguntas = connection.define('perguntas', {
    titulo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Perguntas.sync({force: false}).then(() => {
    console.log('Tabela de perguntas criada com sucesso!');
});
