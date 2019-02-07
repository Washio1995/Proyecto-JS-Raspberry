/**
 * Usuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre:{
      type:'string',
      required: true
    },
    apellido:{
      type:'string',
      required: true
    },
    correoElectronico: {
      type: 'string',
      columnName: 'correo_electronico',
      isEmail: true,
        unique: true
    },
    password:{
      type:'string',
      required: true
    },
    rol: {
      type: 'string',
      isIn: [
        'Administrador',
        'Usuario'
      ],
      defaultsTo: 'Usuario'
    },



  },

};

