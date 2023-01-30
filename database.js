const mongoose = require('mongoose');
//cuando creemos el proyecto de mongo hay que cambiar la url 
const URI = 'mongodb://localhost:27017/unicomer';
mongoose.connect(URI)
.then(db=>console.log('DB is connected'))
.catch(err=>console.error(err))
module.exports = mongoose;