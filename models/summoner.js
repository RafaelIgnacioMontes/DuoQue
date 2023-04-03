'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Summoner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Summoner.hasMany(models.Post, {
        foreignKey: 'summonerId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })

      Summoner.belongsToMany(models.Summoner, {
        as: 'friends',
        through: models.FriendList,
        foreignKey: 'summonerId'
      })
      Summoner.belongsToMany(models.Summoner, {
        as: 'summoner',
        through: models.FriendList,
        foreignKey: 'friendId'
      })
      Summoner.hasMany(models.Comment, {
        foreignKey: 'summonerId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Summoner.hasOne(models.ProfileInfo, {
        foreignKey: 'summonerId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Summoner.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: { isEmail: true },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      passwordDigest: {
        type: DataTypes.STRING,
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      puuid: DataTypes.STRING,
      profileIconId: DataTypes.INTEGER,
      accountId: DataTypes.STRING,
      summonerName: {
        type: DataTypes.STRING,
        allownull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      tagLine: {
        type: DataTypes.STRING,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      summonerId: {
        type: DataTypes.STRING
      },
      tier: {
        type: DataTypes.STRING
      },
      rank: {
        type: DataTypes.STRING
      },
      leaguePoints: {
        type: DataTypes.INTEGER
      },
      wins: {
        type: DataTypes.INTEGER
      },
      losses: {
        type: DataTypes.INTEGER
      },
      hotStreak: {
        type: DataTypes.BOOLEAN
      },

      summonerLevel: DataTypes.INTEGER,
      matchHistoryId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Summoner',
      tableName: 'summoners'
    }
  )
  return Summoner
}
