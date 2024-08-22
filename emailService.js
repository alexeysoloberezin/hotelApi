const nodemailer = require('nodemailer');

// Создайте транспортное средство
const transporter = nodemailer.createTransport({
  service: 'gmail', // или используйте другой сервис
  auth: {
    user: 'leonidivanovweb@gmail.com',
    pass: '',
  },
});

// Функция для отправки письма
const sendEmail = async (to, subject, text) => {
  const mailOptions = {
    from: 'leonidivanovweb@gmail.com',
    to,
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
