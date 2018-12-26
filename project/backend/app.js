var express = require('express');
var path = require('path');
//var favicon = require('serve-favicon');
//var cookieParser = require('cookie-parser');

var logger = require('morgan');
var bodyParser = require('body-parser');

//引入路由
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var classRouter = require('./routes/class');
var scoreRouter = require('./routes/score');
var shequRouter = require('./routes/shequ');
var shoucangRouter = require('./routes/shoucang');
var tieziRouter = require('./routes/tiezi');
var zanRouter = require('./routes/zan');
var gxqmRouter = require('./routes/gxqm');
var heartRouter = require('./routes/heart');
var userRouter = require('./routes/user');
var backuserRouter = require('./routes/backuser');
var index1Router = require('./routes/index1');

var app = express();
// view engine setup 摒弃视图
// //app.set('views', path.join(__dirname, 'views'));
// //app.set('view engine', 'ejs');
//
// //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(express.json());
////app.use(express.urlencoded({ extended: false  }));
////app.use(cookieParser());
//
app.use(express.static(path.join(__dirname, 'public')));
//配置路由对应路径
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login',loginRouter);
app.use('/class',classRouter);
app.use('/score',scoreRouter);
app.use('/shequ',shequRouter);
app.use('/shoucang',shoucangRouter);
app.use('/tiezi',tieziRouter);
app.use('/zan',zanRouter);
app.use('/gxqm',gxqmRouter);
app.use('/heart',heartRouter);
app.use('/user',userRouter);
app.use('/backuser',backuserRouter);
app.use('/index1',index1Router);
// catch 404 and forward to error handler

app.use(function(req, res, next) {
    var err = new Error('NotFound');
      err.status = 404;
        next(err);

});

// error handler
app.use(function(err, req, res/*, next*/) {

// set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

      // render the error page
      res.status(err.status || 500);
      res.render('error');
     
})

module.exports = app;

