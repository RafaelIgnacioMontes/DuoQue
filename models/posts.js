'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Posts.belongsTo(models.Summoner, {
        foreignKey: 'summonerId'
      })
      Posts.hasMany(models.Comment, {
        foreignKey: 'comments_Id'
      })
    }
  }
  Posts.init(
    {
      summonerName: DataTypes.STRING,
      content: DataTypes.STRING,
      summonerId: {
        type: DataTypes.INTEGER,
        field: 'summonerId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        reference: {
          model: 'summoners',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Post',
      tableName: 'posts'
    }
  )
  return Posts
}
