'use strict';

module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('cast', {
    vorname: {
      type: DataTypes.STRING,
    },
    nachname: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'cast',
    
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
  };

  return Model;
};
