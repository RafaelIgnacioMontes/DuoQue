'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class FriendList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  FriendList.init(
    {
      listOwnerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'summoners',
          key: 'id'
        }
      },
      friendId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'summoners',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'FriendList',
      tableName: 'friendlists'
    }
  )
  return FriendList
}
