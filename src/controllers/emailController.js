// emailController.js
const nodemailer = require('nodemailer');
require('dotenv').config();

const sendEmail = async (to, subject, text, attachments) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: 'rtlexsuygmtpuqsh',
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
      attachments, // Adiciona a propriedade attachments ao objeto mailOptions
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email enviado:', info.messageId);
  } catch (error) {
    console.error('Erro ao enviar o email:', error);
  }
};

module.exports = {
  sendEmail,
};
