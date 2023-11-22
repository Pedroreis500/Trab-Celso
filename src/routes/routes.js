// routes.js
const express = require('express');
const route = express.Router();
const path = require('path');
const fs = require('fs'); // Adicione esta linha para trabalhar com o sistema de arquivos
const emailController = require('../controllers/emailController');
const indexController = require('../controllers/indexController');

route.get('/', indexController.mostrarPaginaInicial);

route.post('/enviar-email', async (req, res) => {
  const { destinatario, assunto, conteudo } = req.body;

  // Lendo o conteúdo do arquivo 'documento.txt'
  const filePath = path.join(__dirname, 'documento.txt');
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  // Anexando o conteúdo do arquivo
  const attachments = [
    {
      filename: 'documento.txt',
      content: fileContent,
    },
  ];

  for (let i = 0; i < 5; i++) {
    await emailController.sendEmail(destinatario, assunto, conteudo, attachments);
  }
  res.send('Email enviado com sucesso!');
});

module.exports = route;
