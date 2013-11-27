var express = require('express');
var app = express();
var widgets = require('./widgets');
var log = require('bunyan').createLogger({name: 'widgets'});

// Log HTTP requests
app.use(express.logger());

// Serve up the front-side build
app.use(express.static('../dist'));

// Enable CORS to support running from the dev server (port 9000)
app.use(function (req, res, next) {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type');
  next();
})

// Part of CORS
app.options("*", function(req, res, next){
  res.send(200);
});



// Create our routes
app.get('/api/widgets', widgets.regex);

// Catch-all error handler
app.use(function (err, req, res, next) {
  log.error(err);
  res.send(500, 'Something broke!');
})

app.listen(3000);