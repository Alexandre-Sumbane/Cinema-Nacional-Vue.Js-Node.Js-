'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Perfil', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      comentario: {
        type: Sequelize.TEXT
      },
      img: {
        type: Sequelize.STRING,
      },
      telefone:{
        type: Sequelize.STRING(15),
      },
      email:{
        type: Sequelize.STRING(40)
      },
      morada:{
        type: Sequelize.STRING(50)
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: 'users', 
          key: 'id'      
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Perfil');
  }
};