const mongoose = require('mongoose');
const {Schema} = mongoose;
const MenuSchema = new Schema({
    opciones:{type: [Schema.Types.ObjectId], ref:"opcion", required: true},
});
module.exports = mongoose.models.Menu || mongoose.model('Menu', MenuSchema );