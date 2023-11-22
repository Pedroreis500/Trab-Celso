const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./src/routes/routes');

const app = express();
const port = 3000; 

// Configuração do body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('views', path.resolve(__dirname, 'src', 'views','pages'));
app.set('view engine', 'ejs');

// Configurar o middleware para servir arquivos estáticos
app.use('/assets', express.static(path.join(__dirname, 'src', 'views', 'assets')));


// Chamar as rotas
app.use('/', routes);


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});


