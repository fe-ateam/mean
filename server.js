var express = require('express')
  , logger = require('morgan')
  , bodyParser = require('body-parser');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(logger());
app.use(bodyParser());
app.use('/bower', express.static(__dirname + '/bower'));
app.use(express.static(__dirname + '/app'));


app.get('*', function(req, res) {
  res.render('index');
});

app.listen(app.get('port'));
console.log('Listening on port ' + app.get('port') + '...');
