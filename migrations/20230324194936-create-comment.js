'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      summonerName: Sequelize.STRING,
      content: Sequelize.STRING,
      summonerId: {
        type: Sequelize.INTEGER,
        field: 'summonerId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        reference: {
          model: 'summoners',
          key: 'id'
        }
      },
      postId: {
        type: Sequelize.INTEGER,
        field: 'postId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'posts',
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
    await queryInterface.dropTable('comments')
  }
}
