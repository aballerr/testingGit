const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const cors = require('cors');
const email = require('./config/email');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');




function buildEmail(message) {
  let email = ``;
  email += `email: ${message.email} \n`;
  email += `name: ${message.name} \n`;
  email += `budget: ${message.budget} \n\n`;
  email  += message.additionalComments;
  
  return email;
}


function sendEmail(message) {
  const builtEmail = buildEmail(message);


  let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: email.email,
      pass: email.password
    }
  });
  
  let mailOptions = {
    from: email.email,
    to: email.email,
    subject: message.subject,
    text: builtEmail
  };
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}


app.use(express.static(path.join(__dirname, './frontend/build')));
app.use(cors());
app.use(bodyParser.json());


app.post('/email', (req, res) => {
  
  // sendEmail(req.body);
  res.send('received');
});



app.listen(port, () => {
  console.log(`Listening on ${port}`)
});



app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './frontend/index.html'));
});
