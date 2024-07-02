var DataTypes = require("sequelize").DataTypes;
var _artigos = require("./artigos");
var _comentarios = require("./comentarios");
var _mensagens = require("./mensagens");
var _perfil = require("./perfil");
var _sequelizemeta = require("./sequelizemeta");
var _users = require("./users");

function initModels(sequelize) {
  var artigos = _artigos(sequelize, DataTypes);
  var comentarios = _comentarios(sequelize, DataTypes);
  var mensagens = _mensagens(sequelize, DataTypes);
  var perfil = _perfil(sequelize, DataTypes);
  var sequelizemeta = _sequelizemeta(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  comentarios.belongsTo(artigos, { as: "id_Post_artigo", foreignKey: "id_Post"});
  artigos.hasMany(comentarios, { as: "comentarios", foreignKey: "id_Post"});
  artigos.belongsTo(users, { as: "id_usuario_user", foreignKey: "id_usuario"});
  users.hasMany(artigos, { as: "artigos", foreignKey: "id_usuario"});
  comentarios.belongsTo(users, { as: "id_usuario_user", foreignKey: "id_usuario"});
  users.hasMany(comentarios, { as: "comentarios", foreignKey: "id_usuario"});
  mensagens.belongsTo(users, { as: "id_usuario_user", foreignKey: "id_usuario"});
  users.hasMany(mensagens, { as: "mensagens", foreignKey: "id_usuario"});
  perfil.belongsTo(users, { as: "id_usuario_user", foreignKey: "id_usuario"});
  users.hasMany(perfil, { as: "perfils", foreignKey: "id_usuario"});

  return {
    artigos,
    comentarios,
    mensagens,
    perfil,
    sequelizemeta,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
