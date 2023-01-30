const mongoose = require('mongoose');
const {Schema} = mongoose;
const OpcionSchema = new Schema({
    texto:{type: String, required: true},
    icon:{type: String, required: true},  
    url:{type: String, required: true}
});
module.exports = mongoose.models.Opcion || mongoose.model('opcion', OpcionSchema);