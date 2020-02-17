'use strict';
module.exports = (sequelize, DataTypes) => {

  const Image = sequelize.define('Image');
  const Category = sequelize.define('Category');

  const Product = sequelize.define('Product', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.STRING,
    status: {
      type: DataTypes.STRING,
      defaultValue:'pending'
    },
    parent_category: DataTypes.STRING,
    sub_category: DataTypes.STRING,
    keywords: {
      type: DataTypes.TEXT,
      allowNull:true
    }
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
    Product.hasMany(Image, {foreignKey: 'productId', onDelete: 'CASCADE', hooks:true});
    Product.belongsTo(Category, {as: 'parentCategory', foreignKey: 'parent_category' });
    Product.belongsTo(Category, {as: 'subCategory', foreignKey: 'sub_category' });
  };
  return Product;
};
