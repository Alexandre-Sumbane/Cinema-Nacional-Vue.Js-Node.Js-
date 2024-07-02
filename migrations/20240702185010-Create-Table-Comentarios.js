'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Comentarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      comentario: {
        type: Sequelize.TEXT,
        allowNull:false
      },
      img: {
        type: Sequelize.STRING,
      },
      id_Post:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: 'Artigos', 
          key: 'id'      
        }
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
    await queryInterface.dropTable('Comentarios');
  }
};