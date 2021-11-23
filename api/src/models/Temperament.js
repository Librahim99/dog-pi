const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('temperament', {
        id: {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: require("sequelize").UUIDV4
          },
        name: {
            type: DataTypes.STRING,
            allowNull:false
        }
    })
}