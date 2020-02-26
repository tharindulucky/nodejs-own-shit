'use strict';
module.exports = (sequelize, DataTypes) => {

  const ProductsOrder = sequelize.define('ProductsOrder');

  const Order = sequelize.define('Order', {
    userId: DataTypes.INTEGER,
    status: {
      type: DataTypes.STRING,
      defaultValue:'pending'
    },
  }, {});
  Order.associate = function(models) {
    Order.hasMany(ProductsOrder);
  };
  return Order;
};
