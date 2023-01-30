//definimos el controlador
const transController = require('../controllers/transaccion.controller');
//creamos el manejador de rutas con express
const express = require('express');
const router = express.Router();
//definimos rutas
router.post('/crear',transController.crear);//crear Transaccion

// router.get('/user/ulitmosMovimientos',PsjControl.getUno);//ultimas transacciones (6) (recibidas y/o enviadas) de un usuario
 router.get('/user/ultimasemana',transController.ultimasemanaUser);
// router.get('/user/enviadas',PsjControl.getUno);//todas las transaccioones enviadas user
// router.get('/user/recibidas',PsjControl.getUno);//todas las transacciones recibidas user

// router.get('/tarjeta/ulitmosMovimientos',PsjControl.getUno);//ultimas transacciones (6) (recibidas y/o enviadas) de una tarjeta
// router.get('/tarjeta/enviadas',PsjControl.getUno);//todas las transaccioones enviadas tarjeta
// router.get('/tarjeta/recibidas',PsjControl.getUno);//todas las transaccioones recibidas tarjeta

module.exports = router;