const { DataTypes, Model } = require('sequelize');
const { sequelize } = require("../sequelize")

class Category extends Model { }

Category.init(
    {
        name: {
            type: DataTypes.STRING(30),
            allowNull: false,
            unique: true
        },
        slug: {
            type: DataTypes.STRING(40),
            allowNull: false,
        },
        useInMenu: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        }
    },
    {
        sequelize,
        modelName: 'Category',
    },
);

module.exports = Category;