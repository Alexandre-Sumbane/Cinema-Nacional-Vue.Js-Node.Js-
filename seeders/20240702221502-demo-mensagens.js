'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('mensagens', [
      {
        titulo: 'Mensagem 1',
        mensagem: 'Esta é a mensagem do usuário 1',
        id_usuario: 1,  
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        titulo: 'Mensagem 2',
        mensagem: 'Esta é a mensagem do usuário 2',
        id_usuario: 2,  
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    //await queryInterface.bulkDelete('mensagens', null, {});
  }
};
