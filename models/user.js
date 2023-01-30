const mongoose = require('mongoose');

const {Schema} = mongoose;

const UserSchema = new Schema({
    clave: {type: String, required: true},
    dni : {type: String, required: true},
    nombre:{type: String},
    tipodni : {type: String, required: true},
    puntos : {Type: Number},
    tarjetas: {type: [Schema.Types.ObjectId],ref: "Tarjeta", required:false},
    tarjetaFavorita: {type: Schema.Types.ObjectId, required:false},
});
module.exports = mongoose.models.User || mongoose.model('User', UserSchema);