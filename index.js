const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/connection");
const Perguntas = require("./Models/Perguntas");
const Respostas = require("./Models/Respostas");

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

app.get("/new", (req, res) =>{
    res.render("Form");
});

app.get("/", (req, res) => {
    Perguntas.findAll({ raw: true, order:[['createdAt', 'DESC']]})
    .then(perguntas => {
        res.render("Perguntas", {perguntas});
    })
});

app.get("/pergunta/:id", (req, res) => {
    const id = req.params.id;

    Perguntas.findOne({
        where: {id}
    })
    .then(pergunta => {
        if(pergunta != undefined) {
            const {id, titulo, descricao} = pergunta;
            res.render("Detalhes", { id, titulo, descricao });
        } 
        res.redirect("/");
    })
});

app.get("/succes", (req, res) =>{
    res.render("Success");
});

app.post("/save-quiz", (req, res) =>{
    const {titulo, descricao} = req.body;

    Perguntas.create({titulo, descricao})
        .then(() => {
            res.redirect("/succes");
        }
    );
});


app.listen(8080, () => console.log("App Started on port 8080 ✔"));