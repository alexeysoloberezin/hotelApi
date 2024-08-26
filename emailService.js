const nodemailer = require('nodemailer');
require('dotenv').config()

const mail = process.env.EMAIL
const mailPass = process.env.PASS
// Создайте транспортное средство
const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false,
  auth: {
    user: mail,
    pass: mailPass,
  },
});

// Функция для отправки письма
const sendEmail = async (subject, text) => {
  const mailOptions = {
    from: mail,
    to: mail,
    subject,
    text,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = sendEmail;
