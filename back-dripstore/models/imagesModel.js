const { DataTypes, Model } = require('sequelize');
const { sequelize } = require("../sequelize")

class Images extends Model { }

Images.init(
    {
        enabled: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        path: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'Images',
    },
);

module.exports = Images;