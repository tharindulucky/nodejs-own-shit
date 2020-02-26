'use strict';
module.exports = (sequelize, DataTypes) => {

  const Order = sequelize.define('Order');
  const Product = sequelize.define('Product');

  const ProductsOrder = sequelize.define('ProductsOrder', {
    productId: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
  }, {});
  ProductsOrder.associate = function(models) {
    ProductsOrder.belongsTo(Order);
    ProductsOrder.belongsTo(Product);
  };
  return ProductsOrder;
};
