/**
 * RutasController
 *
 * @description :: Server-side logic for managing Rutas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	home:function(req,res){
        return res.view('vistas/home',{
            titulo:'Inicio',
            numero:1,
            mauricio:{
                nombre:'Mauricio',
                cedula:1725100141
            }
        })
    },
    crearUsuario:function(req,res){
        return res.view('vistas/CrearUsuario',{
            titulo:'Crear',
            numero:1,
            mauricio:{
                nombre:'Mauricio',
                cedula:1725100141
            }
        })
    }
};

