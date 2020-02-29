'use strict';
module.exports = (sequelize, DataTypes) => {

  const Image = sequelize.define('Image');
  const Category = sequelize.define('Category');
  const User = sequelize.define('User');

  const Product = sequelize.define('Product', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      defaultValue:'pending'
    },
    parent_category: DataTypes.STRING,
    sub_category: DataTypes.STRING,
    keywords: {
      type: DataTypes.TEXT,
      allowNull:true
    },
    userId: DataTypes.INTEGER,
  }, {freezeTableName: true});
  Product.associate = function(models) {
    // associations can be defined here
    Product.hasMany(Image, {foreignKey: 'productId', onDelete: 'CASCADE', hooks:true});
    Product.belongsTo(Category, {as: 'parentCategory', foreignKey: 'parent_category' });
    Product.belongsTo(Category, {as: 'subCategory', foreignKey: 'sub_category' });
    Product.belongsTo(User);
  };
  return Product;
};
