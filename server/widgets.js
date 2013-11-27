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

module.exports = {
  regex: function(req, res, next) {
    var re = req.param('q') || '';
    var query = {name: {$regex: '^' + re}};
    log.debug("Mongo Query", query);
    Widget.find(query, 'name', function(err, data) {
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
  }
}
