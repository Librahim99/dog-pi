const { DataTypes,} = require('sequelize');
const uuidv4 = require('uuidv4')

module.exports = (sequelize) => {
  sequelize.define('dog', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: require("sequelize").UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    temperament: {
      type: DataTypes.JSON,
      allowNull:false
    },
    min_height: {
      type: DataTypes.JSON,
      allowNull: false
    },
    max_height: {
      type: DataTypes.JSON,
      allowNull: false
    },
    min_weight: {
      type: DataTypes.JSON,
      allowNull: false
    },
    max_weight: {
      type: DataTypes.JSON,
      allowNull: false
    },
    life_span: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};
