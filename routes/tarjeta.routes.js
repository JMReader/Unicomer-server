
const trjControl = require('../controllers/tarjeta.controller');
//creamos el manejador de rutas con express
const express = require('express');
const router = express.Router();
//definimos rutas 
// router.get('/:id', trjControl.Crear); //obtener datos de una sola tarjeta
 router.get('/user/:idUser', trjControl.getTodos);//datos de todas las tarjetas de un USer
router.post('/crear',trjControl.nueva);//crear una tarjeta
module.exports = router;