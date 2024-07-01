'use strict';
const {
  Model,
  ForeignKeyConstraintError
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mensagem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      const user = require('./user');

      user.hasMany(Mensagem, {as: "mensagens", ForeignKey: 'id_user'});
    }
  }
  Mensagem.init({
    mensagem: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Mensagem',
    tableName: 'mensagens'
  });
  return Mensagem;
};