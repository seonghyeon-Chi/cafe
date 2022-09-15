'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.payment.belongsTo(models.user, {
        foreignKey: 'user_id'
      })
      models.user.hasMany(models.payment, {
        foreignKey: 'user_id'
      })
    }
  }
  payment.init({
    totalPrice: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'payment',
  });
  return payment;
};