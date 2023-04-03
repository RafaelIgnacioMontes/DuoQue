'use strict'
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
      summonerId: {
        type: Sequelize.INTEGER,
        field: 'summoner_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
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
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      summonerLevel: Sequelize.INTEGER,
      matchHistoryId: Sequelize.INTEGER,
      summonerId: {
        type: Sequelize.STRING
      },
      tier: {
        type: Sequelize.STRING
      },
      rank: {
        type: Sequelize.STRING
      },
      leaguePoints: {
        type: Sequelize.INTEGER
      },
      wins: {
        type: Sequelize.INTEGER
      },
      losses: {
        type: Sequelize.INTEGER
      },
      hotStreak: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('summoners')
  }
}
