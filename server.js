var express = require('express')
  , logger = require('morgan')
  , bodyParser = require('body-parser');

//var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser());
app.use('/lib', express.static(__dirname + '/lib'));
app.use(express.static(__dirname + '/public'));


app.get('*', function(req, res) {
  res.render('public/index.html');
});

app.listen(app.get('port'));
console.log('Listening on port ' + app.get('port') + '...');
