'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
        'Productsorders',
        'quantity',
        {
          type: Sequelize.INTEGER,
          allowNull:false,
          after: 'productId'
        }

    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
        'Productsorders',
        'quantity'
    );
  }
};
