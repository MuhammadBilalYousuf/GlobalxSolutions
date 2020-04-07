const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const app = express()
const path = require('path')
const compression = require('compression')

app.use(compression());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/api/form', (req, res) => {
  nodemailer.createTestAccount((err, account) => {
      const htmlEmail = `
      <h3>Contact Details</h3>
      <ul>
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
     </ul>
     <h3>Message</h3>
     <p>${req.body.message}</p>
      `;
    // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: 'mail.globalxsolutions.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'info@globalxsolutions.com', // generated ethereal user
            pass: 'Global@123$'  // generated ethereal password
        },
        tls:{
            rejectUnauthorized:false
        }
    });
    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Zeroland" <info@globalxsolutions.com>', // sender address
        to: 'muhammadbilalyousuf0@gmail.com', // list of receivers
        subject: 'Zeroland Website Contact Request', // Subject line
        text: 'Hello world?', // plain text body
        html: htmlEmail // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        res.render('contact', {msg:'Email has been sent'});
    });
  })
})
app.post('/api/forms', (req, res) => {
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
        <h3>Contact Details</h3>
        <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
        <li>Company: ${req.body.company}</li>
        <li>Phone Number: ${req.body.phonenumber}</li>
       </ul>
       <h3>Message</h3>
       <p>${req.body.message}</p>
        `;
      // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
          host: 'mail.globalxsolutions.com',
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
              user: 'info@globalxsolutions.com', // generated ethereal user
              pass: 'Global@123$'  // generated ethereal password
          },
          tls:{
              rejectUnauthorized:false
          }
      });
      // setup email data with unicode symbols
      let mailOptions = {
          from: '"Zeroland" <info@globalxsolutions.com>', // sender address
          to: 'muhammadbilalyousuf0@gmail.com', // list of receivers
          subject: 'Zeroland Website Info Request', // Subject line
          text: 'Hello world?', // plain text body
          html: htmlEmail // html body
      };
  
      // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          }
          console.log('Message sent: %s', info.messageId);
          console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  
          res.render('contact', {msg:'Email has been sent'});
      });
    })
  })

  
// Serve static assets if in production
if(process.env.NODE_ENV === 'production'){
    // Set static folder
    // app.use(expressStaticGzip('client/build'));
    app.use(express.static('client/build', { maxAge: 2592000000 }));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server listen on Port ${PORT}`)
})