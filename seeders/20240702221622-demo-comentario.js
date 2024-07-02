'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('comentarios', [
      {
        comentario: 'Este é o comentário do usuário 1 no artigo 1',
        id_Post: 1,  // Supondo que você tenha uma referência para artigos
        id_usuario: 1,  // Supondo que você tenha uma referência para usuários
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        comentario: 'Este é o comentário do usuário 2 no artigo 1',
        id_Post: 1,  // Supondo que você tenha uma referência para artigos
        id_usuario: 2,  // Supondo que você tenha uma referência para usuários
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('comentarios', null, {});
  }
};
