'use strict';
var Liana = require('forest-express-sequelize');
var moment = require('moment');

// Be careful: Javascript months start at 0 (so zero stands for january) 

Liana.collection('cast', {
  fields: [{
    field: 'alter_auto',
    type: 'String',
    get: function (object) {
      try {
        moment().diff(moment(object.geburtsdatum, "MM.DD.YYYY"), 'years', false);
        return ;
      } catch (error) {
        return ''
      }
    }
  }]
});