var nodemailer = require('nodemailer');

module.exports = function mailerRoutes(app, express) {
  'use strict';

  var mailerRouter = express.Router();

  mailerRouter.post('/new-signup', function processNewEmail(req, res) {
    var transporter, mailOptions;

    if (!req.body.email) {
      console.log('No email given');

      res.json({
        success: false,
        message: 'No email provided.'
      });
    }

    transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
          user: process.env.EMAIL_ACCOUNT,
          pass: process.env.EMAIL_PASSWORD
      }
    });
    mailOptions = {
      from: 'Gerry Pass <rgpass@gmail.com>',
      to: process.env.EMAIL_RECIPIENTS,
      subject: 'New signup: ' + req.body.email,
      text: req.body.email,
      html: req.body.email
    };

    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);

        res.json({
          success: false,
          message: 'E-mail could not be sent.'
        });
      }
      else {
        console.log('Message sent: ' + info.response);

        res.json({
          success: true,
          message: 'Email sent to: ' + process.env.EMAIL_RECIPIENTS
        });
      }
    });
  });

  return mailerRouter;
}
