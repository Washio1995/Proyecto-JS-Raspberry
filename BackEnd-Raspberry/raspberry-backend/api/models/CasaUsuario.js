/**
 * CasaUsuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    idUsuario: {
      model: 'Usuario' //Modelo Papa
    },
    idCasa: {
      model: 'Casa' //Modelo Papa
    }

  },

};

