var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var mysql_dbc = require('./bin/db-con')();
var connection = mysql_dbc.init();
var index = require('./routes/index');
var users = require('./routes/users');
var first = require('./routes/first');
var add = require('./routes/add');
var alarms = require('./routes/alarms');
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));


// connection.connect();
// connection.query('select * from alarm',function(err,rows,fields){
// if(!err)
//   console.log(rows);
// else
//   console.log(err);
// });
// connection.end();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users/:userId', users);
app.use('/first', first);
app.use('/add', add);
app.use('/alarms', alarms);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;
