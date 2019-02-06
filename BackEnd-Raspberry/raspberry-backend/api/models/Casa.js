/**
 * Casa.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    direccionCasa:{
      type:'string',
      columnName:'direccion_casa'
    },
    casas:{
      collection:'casa', // Modelo Hijo
      via:'idCasa' //Nombre del Campo foreign key
    },


  },

};

