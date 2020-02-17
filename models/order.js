'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    userId: DataTypes.INTEGER,
    status: {
      type: DataTypes.STRING,
      defaultValue:'pending'
    },
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
  };
  return Order;
};
