var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// ======== M4 U4-Ejercicio- Inicio : Programar una Ruta que varie el contenido de su respuesta en base a un parametro recibido ======== 

//1) nueva dependencia 'express-session' agregada
var session = require('express-session');

//3) comentamos las siguientes rutas:
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 2) app.use complemento de la nueva dependencia 'express-session' agregada es importante ponerla debajo de app.use (...,'public')
app.use(session ({
  secret:'diplomaturautnaño022',
  resave: false,
  saveUninitialized: true
}));


// 4) app.get cuando recibo el get mando un titulo nuevo y genero dos valores 'conocido' y lo que uno coloque como nombre que seria un input
app.get('/',function(req,res){
  var conocido = Boolean (req.session.nombre);

  res.render('index', {
    title:'Sesiones en Express.js',
    conocido: conocido,
    nombre: req.session.nombre
  });

});
// 5) app.post cuando recibo lo que va a estar en el formulario si tengo la información 'body.nombre', despues lo redirecciona
app.post('/ingresar', function (req,res){
  if(req.body.nombre) {
    req.session.nombre = req.body.nombre
  }
  res.redirect('/');
});
// 6) voy al archivo index.hbs

// 7) app.get Agrego el '/salir' (recive la session, la destruye y vuelve a hacer un redireccionamiento)
app.get('/salir', function (req,res){
  req.session.destroy();
  res.redirect('/');
});


// comentamos las extenciones de las  rutas:
// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// ======== M4 U4-Ejercicio-Fin: Programar una Ruta que varie el contenido de su respuesta en base a un parametro recibido ======== 

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
