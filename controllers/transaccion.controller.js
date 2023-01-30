const Transaccion = require('../models/transaccion');
const Tarjeta = require('../models/tarjetas');
const user = require('../models/user');
const transaccion = require('../models/transaccion');
const TransaccionControl = {}

TransaccionControl.crear = async (req, res) => {//el body debe mandar todo lo de la transaccion
nueva = Transaccion(req.body);
console.log(nueva);

desde = await Tarjeta.findOne({ "_id": nueva.from})
para = await Tarjeta.findOne({ "_id": nueva.to})

if(!para || !desde){
    res.status(200).json({
        'status': '0',
        'msg': 'uno de los usuarios es inexistente.'
    })
}else{
    if((desde.saldo - nueva.monto)>0){
    try {
        ;
        desde.saldo = desde.saldo - nueva.monto;
        para.saldo = para.saldo + nueva.monto;
        
        await Tarjeta.updateOne({"_id":desde._id}, desde);
        await Tarjeta.updateOne({"_id":para._id}, para);
        nueva.fecha = new Date();
        nueva.estado= "realizada";
        await nueva.save();
        res.status(400).json({
        'status': '1',
        'msg': 'transeferencia realizada'
    })
    } catch (error) {
        h ="cancelada"
        nueva.fecha = new Date();
        nueva.estado = h;
        await nueva.save();
        console.log(error)
        res.status(200).json({
            status: 0,
            msg: "Error realizando la transaccion"
        })
    }
}else{
    nueva.estado="cancelada";
    await nueva.save();
    res.status(200).json({
        status: 0,
        msg: "saldo insuficiente"
    })
}
}

};

TransaccionControl.ultimasemanaUser = async (req, res) => {
respuesta =[];

console.log(req.query.b);

usuario = await user.findById(req.query.b);
console.log(usuario);
if(!usuario){
    res.status(400).json({
        status: 0,
        msg: "usuario inexistente"
    })

}else{
    let fecha=new Date();
    let HaceUnaSemana=new Date(fecha.getTime() - (24*60*60*1000)*7);
   const from = await transaccion.find({ from: usuario.tarjetas[0], fecha: { $gte: HaceUnaSemana }});
   const to = await transaccion.find({ to: usuario.tarjetas[0], fecha: { $gt: HaceUnaSemana }});
   res.status(200).json({
    status: 1,
    enviadas: from,
    recibidas: to
})
}
}




module.exports = TransaccionControl;