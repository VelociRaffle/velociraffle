var express = require('express'),
  app       = express(),
  path      = require('path'),
  bodyParser = require('body-parser'),
  morgan    = require('morgan'),      // Easily log reqs
  favicon   = require('serve-favicon'),
  config    = require('./config'),
  mailerRoutes;

// Necessary for parsing the body of POST reqs
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Needed to easily log requests
app.use(morgan('dev'));
      
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // use either jade or ejs 
app.use(express.static(__dirname + '/client/public'));
app.use(favicon(path.join(__dirname, 'client', 'public', 'img', 'favicon.ico')));

app.get('/', function(req, res) {
  res.render('static_pages/home/home', {
    title: '',
    env: process.env.NODE_ENV
  });
});

app.get('/new-subscriber', function(req, res) {
  res.render('static_pages/new-subscriber', {
    title: 'New Subscriber',
    env: process.env.NODE_ENV
  });
});

app.get('/thank-you', function(req, res) {
  res.render('static_pages/thank-you', {
    title: 'Welcome',
    env: process.env.NODE_ENV
  });
});

app.get('/team', function(req, res) {
  res.render('static_pages/team/team', {
    title: '',
    env: process.env.NODE_ENV
  });
});

mailerRoutes = require('./app/mailers/mailer.routes.js')(app, express);
app.use('/email', mailerRoutes);


// CATCH-ALL ROUTE ----------------------
app.get('*', function (req, res) {
  res.render('index');
});

app.listen(config.port);
console.log('Server is running on: ' + config.port);
