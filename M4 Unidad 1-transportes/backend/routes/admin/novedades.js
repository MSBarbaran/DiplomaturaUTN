var express = require('express');
const { route } = require('express/lib/application');
const async = require('hbs/lib/async');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');

/* GET home page. */
router.get('/', async function(req, res, next) {

  var novedades = await novedadesModel.getNovedades();

  res.render('admin/novedades', { 
    layout:'admin/layout',
    usuario: req.session.nombre,
    novedades
   });
});

// --- para agregar una novedad---
router.get('/agregar', (req,res,next) =>{
  res.render('admin/agregar', {
    layout: 'admin/layout'
  }) //cierra render
}); //cierra Get

router.post('/agregar', async (req,res,next) => {
  try{
    if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "" ){
      await novedadesModel.insertNovedades(req.body);
      res.redirect('/admin/novedades')
    } else {
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true, message: 'Todos los campos son requeridos'
      })
    }
  } catch (error) {
    console.log(error)
    res.render('admin/agregar', {
      layout: 'admin/layout',
      error: true, message: 'No se cargo la novedad'
    });
  }
});
// si los 3 datos fueron completados (titulo, subtitulo y cuerpo) inserto una novedad y redireccion a la ruta admin/novedades
// si falta por completar algun campo aparece un error y el siguiente mensaje 'Todos los campos son requeridos'
// si no se conecta al servidor aparece el siguiente error y mensage 'No se cargo la novedad'

//--- para eliminar una novedad ---
router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;
  await novedadesModel.deleteNovedadesById(id);
  res.redirect('/admin/novedades')
}); //cierra el get para eliminar

//elimino por id, me conecto con novedades borro y me devuelve a la pagina asignada

//--- para modificar una novedad ---
//traer la  novedad por id para modidicar
router.get('/modificar/:id', async (req, res, next) => {

  let id = req.params.id;
  let novedad = await novedadesModel.getNovedadById(id);
  res.render('admin/modificar', {
    layout:'admin/layout',
    novedad
  });
});
//modificar update
router.post('/modificar', async (req, res, next) => {
  try{
    let obj = {
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      cuerpo: req.body.cuerpo
    }
    await novedadesModel.modificarNovedadById(obj, req.body.id);
    res.redirect('/admin/novedades');
   }
   catch (error) {
     console.log(error)
     res.render('admin/modificar', {
       layout: 'admin/layout',
       error: true, message: 'No se pudo modificar la novedad'
     })
   }
})

module.exports = router;