var express = require('express');
var app = express();
var widgets = require('./widgets');
var log = require('bunyan').createLogger({name: 'widgets'});

// Log HTTP requests
app.use(express.logger());

// Serve up the front-side build
app.use(express.static('../dist'));

// Create our routes
app.get('/api/widgets', widgets.regex);

// Catch-all error handler
app.use(function (err, req, res, next) {
  log.error(err);
  res.send(500, 'Something broke!');
})

app.listen(3000);