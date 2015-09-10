/**
 * Module dependencies.
 */

var express = require('express');
var bodyParser = require('body-parser');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var feedback = require('./server/feedback');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
// all environments
app.set('port', process.env.PORT || 3001);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}


app.get('/', routes.index);
app.get('/users', user.list);
app.post('/feedback', feedback.save);

http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});