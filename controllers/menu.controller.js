const opcion = require('../models/opcion');
const menu = require('../models/menu');
const menControl = {}

menControl.getMenu = async (req, res) => {
    console.log(req.params.idMenu);
    
    menuactual = await menu.findById(req.query.idMenu).populate("opciones");
    console.log(menuactual);
     if(!menuactual){
        menuactual = await menu.find().populate("opciones");
        res.status(200).json({
            'status': '1',
            'msg': menuactual
        })
     }else{
        res.status(200).json({
            'status': '1',
            'menu': menuactual
        })
     }
    }

menControl.cargaropc=async (req, res) => { 
    crear=false;
    opcioncargar = new opcion(req.body)
    if(req.query.idMenu==null){
        menuactual= new menu();
        crear=true;
    }else{
        menuactual = await menu.findById(req.query.idMenu);
    }
    menuactual.opciones.push(opcioncargar._id);
    try {
        if(crear==true){
           await menuactual.save();
        }else{
            await menu.updateOne({"_id":menuactual._id}, menuactual);
        }
        await opcioncargar.save();
        res.status(400).json({
            'status': '1',
            'menu': "opcion cargada"
        })
        
    } catch (error) {
        res.status(200).json({
            'status': '0',
            'menu': "opcion cargada"
        })
  
    }
    
    


}

module.exports = menControl;

