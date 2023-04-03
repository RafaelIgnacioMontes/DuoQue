'use strict'
const { Model, DATE } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class ProfileInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ProfileInfo.belongsTo(models.Summoner, {
        foreignKey: 'summonerId'
      })
    }
  }
  ProfileInfo.init(
    {
      summonerId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'summoners',
          key: 'id'
        }
      },
      preferedRole: DataTypes.STRING,
      champions: DataTypes.STRING,
      lookingFor: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'ProfileInfo',
      tableName: 'profileinfos'
    }
  )
  return ProfileInfo
}
