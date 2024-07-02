'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('perfil', [
      {
        img: 'IMG1',
        biografia: 'Biografia do usuário 1',
        telefone: '123456789',
        email: 'usuario1@example.com',
        morada: 'Endereço do usuário 1',
        id_usuario: 1,  // Supondo que você tenha uma referência para usuários
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        img: 'IMG2',
        biografia: 'Biografia do usuário 2',
        telefone: '987654321',
        email: 'usuario2@example.com',
        morada: 'Endereço do usuário 2',
        id_usuario: 2,  // Supondo que você tenha uma referência para usuários
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('perfil', null, {});
  }
};

