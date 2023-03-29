'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comment.belongsTo(models.Summoner, {
        foreignKey: 'summonerId'
      })
      Comment.belongsTo(models.Post, {
        foreignKey: 'postId'
      })
    }
  }
  Comment.init(
    {
      summonerName: DataTypes.STRING,
      content: DataTypes.STRING,
      summonerId: {
        type: DataTypes.INTEGER,
        field: 'summonerId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'summoners',
          key: 'id'
        }
      },
      postId: {
        type: DataTypes.INTEGER,
        field: 'postId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'posts',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Comment',
      tableName: 'comments'
    }
  )
  return Comment
}
