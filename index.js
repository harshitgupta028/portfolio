require('dotenv').config();;

const express = require('express');
const app = express();
const nodemailer = require('nodemailer')

const PORT = process.env.PORT || 8000;


app.use(express.static('public'));
app.use(express.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

app.post('/', (req, res) => {
    console.log(req.body);

    const transponder = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: process.env.AUTH_EMAIL,
            pass: process.env.AUTH_PASSWORD
        }
    })

    const mailOptions = {
        from: req.body.data.email,
        to: process.env.TO_EMAIL,
        subject: "Portfolio - " + req.body.data.subject,
        text: req.body.data.message + "\nender details:-" + "Email: req.body.data.email",
        html: `<div>
                <p>${req.body.data.message}</p>
                <p style='font-size:16px; font-weight: bold; margin: 7px 0;'>Sender details:-</p>
                <p style='margin: 5px 0;'>Name:- ${req.body.data.name}</p>
                <p style='margin: 5px 0;'>Email:- ${req.body.data.email}</p>
            </div>`
        

               
    }

    transponder.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('error');
        } else {
            console.log('Email sent:' + info.response);

            const emailStatus = {
                emailStatus: 'success'
            }

            res.send(emailStatus);
        }
    })
})

app.listen(PORT, () => {
    console.log("server is running on "+ PORT);
})