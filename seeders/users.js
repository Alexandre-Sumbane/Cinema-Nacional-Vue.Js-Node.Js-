'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        nome: 'John',
        sobrenome: 'Doe',
        email: 'john.doe@example.com',
        senha: 'hashedpassword1',
        tipo_usuario: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Jane',
        sobrenome: 'Doe',
        email: 'jane.doe@example.com',
        senha: 'hashedpassword2',
        tipo_usuario: 'User',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Alice',
        sobrenome: 'Smith',
        email: 'alice.smith@example.com',
        senha: 'hashedpassword3',
        tipo_usuario: 'User',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
