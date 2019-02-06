/**
 * Sensor.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    tipoSensor:{
      type:'string',
      required:true,
      columnName:'tipo_sensor',
      isIn:[
        'Temperatura',
        'Actuador'
      ]
    },

    estado:{
      type:'string',
      isIn:[
        'abierto',
        'cerrado'
      ]
    },

    logs:{
      collection:'log', // Modelo Hijo
      via:'idSensor' //Nombre del Campo foreign key
    },

    idVentana:{
      model:'Ventana',
      unique: true
    }
  },

};

