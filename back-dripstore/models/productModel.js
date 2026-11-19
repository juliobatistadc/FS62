const { DataTypes, Model } = require('sequelize');
const { sequelize } = require("../sequelize")

class Product extends Model { }

Product.init(
    {
        enabled: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        name: {
            type: DataTypes.STRING(40),
            allowNull: false,
        },
        slug: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        useInMenu: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0
        },
        description: {
            type: DataTypes.STRING(200),
        },
        discount: {
            type: DataTypes.FLOAT(4,2),
            defaultValue: 0,
        },
        price: {
            type: DataTypes.FLOAT(10,2),
            allowNull: false,
        }
    },
    {
        sequelize,
        modelName: 'Product',
    },
);

module.exports = Product;