var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Aqui se definen las rutas: index, users y ruta3
var indexRouter = require('./routes/index'); // ruta-index.js
var usersRouter = require('./routes/users'); // ruta- user.js
var nosotrosRouter = require('./routes/nosotros');// ruta-nosotros.js

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Cuando resiva lo que esta escrito entre los estims '' utiliza lo definido anteriormente 
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/nosotros', nosotrosRouter);

//  ----------------------------- Tarea "Rutas" - Modulo 4 Unidad 3 -------------------------------- 

// RUTA 1: al ingresar "http://localhost:3000/ruta1" en el navegador devuelve el mensaje : Hola soy una pagina de prueba-enlazada a la Ruta 1
app.get('/ruta1', function (req, res) {
  res.send('Hola soy una pagina de prueba-enlazada a la Ruta 1')
});

// RUTA 2: al ingresar "http://localhost:3000/ruta2" en el navegador devuelve el mensaje : Hola soy una pagina de prueba-enlazada a la Ruta 2 
app.get('/ruta2', function (req, res) {
  res.send('Hola soy una pagina de prueba-enlazada a la Ruta 2')
});

// RUTA 3: consiste en realizar una mini navegacion usando:
// var nosotrosRouter = require('./routes/nosotros');
// app.use('/nosotros', nosotrosRouter);

//  -------------------------------------------------------------------------------------------------------
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
