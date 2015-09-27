var express = require('express'),
  app       = express(),
  path      = require('path'),
  morgan    = require('morgan'),      // Easily log reqs
  config    = require('./config');

// Log reqs
app.use(morgan('dev'));
      
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // use either jade or ejs 
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('index');
});

// CATCH-ALL ROUTE ----------------------
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/app/index.html'))
});

app.listen(config.port);
console.log('Server is running on: ' + config.port);
