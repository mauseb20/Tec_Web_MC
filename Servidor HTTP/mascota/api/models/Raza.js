/**
 * Raza.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      nombreRaza:{
          type:'string',
          enum:['Golden','Bulldog','Pitbull'],
          required:true //creacion de un registro de cada uno
      },
      mascotas:{//nombre en plural del modelo a relacionarse
          collection:'Mascota', //nombre del modelo
          via:'idRaza'//el campo por el cual lo vamos a relacionar FOREING KEY
      }
  }
};

