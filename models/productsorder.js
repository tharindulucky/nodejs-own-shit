'use strict';
module.exports = (sequelize, DataTypes) => {

  const Order = sequelize.define('Order');
  const Product = sequelize.define('Product');

  const ProductsOrder = sequelize.define('ProductsOrder', {
    productId: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
  }, {freezeTableName: true});
  ProductsOrder.associate = function(models) {
    ProductsOrder.belongsTo(Order, { targetKey: "id", foreignKey: "orderId" });
    ProductsOrder.belongsTo(Product, { targetKey: "id", foreignKey: "productId" });
  };
  return ProductsOrder;
};
