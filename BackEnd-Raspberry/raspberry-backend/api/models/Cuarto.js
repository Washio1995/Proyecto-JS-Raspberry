/**
 * Cuarto.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    tipoDeCuarto: {
      type: 'string',
      isIn:[
        'Cocina',
        'Dormitorio',
        'Sala'
      ],
      defaultsTo: 'Cocina'
    },
    idPiso: {
      model: 'Piso' //Modelo Papa
    },
    ventanas:{
      collection:'ventana', // Modelo Hijo
      via:'idCuarto' //Nombre del Campo foreign key
    },




  },

};

