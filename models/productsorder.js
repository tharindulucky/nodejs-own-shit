'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductsOrder = sequelize.define('ProductsOrder', {
    productId: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
  }, {});
  ProductsOrder.associate = function(models) {
    // associations can be defined here
  };
  return ProductsOrder;
};
