const tarjetas = require('../models/tarjetas');
const Tarjeta = require('../models/tarjetas');
const user = require('../models/user');
const TarjetaControl = {}

TarjetaControl.nueva = async (req, res) => {
    const tarj = new Tarjeta(req.body);
    usuario = await user.findOne({ "dni": tarj.DniTitular })
    
    if(!usuario){
        res.status(200).json({
            'status': '0',
            'msg': 'usuario inexistente.'
        })
    }else{
        try {tarj.Numeros = tarj.Numeros.slice(1,5) + ' **** **** '+ tarj.Numeros.slice(-4);
        console.log(tarj.Numeros)
            tarj.NombreTitular=usuario.nombre;
            usuario.tarjetas.push(tarj._id);
            
            await user.updateOne({"dni":tarj.DniTitular}, usuario);
            await tarj.save();
            res.status(400).json({
            'status': '1',
            'msg': 'tarjeta guaradada'
        })
        } catch (error) {
            console.log(error)
            res.status(200).json({
                status: 0,
                msg: "Error al obtener los usuarios"
            })
        }
        
    }
    
     
   
}
TarjetaControl.getTodos = async (req, res) => {
console.log(req.params.idUser);
usuario = await user.findById(req.params.idUser).populate("tarjetas");
console.log(usuario);
 if(!usuario){
    res.status(200).json({
        'status': '0',
        'msg': 'usuario inexistente.'
    })
 }else{
    res.status(200).json({
        'status': '1',
        'tarjetas': usuario.tarjetas
    })
 }
}
module.exports = TarjetaControl;