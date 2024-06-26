const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/send', (req, res) => {
    const { name, email, subject, message } = req.body;

    console.log('Received data:', req.body); // Adicione este log

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'brackidlc@gmail.com', // seu email
            pass: 'Cl0r3t0deG4l10!#!'  // sua senha
        }
    });

    const mailOptions = {
        from: email,
        to: 'gfonseca3117@gmail.com', // email para onde você quer enviar
        subject: subject,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error); // Adicione este log
            return res.status(500).send(error.toString());
        }
        console.log('Email sent:', info.response); // Adicione este log
        res.status(200).send('Email sent: ' + info.response);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
