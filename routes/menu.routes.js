const opcControl = require('../controllers/menu.controller');
//creamos el manejador de rutas con express
const express = require('express');
const router = express.Router();
//definimos rutas 
 router.get('/completo', opcControl.getMenu);//datos de todas las tarjetas de un USer
router.post('/opcion',opcControl.cargaropc); //agrega una opcion al menu
module.exports = router;