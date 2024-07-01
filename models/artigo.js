'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Artigo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      const user = require('./user');
      user.hasMany(Artigo, {as: "artigos", ForeignKey: 'id_user'});
    }
  }
  Artigo.init({
    titulo: DataTypes.STRING,
    texto: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Artigo',
    tableName: 'artigos'
  });
  return Artigo;
};