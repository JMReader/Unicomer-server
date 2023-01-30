const express = require('express');
const cors = require('cors');
const {mongoose} = require('./database');
var app = express();
//middlewares
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));
//Cargamos el modulo de direccionamiento de rutas
app.use('/user', require('./routes/user.routes.js'));
app.use('/transacciones', require('./routes/transaccion.routes'));
app.use('/tarjetas', require('./routes/tarjeta.routes'));
app.use('/menu', require('./routes/menu.routes'));
//setting (decimos el puerto que va a usar el servidor)
app.set('port', process.env.PORT || 3000);
//starting the server, incia el server
app.listen(app.get('port'), () => {
console.log(`Server iniciado en puerto: `, app.get('port'));
});