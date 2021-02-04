# Sistema de Quiz

Oi tudo bem?
Eu sou um sistema de cadastro e resposta de perguntas!

O meu objetivo aqui é facilitar a interação de usuários da plataforma:
- Criar perguntas
- Listar perguntas
- Responder perguntas


Futuramente eu posso ter novas funcionalidades, mas atualmente eu só faço isso!


Mas vamos lá, vou te mostrar como funciona o meu passo a passo!

# Observação
Se você preferir pular as instruções de instalação e quiser acompanhar a minha versão beta online, fique a vontate para acessar aqui:
http://165.227.120.159/

# Instruções:

- Para me instalar na sua máquina basta fazer um
```sh
git clone git@github.com:lucca-rodrigues/Sistema-Quiz_Express-EJS.git quiz
```

Depois entrar na pasta do projeto com:
```sh
cd quiz
```

Agora que ja entrou na pasta, basta rodar
```sh
yarn install ou npm install
```

# Configuração do Banco
Você precisa criar uma conexão com um banco de dados local para funcionamento da aplicação.

Crie um banco mySql e informe as credenciais dentro de um arquivo .env desta forma:
```javascript
APP_HOST=localhost
APP_PORT=3333

DB_HOST=localhost
DB_PORT=3306
DB_CONNECTION=databaseType // mysql //postgres etc...
DB_USER=databaseUser
DB_PASSWORD=databasePassword
DB_DATABASE=databaseName
```

Depois que tiver instalado todas as dependências e o banco de dados criado e conectado basta rodar:
```sh
node index.js
```

logo uma página será aberta em seu navegador, se não abrir automaticamente você pode digital http://localhost:numerodaporta

Pronto agora eu ja estou te vendo! 🙂😉



# Tecnologias utilizadas
- NodeJS
- Express
- Nodemon
- Banco de dados mySql
- Sequelize
# Agradecimentos

Desde já eu agradeço a você por ter se interessado por mim, estou aqui para facilitar a sua vida, qualquer coisa não deixe de fazer contato:



### 📱 Social

Me acompanhe nas minhas redes sociais.

<p align="center">

   <a href="https://github.com/lucca-rodrigues" target="_blank" >
    <img alt="Github" src="https://img.shields.io/badge/Github--%23F8952D?style=social&logo=github"></a>

  <a href="https://www.instagram.com/_luccaoficial/" target="_blank" >
    <img alt="Instagram" src="https://img.shields.io/badge/Instagram--%23F8952D?style=social&logo=instagram"></a>

  <a href="https://www.facebook.com/luccarodriguesgtr" target="_blank" >
    <img alt="Facebook" src="https://img.shields.io/badge/Facebook--%23F8952D?style=social&logo=facebook"></a>

  <a href="https://www.linkedin.com/in/lucas-rodrigues-66a2b07a/" target="_blank" >
    <img alt="Linkedin" src="https://img.shields.io/badge/Linkedin--%23F8952D?style=social&logo=linkedin"></a>

  <a href="mailto:contato.luccarodrigues@gmail.com" target="_blank" >
    <img alt="Email" src="https://img.shields.io/badge/Email--%23F8952D?style=social&logo=gmail"></a>

  <a href="https://api.whatsapp.com/send?phone=554198938062" target="_blank" >
    <img alt="WhatsApp" src="https://img.shields.io/badge/Whatsapp--%23F8952D?style=social&logo=whatsapp"></a>
</p>

---

Feito com ❤️ by **Lucca Rodrigues** 🤙
