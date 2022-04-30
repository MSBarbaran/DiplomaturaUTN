var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// imagenes
var fileUpload = require('express-fileupload');
// cors para api
var cors = require('cors');

// Agregamos el siguiente requiere para enlazar el archivo .env: 
require('dotenv').config();
// Configuramos la variable de session
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// primera ruta loginRoute
var loginRouter = require('./routes/admin/login');
// segunda ruta novedades
var adminRouter = require('./routes/admin/novedades');
// const { cookie } = require('express/lib/response');
// const async = require('hbs/lib/async');
//  api
var apiRouter = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// complemento la variable de session
app.use(session({
  secret: '1234',
  cookie: { maxAge: null },
  resave: false,
  saveUninitialized: true
}))
// funcion de seguridad
secured = async (req, res, next) => {
  try {
    console.log(req.session.id_usuario);
    if (req.session.id_usuario){
      next();
    } else {
      res.redirect('/admin/login');
    }// cierre del else
  } catch (error) {
    console.log(error);
  } // cierre de catch error
} // cierre de secured

// complemeto imagenes
app.use(fileUpload({
  useTempFiles:true,
  tempFileDir: '/tmp/'
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
// complemento de la ruta login
app.use('/admin/login', loginRouter);
// complemento de la ruta novedades y secured
app.use('/admin/novedades',secured, adminRouter);
// complemento ruta api
app.use('/api', cors(), apiRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
