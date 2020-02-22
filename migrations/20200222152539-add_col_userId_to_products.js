'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
        'products',
        'userId',
        {
          type: Sequelize.INTEGER,
          allowNull:false,
          after: 'keywords'
        }

    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
        'products',
        'userId'
    );
  }
};
