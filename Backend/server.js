var nodemailer = require('nodemailer');
var xoauth2 = require('xoauth2');
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var cors = require('cors');
app.use(cors());


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        type: 'OAuth2',
        user: 'sarahgushef@gmail.com',
        clientId: '225056044406-qj6mdtmcu7f3u5fqrvc2asv6rkgg6b9o.apps.googleusercontent.com',
        clientSecret: 'TSsT9aS6dCl_tqa2A0FxjNSw',
        refreshToken: '1/TtIAKpBM8N9Bd992uJTOLlDDIMRsXJFsVjh9ARZbILg'
    }
})

// var mailOptions ={
//     from: 'yeyeye <yeyeye@hahaha.com>',
//     to: 'sarahgushef@gmail.com',
//     subject: 'Tes Ujian Mobile',
//     text: 'Halo genks!',
//     html: '<h1><i> Ini email yah gaes </i></h1>'
// }



// app.get('/', (req, res) => {
//     transporter.sendMail(mailOptions, (err, res2) => {
//         if(err){
//             console.log('Error gan!');
//         }
//         else{
//             console.log('Email sukses terkirim!')
//             res.send('Email sukses terkirim!')
//         }
//     })
// })


app.post('/kirim', (req, res) => {
    var kepada = req.body.kepada
    var subject = req.body.subject
    var isi = req.body.isi

    var mailOptions ={
        from: 'yeyeyey',
        to: `${kepada}`,
        subject: `${subject}`,
        text: `${isi}`
    }

    // Kalau Pakai text string, sukses ngirim email, tapi kalau pake req.body.something, ga bisa
    // var mailOptions ={
    //     from: 'yeyeye <yeyeye@hahaha.com>',
    //     to: 'sarahgushef@gmail.com',
    //     subject: 'Tes Ujian Mobile',
    //     text: 'Halo genks!'
    
    //     // to: req.body.kepada,
    //     // subject: req.body.subject,
    //     // text: req.body.isi,
    //     // html: '<h1><i> Ini email yah gaes </i></h1>'
    // }

    transporter.sendMail(mailOptions, (err, res2) => {
       
        if(err){
            console.log('Error gan!');
            res.send('gagal ngirim gan');
        }
        else{
            console.log('Email sukses terkirim!')
            res.send('Email sukses terkirim!')
        }
    })
})

app.listen(3210, () => {
    console.log('Run @ 3210')
})