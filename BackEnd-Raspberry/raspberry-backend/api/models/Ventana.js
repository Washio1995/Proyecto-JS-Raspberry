/**
 * Ventana.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    idCuarto: {
      model: 'Cuarto' //Modelo Papa
    },
    sensor:{
      collection:'sensor', // Modelo Hijo
      via:'idVentana' //Nombre del Campo foreign key
    },

  },

};

