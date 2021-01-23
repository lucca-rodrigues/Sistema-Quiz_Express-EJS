const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/:nome/:idade', (req, res) => {
    const nome = req.params.nome;
    const idade = req.params.idade;

    const messageError = 'Ocorreu um erro!';
    const message = false;

    const produtos = [
        {nome: "Doritos", preco: 4.90},
        {nome: "Coca-cola", preco: 7.00},
        {nome: "Leite", preco: 3.50},
    ]

    res.render("index",{
        nome,
        idade, 
        message,
        messageError,
        produtos
    });
});


app.listen(8080, () => console.log("App Started on port 8080 ✔"))