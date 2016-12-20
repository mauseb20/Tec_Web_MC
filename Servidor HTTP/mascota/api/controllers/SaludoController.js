/**
 * SaludoController
 * nodemailer
 * @description :: Server-side logic for managing Saludoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	hola:function(req,res){
        var parametros =req.allParams();
        if(req.method=='GET'){
            res.json({nombre:'hola GET',para:parametros});
        }else{
            if(req.method=='POST'){
            res.json({nombre:'hola POST'});
            }
            else{
                res.json({nombre:'hola TODOS'});
            }
        }
        
        /*res.send('Hola');*/
    },
    adios:function(req,res){
        res.send('Adios');
    },
    hora:function(req,res){
        res.send('Hora');
    }
};

