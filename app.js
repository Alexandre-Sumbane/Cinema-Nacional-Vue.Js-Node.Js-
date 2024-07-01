const express = require("express");
const app = express();
const routes = require('./src/Routes/routes');
const bodyParser = require("body-parser");
const path = require('path');
const mensagem = require("./models");

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, 'public')));
app.set('views', path.resolve(__dirname, 'src', 'Views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(routes);

mensagem.findOne()
  .then(mensagem => {
    if (mensagem) {
      console.log('Mensagem encontrada:', mensagem.mensagem);
    } else {
      console.log('Nenhuma mensagem encontrada.');
    }
  })
  .catch(err => {
    console.error('Erro ao buscar mensagem:', err);
  });


app.listen(3000,(req, res)=>{
    console.log(`Servidor rodando na porta: http://localhost:3000`);
});