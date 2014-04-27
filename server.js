var express = require('express')
  , logger = require('morgan')
  , bodyParser = require('body-parser')
  , methodOverride = require('method-override')
  , errorHandler = require('errorhandler');

var app = express();

app.set('port', process.env.PORT || 3000);
app.use('/lib', express.static(__dirname + '/lib'));
app.use(express.static(__dirname + '/public'));
app.use(logger('dev'));
app.use(bodyParser());
app.use(methodOverride());
app.use(errorHandler({ dumpExceptions: true, showStack: true }));

app.get('/test', function(req, res) {
  res.send('This is a test');
});

app.listen(app.get('port'));
console.log('Listening on port ' + app.get('port') + '...');
