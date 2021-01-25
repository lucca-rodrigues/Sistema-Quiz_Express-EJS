const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/connection");
const Perguntas = require("./Models/Perguntas");

connection.authenticate()
    .then(() => {
        console.log("Conectado ao banco!");
    })
    .catch((error) => {
        console.log(error);
    });

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", (req, res) =>{
    res.render("Form");
});

app.post("/save-quiz", (req, res) =>{
    const {titulo, descricao} = req.body;
    res.send(`Dados enviados com sucesso! ${titulo}, ${descricao}`);
});


app.listen(8080, () => console.log("App Started on port 8080 ✔"))