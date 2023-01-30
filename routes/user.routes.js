
const UserControl = require('../controllers/user.controller');
//creamos el manejador de rutas con express
const express = require('express');
const router = express.Router();
//definimos rutas 
router.post('/login', UserControl.loginUsuario);//logearse
router.post('/register', UserControl.register);//registrarse
router.put('/tarjetaFav/:id',UserControl.TarjetaFav);//elegirTarjetaFavorita

module.exports = router;