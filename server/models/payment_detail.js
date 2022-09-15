'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class payment_detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.payment_detail.belongsTo(models.payment, {
        foreignKey: 'payment_id'
      })
      models.payment.hasMany(models.payment_detail, {
        foreignKey: 'payment_id'
      })
      models.payment_detail.belongsTo(models.item, {
        foreignKey: 'item_id'
      })
      models.item.hasMany(models.payment_detail, {
        foreignKey: 'item_id'
      })
    }
  }
  payment_detail.init({
    name: DataTypes.STRING,
    count: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'payment_detail',
  });
  return payment_detail;
};