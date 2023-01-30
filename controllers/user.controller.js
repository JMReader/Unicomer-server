 const User = require('../models/user');
// const Area = require('../models/area');
const userControl = {}

userControl.register = async (req, res) => {
    const usuario = new User(req.body);
    console.log(usuario)
    try {
        await usuario.save();
        res.status(200).json({
            'status': '1',
            'msg': 'User guardado correctamente.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}
userControl.TarjetaFav = async (req, res) => { //debemos enviar como parametro el id de usuario y el id dela tarjeta que debseamos usar

    tarj = req.params.tarjeta
    usuario = User.findById(req.params.user)
    tarj.NombreTitular= usuario.nombre;
    if(!usuario){
        res.json({
            status: 0,
            msg: "Usuario no encontrado"
        })
    }else{
    tarjFav=User.aggregate([
        {
            $unwind:"tarjetas"
        },
        {
            $match:{
                "tarjetas.id": tarj
            }
        }
    ]);
    usuario.tarjetaFavorita = tarjfav._id;
    res.json({
        status: 1,
        msg: 'tarjeta asignada correctamente'
    });

}



}



userControl.loginUsuario = async (req, res) => {

    const criteria = {
        dni: req.body.dni,
        clave: req.body.clave
    }
    //const user = await User.findOne(criteria).populate("area").populate("roles");
    //res.json(user);
    //.populate("area"); User.findOne(criteria).populate("tarjetas").exec(function (err, usuario)
     User.findOne(criteria).populate("tarjetas").exec(function (err, usuario) {
        if (err) {
            console.log(err);
            // res.json({
            //     status: 0,
            //     msg: 'Error procesando operacion.'
            // })
        };

        if (!usuario) {
            res.json({
                status: 0,
                msg: "Usuario no encontrado"
             })
        } else {
            //const unToken = jwt.sign({id: user._id}, "secretkey");
            // creo un token y guardo el user id en el campo secretkey y recien tendra acceso
            res.json({
                status: 1,
                msg: "Usuario encontrado",
                user: usuario
                /*, token: unToken */
            })
        }
    }
    )
}
module.exports = userControl;

