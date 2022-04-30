var express = require('express');
const { route } = require('express/lib/application');
const async = require('hbs/lib/async');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');
// imagenes
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

/* GET home page. */
router.get('/', async function(req, res, next) {

  var novedades = await novedadesModel.getNovedades();
 
  // -nuevo array para devolver la novedad con y sin la imagen imagen ------------
  novedades = novedades.map(novedad => {
    if (novedad.img_id){
      const imagen = cloudinary.image(novedad.img_id, {
        width:150,
        height:70,
        crop:'fill'
      });
      return{
        ...novedad,
        imagen
      }
    } else {
      return{
        ...novedad,
        imagen: ''
      }
    }
  });
//  ----------------------------
  res.render('admin/novedades', { 
    layout:'admin/layout',
    usuario: req.session.nombre,
    novedades
   });
});

// -------------- para agregar una novedad---------------
router.get('/agregar', (req,res,next) =>{
  res.render('admin/agregar', {
    layout: 'admin/layout'
  }) //cierra render
}); //cierra Get

router.post('/agregar', async (req,res,next) => {
  try{
    // codigo para agregar la imagen y guardarla en una variable
    var img_id = '';
    if (req.files && Object.keys(req.files).length > 0){
      imagen = req.files.imagen;
      img_id=(await uploader(imagen.tempFilePath)).public_id;
    }
    // codigo para agregar la info titulo, subtitulo y cuerpo 
    if (req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != "" ){
      await novedadesModel.insertNovedades({
        ...req.body,
        img_id
      });
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

//--------------- para eliminar una novedad ---------------------
router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;

  // eliminar una imagen
  let novedad = await novedadesModel.getNovedadById(id);
  if (novedad.img_id) {
    await (destroy(novedad.img_id));
  }
  //  eliminar el texto 
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
    // modificar una imagen
    let img_id =req.body.img_original;
    let borrar_img_vieja = false;
    if (req.body.img_delete === "1") {
      img_id = null;
      borrar_img_vieja = true;
    } else {
      if (req.files && Object.keys(req.files).length > 0) {
        imagen = req.files.imagen;
        img_id = (await uploader(imagen.tempFilePath)).public_id;
        borrar_img_vieja = true;
      }
    }
    if (borrar_img_vieja && req.body.img_original) {
      await (destroy(req.body.img_original));
    }

    // modificar texto
    let obj = {
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      cuerpo: req.body.cuerpo,
      img_id
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