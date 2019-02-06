/**
 * Log.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    fechaLog:{
      type:'string',
      columnName:'fecha_log',
      required:true
    },
    idSensor:{
      model:'Sensor'
    }

  },

};

