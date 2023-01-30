const mongoose = require('mongoose');
const {Schema} = mongoose;

const transaccionSchema = new Schema({
    from: {type: Schema.Types.ObjectId, required: true},
    to : {type: Schema.Types.ObjectId, required: true},
    monto : {type: Number, required: true},
    estado : {type: String},
    fecha: {type: Date, required:false},
});
module.exports = mongoose.models.transaccion || mongoose.model('Transaccion', transaccionSchema);