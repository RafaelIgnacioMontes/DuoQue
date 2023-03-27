'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('friendlists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      summonerId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        reference: {
          model: 'summoners',
          key: 'id'
        }
      },
      friendId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'summoners',
          key: 'id'
        }
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('friendlists')
  }
}
