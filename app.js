// The main application script, ties everything together.
 
var express = require('express')
  , mongoose = require('mongoose')
  , app = module.exports = express()
  , bodyParser = require('body-parser')
  , methodOverride = require('method-override')

  , env = process.env.NODE_ENV || 'development'
  , config = require('./config')[env]

// connect to Mongo when the app initializes
mongoose.connect(config.db);
 
app.use(bodyParser.json())
app.use(methodOverride('X-HTTP-Method-Override'))
 
// set up the RESTful API, handler methods are defined in api.js
var api = require('./controllers/api.js');
app.post('/thread', api.create);
app.get('/thread/:title.:format?', api.show);
app.get('/thread', api.list);
 
var server = app.listen(process.env.PORT || 3000, function() {
  console.log("Express server listening on port %d", server.address().port);
});
