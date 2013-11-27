var mongoose = require("mongoose");
var connection = require('./mongodb').connection;
var log = require('bunyan').createLogger({name: 'widgets'});
log.level('debug');

var WidgetSchema = new mongoose.Schema({
  // Index this field to support the anchored regex queries (only do this for new or small collection)
  name: {type: String, index: true}
  // Other fields etc
}, {collection: 'widgets'});

var Widget = connection.model("Widget", WidgetSchema);

// For demo purposes our widget names will be numbers
var createWidget = function() {
  return {name: Math.random() * 10000000};
};

var noop = function() {
};

module.exports = {
  regex: function(req, res, next) {
    var re = req.param('q') || '';
    var limit = parseInt(req.param('limit')) || 50;
    var query = {name: {$regex: '^' + re}};
    log.debug("Mongo Query", query);
    Widget.find(query, 'name', {limit: limit}, function(err, data) {
      if (err) {
        log.error(err);
        next(err);
      } else {
        if (data) {
          res.send(data);
        } else {
          log.info("Empty widget query");
          res.send(404, {});
        }
      }
    });
  },
  create: function(req, res, next) {
    var count = parseInt(req.param('count')) || 1000;
    res.send(201);
    for (var i = 0; i < count; i++) {
      Widget.create(createWidget(), noop);
    }
  },
  count: function(req, res, next) {
    Widget.count(function(err, count){
      if(err){
        log.error(err);
        next(err);
      } else {
        res.send({count: count});
      }
    })
  }
}
