'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    level: {
      type:DataTypes.STRING,
      defaultValue:'user'
    },
    phone: {
      type:DataTypes.STRING,
      allowNull:true
    },
    activated: {
      type:DataTypes.TINYINT,
      defaultValue: 0
    },
    avatar: {
      type:DataTypes.STRING,
      allowNull: true
    },
    account_type: {
      type: DataTypes.STRING,
      allowNull:true,
      defaultValue:'standard'
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
