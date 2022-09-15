'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.order.belongsTo(models.user, {
        foreignKey: 'user_id'
      })
      models.user.hasMany(models.order, {
        foreignKey: 'user_id'
      })
    }
  }
  order.init({
    totalPrice: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};