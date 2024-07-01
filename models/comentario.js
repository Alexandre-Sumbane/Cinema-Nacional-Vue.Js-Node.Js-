'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comentario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      const user = require('./user');
      const artigo = require('./artigo');

      artigo.hasMany(Comentario, {as: "comentarios", ForeignKey: 'id_Artigo'});
      user.hasMany(Comentario, {as: "comentarios", ForeignKey: 'id_user'});
    }
  }
  Comentario.init({
    texto: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Comentario',
    tableName: 'comentarios'
  });
  return Comentario;
};