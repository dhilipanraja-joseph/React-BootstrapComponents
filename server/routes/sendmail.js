const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
const pass = process.env.PASS;
const user = process.env.USER;

// const { user, pass } = require('../emailinfo.js');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user,pass }
});

router.route('/portfolio')
  .post((req,res)=> {
    // res.send("hello")
    let c= [], { name, email, message }= req.body;
    for (let key in req.body) {
      c.push(key+": "+ req.body[key]);
    }
    let html= c.map(e=>{
      return `<p>${e}</p>`
    }).join("");

    let mailOptions= {
        from: ' "info.dhilipanraja.com" ',
        to: 'dlipnraj@gmail.com',
        subject: 'Form Message <DhilipanrajaJoseph>',
        text: `Message From ${name}
               Email: ${email}`,
        html
    };

    transporter.sendMail(mailOptions, (err, info) => {
        res.status(err ? 400 : 200).send(err || 'Message %s sent: %s '+info.messageId+" "+info.response);
    });
  });

router.route('/')
  .post((req,res)=> {
    let c= [], { name, email }= req.body;
    for (let key in req.body) {
      c.push(key+": "+ req.body[key]);
    }
    let html= c.map(e=>{
      return `<p>${e}</p>`
    }).join("");

    let mailOptions= {
        from: ' "Website4U" ',
        to: 'abiyaruth@gmail.com, dlipnraj@gmail.com, wesite4you@gmail.com',
        subject: 'Form Message <Website4U>',
        text: `Message From ${name}
               Email: ${email}`,
        html
    };

    transporter.sendMail(mailOptions, (err, info) => {
        res.status(err ? 400 : 200).send(err || 'Message %s sent: %s '+info.messageId+" "+info.response);
    });

  });

module.exports = router;
