/**
 * Piso.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nivel:{
      type:'number',
      required:true,
        unique: true
    },
    idCasa: {
      model: 'Casa' //Modelo Papa
    },
    cuartos:{
      collection:'cuarto', // Modelo Hijo
      via:'idPiso' //Nombre del Campo foreign key
    }


  },

};

