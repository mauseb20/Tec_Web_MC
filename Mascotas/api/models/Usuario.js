/**
 * Usuario.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var Passwords = require('machinepack-passwords');

module.exports = {

  attributes: {
      nombres:{
          type:'string',
          minLength:5,
          required:true
      },
      apellidos:{
          type:'string',
          minLength:5,
          required:true
      },
      correo:{
          type:'string',
          email:true,
          defaultsTo:'correo@invalido.com'
      }
  },
    
    beforeCreate: function(values,callBack){
        sails.log.info(values);
        //callBack("hola")
        Passwords.encryptPassword({
            password: values.password,
        }).exec({
        // An unexpected error occurred.
            error: function (err) {
                callBack(err)
            },
        // OK.
            success: function (result) {
                values.password=result;
                callBack();
            },
        });
    },
    
    beforeUpdate: function(values,callBack){
        sails.log.info(values);
        //callBack("hola")
        Passwords.encryptPassword({
            password: values.password,
        }).exec({
        // An unexpected error occurred.
            error: function (err) {
                callBack(err)
            },
        // OK.
            success: function (result) {
                values.password=result;
                callBack();
            },
        });
    }
    
};











