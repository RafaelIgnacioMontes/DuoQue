'use strict'

const { UUID, UUIDV4 } = require('sequelize')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('summoners', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: { isEmail: true },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      passwordDigest: {
        type: Sequelize.STRING,
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      puuid: Sequelize.STRING,
      profileIconId: Sequelize.INTEGER,
      accountId: Sequelize.STRING,
      summonerName: {
        type: Sequelize.STRING,
        allownull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      tagLine: {
        type: Sequelize.STRING,
        allownull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      summonerLevel: Sequelize.INTEGER,
      matchHistoryId: Sequelize.INTEGER,

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
    await queryInterface.dropTable('summoners')
  }
}
