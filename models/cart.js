'use strict';
module.exports = (sequelize, DataTypes) => {

  const Product = sequelize.define('Product');

  const Cart = sequelize.define('Cart', {
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Cart.associate = function(models) {
    Cart.belongsTo(Product, { targetKey: "id", foreignKey: "productId" });
  };
  return Cart;
};
