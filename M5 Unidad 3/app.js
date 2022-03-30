var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//------ Agregamos esta nueva linea ----------
require('dotenv').config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// -----Agregamos esta nueva linea para unir con la base de datos definida en la carpeta models y ademas aqui podemos realizar las consultas
var pool = require('./models/bd');

// 1)consulta SELECT : para mostrar todos los empleados
pool.query('select * from empleados').then(function(resultados){
  console.log(resultados);
});

// -------------------------------------------------------------------------
// 2) Cosulta INSERT : insertar un nuevo empleado
// var obj = {
//   nombre: 'Juan',
//   apellido: 'Lopez',
//   trabajo: 'Docente',
//   edad: 38,
//   salario: 15000,
//   mail: 'juanlopez@gmail.com'
// }
  
// pool.query('insert into empleados set ?', [obj]).then(function(resultados) {
//   console.log(resultados)
// });

// -------------------------------------------------------------------------
// 3) Consulta DELET : Consulta para eliminar un id en este caso el empleado 21
// var id = 21;
// pool.query('delete from empleados where id = ?', [id]).then(function(resultados) {
//     console.log(resultados);
//   });

// -------------------------------------------------------------------------
// 4) Consutla UPDATE: para actualizar los valores de la tabla en ese caso se modifico el nombre y el apellido del empleado con id 20
// var id= 20;
// var obj = {
//   nombre: 'Pablo',
//   apellido: 'Gomez',
// }
// pool.query('update empleados set ? where id=?', [obj,id]).then(function(resultados){
//   console.log(resultados);
// });

// -------------------------------------------------------------------------


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
