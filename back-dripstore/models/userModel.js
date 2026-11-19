const { DataTypes, Model } = require('sequelize');
const {sequelize} = require("../sequelize")

class User extends Model {}

User.init(
  {
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    surName: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'User',
  },
);

module.exports = User;