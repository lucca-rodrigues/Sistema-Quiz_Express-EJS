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

app.get("/pergunta/:id",(req ,res) => {
    var id = req.params.id;
    Perguntas.findOne({
        where: {id: id}
    }).then(pergunta => {
        if(pergunta != undefined){
            Respostas.findAll({
                where: {perguntaId: pergunta.id},
                order:[['id','DESC']]
            }).then(respostas => {
                res.render("Detalhes", { pergunta,respostas });
            });
        }else{
            res.redirect("/");
        }
    });
})


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

app.post("/save-response", (req, res) =>{
    const resposta = req.body.resposta;
    const perguntaId = req.body.pergunta;

    Respostas.create({resposta, perguntaId})
        .then(() => {
            res.redirect(`/pergunta/${perguntaId}`);
        }
    );
});


app.listen(21006, () => console.log("App Started on port 8080 ✔"));