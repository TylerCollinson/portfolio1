// const express = require('express');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // Email configuration
// const transporter = nodemailer.createTransport({
//     service: 'gmail', // Use your email service
//     auth: {
//         user: 'tylercollinson8@gmail.com', // Your email
//         pass: 'Tylerocks21@' // Your email password or app password
//     }
// });

// // Route to handle contact form submission
// app.post('/send-email', (req, res) => {
//     const { fullname, email, message } = req.body;

//     const mailOptions = {
//         from: email,
//         to: 'tylercollinson8@gmail.com', // Your email
//         subject: `New message from ${fullname}`,
//         text: `Name: ${fullname}\nEmail: ${email}\nMessage: ${message}`
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             return res.status(500).send(error.toString());
//         }
//         res.status(200).send('Email sent: ' + info.response);
//     });
// });

// // Start server
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });
