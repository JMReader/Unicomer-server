const mongoose = require('mongoose');
const {Schema} = mongoose;
const TarjetaSchema = new Schema({
    DniTitular:{type: String, required: true},
    NombreTitular:{type: String },
    Numeros: {type: String, required: true},
    Tipo : {type: String, required:true},
    cvv : {type: Number, required:true},
    banco :{type: String },
    vencimiento :{type: String},
    saldo: {type: Number, required:false}
});
module.exports = mongoose.models.Tarjeta || mongoose.model('Tarjeta', TarjetaSchema);