const { DataTypes, Model } = require('sequelize');
const { sequelize } = require("../sequelize")

class ProductOption extends Model { }

ProductOption.init(
    {
        title: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        shape: {
            type: DataTypes.ENUM("circle", "square"),
            defaultValue: "square"
        },
        radius: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        type: {
            type: DataTypes.ENUM("text", "color"),
            defaultValue: "text"
        },
        values: {
            type: DataTypes.STRING(20),
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'ProductOption',
    },
);

module.exports = ProductOption;