const sequelize= require('./models');
const initModels = require('./models/init-models');

const models = initModels(sequelize);

module.exports = { sequelize, models };

