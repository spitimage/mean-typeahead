var mongoose = require('mongoose');
var log = require('bunyan').createLogger({name: 'mongo'});

log.level('debug');

var conn = mongoose.connection;

conn.on("open", function (arg) {
  log.info("Opened mongodb connection");
});
conn.on("close", function (arg) {
  log.info("Closed mongodb connection");
  process.exit(1);
});
conn.on("error", function (arg) {
  log.error("Error event from mongo connection: ", arg);
  process.exit(1);
});


// TODO modify based on your configuration
mongoose.connect("mongodb://localhost/test");

exports.connection = conn;
