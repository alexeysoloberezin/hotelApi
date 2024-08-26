const nodemailer = require('nodemailer');
require('dotenv').config()

const mail = process.env.EMAIL
const mailPass = process.env.PASS
// Создайте транспортное средство
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: mail,
    pass: mailPass,
  },
});

// Функция для отправки письма
const sendEmail = async (subject, text) => {
  const mailOptions = {
    from: mail,
    to: 'info@irishotelboston.com',
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
