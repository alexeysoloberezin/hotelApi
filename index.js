const express = require('express');
const bodyParser = require('body-parser');
const sendEmail = require('./emailService');

const app = express();
app.use(bodyParser.json());

app.get('/api', async (req, res) => {
  const { to, subject, text } = req.body;
  res.json({'GOOD': 'good'})
});

app.post('/api/send-email', async (req, res) => {
  const { to, subject, text } = req.body;
  try {
    await sendEmail(to, subject, text);
    res.status(200).send('Email sent');
  } catch (error) {
    res.status(500).send('Error sending email');
  }
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
