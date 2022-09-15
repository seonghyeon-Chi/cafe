'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order_detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.order_detail.belongsTo(models.item, {
        foreignKey: 'item_id',
      })
      models.item.hasMany(models.order_detail, {
        foreignKey: 'item_id',
      })
      models.order_detail.belongsTo(models.order, {
        foreignKey: 'order_id'
      })
      models.order.hasMany(models.order_detail, {
        foreignKey: 'order_id'
      })
    }
  }
  order_detail.init({
    name: DataTypes.STRING,
    count: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'order_detail',
  });
  return order_detail;
};