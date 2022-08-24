const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/connection")

class Item extends Model {}

Item.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            unique: true,
            autoIncrement: true,
        },
        item_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        item_cost: {
            type: DataTypes.DECIMAL(10,2),
        },
        list_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "list",
                key: "id",
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: "item",
    }
);

module.exports = Item
